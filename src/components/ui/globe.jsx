import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import * as THREE from "three";
import ThreeGlobe from "three-globe";

import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import {
  OrbitControls,
} from "@react-three/drei";

/* =========================================================
   WORLD GLOBE
========================================================= */

function GlobeObject({
  data,
  globeConfig,
}) {
  const globeRef = useRef(null);
  const groupRef = useRef(null);

  const [countries, setCountries] = useState([]);

  /* -------------------------------------------------------
     LOAD COUNTRY DATA
  ------------------------------------------------------- */

  useEffect(() => {
    let mounted = true;

    async function loadCountries() {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/vasturiano/three-globe/master/example/datasets/ne_110m_admin_0_countries.geojson"
        );

        if (!response.ok) {
          throw new Error(
            "Failed to load country data"
          );
        }

        const worldData =
          await response.json();

        if (mounted) {
          setCountries(
            worldData?.features || []
          );
        }
      } catch (error) {
        console.error(
          "Globe country data error:",
          error
        );
      }
    }

    loadCountries();

    return () => {
      mounted = false;
    };
  }, []);

  /* -------------------------------------------------------
     CREATE GLOBE
  ------------------------------------------------------- */

  const globe = useMemo(() => {
    const globeObject =
      new ThreeGlobe();

    /* ============================
       ATMOSPHERE
    ============================ */

    globeObject
      .showAtmosphere(
        globeConfig.showAtmosphere
      )
      .atmosphereColor(
        globeConfig.atmosphereColor
      )
      .atmosphereAltitude(
        globeConfig.atmosphereAltitude
      );

    /* ============================
       GLOBE MATERIAL
    ============================ */

    const material =
      globeObject.globeMaterial();

    material.color =
      new THREE.Color(
        globeConfig.globeColor
      );

    material.emissive =
      new THREE.Color(
        globeConfig.emissive
      );

    material.emissiveIntensity =
      globeConfig.emissiveIntensity;

    material.shininess =
      globeConfig.shininess;

    /* ============================
       COUNTRY HEX POLYGONS
    ============================ */

    globeObject
      .hexPolygonsData([])
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.5)
      .hexPolygonUseDots(true)
      .hexPolygonDotResolution(5)
      .hexPolygonAltitude(0.012)
      .hexPolygonColor(
        () =>
          globeConfig.polygonColor
      );

    /* ============================
       ARCS
    ============================ */

    globeObject
      .arcsData(data)
      .arcStartLat("startLat")
      .arcStartLng("startLng")
      .arcEndLat("endLat")
      .arcEndLng("endLng")
      .arcColor("color")
      .arcAltitude("arcAlt")
      .arcStroke(0.5)
      .arcDashLength(
        globeConfig.arcLength
      )
      .arcDashGap(3)
      .arcDashInitialGap(
        (item) =>
          item.order * 0.5
      )
      .arcDashAnimateTime(
        globeConfig.arcTime
      )
      .arcCurveResolution(32)
      .arcCircularResolution(8);

    /* ============================
       CONNECTION POINTS
    ============================ */

    const points = [];

    data.forEach((item) => {
      points.push({
        lat: item.startLat,
        lng: item.startLng,
        color: item.color,
      });

      points.push({
        lat: item.endLat,
        lng: item.endLng,
        color: item.color,
      });
    });

    globeObject
      .pointsData(points)
      .pointLat("lat")
      .pointLng("lng")
      .pointColor("color")
      .pointAltitude(0.025)
      .pointRadius(
        globeConfig.pointSize * 0.01
      )
      .pointResolution(12)
      .pointsMerge(false);

    /* ============================
       RINGS
    ============================ */

    const uniquePoints = [];
    const pointKeys = new Set();

    points.forEach((point) => {
      const key =
        `${point.lat.toFixed(2)}-${point.lng.toFixed(2)}`;

      if (!pointKeys.has(key)) {
        pointKeys.add(key);

        uniquePoints.push(point);
      }
    });

    globeObject
      .ringsData(uniquePoints)
      .ringLat("lat")
      .ringLng("lng")
      .ringColor("color")
      .ringMaxRadius(2.5)
      .ringPropagationSpeed(1.5)
      .ringRepeatPeriod(1800);

    return globeObject;
  }, [data, globeConfig]);

  /* -------------------------------------------------------
     SAVE GLOBE REF
  ------------------------------------------------------- */

  useEffect(() => {
    globeRef.current = globe;

    return () => {
      globeRef.current = null;
    };
  }, [globe]);

  /* -------------------------------------------------------
     COUNTRY DATA
  ------------------------------------------------------- */

  useEffect(() => {
    if (
      globeRef.current &&
      countries.length > 0
    ) {
      globeRef.current.hexPolygonsData(
        countries
      );
    }
  }, [countries]);

  /* -------------------------------------------------------
     INITIAL POSITION
  ------------------------------------------------------- */

  useEffect(() => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.y =
      THREE.MathUtils.degToRad(
        -globeConfig.initialPosition.lng *
          0.55
      );

    groupRef.current.rotation.x =
      THREE.MathUtils.degToRad(
        globeConfig.initialPosition.lat *
          0.12
      );
  }, [globeConfig.initialPosition]);

  /* -------------------------------------------------------
     AUTO ROTATE
  ------------------------------------------------------- */

  useFrame((_, delta) => {
    if (!groupRef.current) {
      return;
    }

    if (globeConfig.autoRotate) {
      groupRef.current.rotation.y +=
        delta *
        globeConfig.autoRotateSpeed *
        0.18;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive
        object={globe}
        scale={2.65}
      />
    </group>
  );
}

/* =========================================================
   GLOBE SCENE
========================================================= */

function GlobeScene({
  data,
  globeConfig,
}) {
  return (
    <>
      {/* Ambient light */}

      <ambientLight
        color={
          globeConfig.ambientLight
        }
        intensity={1.8}
      />

      {/* Left light */}

      <directionalLight
        position={[
          -5,
          5,
          5,
        ]}
        color={
          globeConfig.directionalLeftLight
        }
        intensity={2}
      />

      {/* Top light */}

      <directionalLight
        position={[
          5,
          5,
          2,
        ]}
        color={
          globeConfig.directionalTopLight
        }
        intensity={2}
      />

      {/* Point light */}

      <pointLight
        position={[
          5,
          2,
          5,
        ]}
        color={
          globeConfig.pointLight
        }
        intensity={2}
      />

      {/* Globe */}

      <GlobeObject
        data={data}
        globeConfig={globeConfig}
      />

      {/* Controls */}

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.45}
        minPolarAngle={
          Math.PI / 2.35
        }
        maxPolarAngle={
          Math.PI / 1.65
        }
      />
    </>
  );
}

/* =========================================================
   WORLD COMPONENT
========================================================= */

export function World({
  globeConfig,
  data,
  className = "",
}) {
  return (
    <div
      className={`
        relative
        mx-auto
        aspect-square
        h-full
        w-full
        ${className}
      `}
    >
      <Canvas
        camera={{
          position: [
            0,
            0,
            8,
          ],
          fov: 42,
        }}
        dpr={[
          1,
          1.5,
        ]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference:
            "high-performance",
        }}
      >
        <GlobeScene
          data={data}
          globeConfig={
            globeConfig
          }
        />
      </Canvas>
    </div>
  );
}