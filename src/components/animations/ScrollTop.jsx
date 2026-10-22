import { useRef, useEffect, useCallback } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const ScrollTop = ({
  sparkColor = "3a00b7",
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = "ease-out",
  extraScale = 1,
}) => {
  const canvasRef = useRef(null);
  const sparksRef = useRef([]);
  const animationFrameRef = useRef(null);

  const icon = useRef(null);

  // ==========================================
  // EASING FUNCTION
  // ==========================================
  const easeFunc = useCallback(
    (t) => {
      switch (easing) {
        case "linear":
          return t;

        case "ease-in":
          return t * t;

        case "ease-in-out":
          return t < 0.5
            ? 2 * t * t
            : -1 + (4 - 2 * t) * t;

        default:
          // ease-out
          return t * (2 - t);
      }
    },
    [easing]
  );

  // ==========================================
  // CANVAS SETUP
  // ==========================================
  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      const ctx = canvas.getContext("2d");

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener(
        "resize",
        resizeCanvas
      );
    };
  }, []);

  // ==========================================
  // SPARK ANIMATION
  // ==========================================
  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const draw = (timestamp) => {
      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );

      sparksRef.current = sparksRef.current.filter(
        (spark) => {
          const elapsed =
            timestamp - spark.startTime;

          if (elapsed >= duration) {
            return false;
          }

          const progress =
            elapsed / duration;

          const eased = easeFunc(progress);

          const distance =
            eased *
            sparkRadius *
            extraScale;

          const lineLength =
            sparkSize * (1 - eased);

          const x1 =
            spark.x +
            distance *
              Math.cos(spark.angle);

          const y1 =
            spark.y +
            distance *
              Math.sin(spark.angle);

          const x2 =
            spark.x +
            (distance + lineLength) *
              Math.cos(spark.angle);

          const y2 =
            spark.y +
            (distance + lineLength) *
              Math.sin(spark.angle);

          // Fade out
          const opacity = 1 - eased;

          ctx.save();

          ctx.globalAlpha = opacity;

          ctx.strokeStyle = sparkColor;

          ctx.lineWidth = 2;

          ctx.lineCap = "round";

          // Glow
          ctx.shadowColor = sparkColor;

          ctx.shadowBlur = 8;

          ctx.beginPath();

          ctx.moveTo(x1, y1);

          ctx.lineTo(x2, y2);

          ctx.stroke();

          ctx.restore();

          return true;
        }
      );

      animationFrameRef.current =
        requestAnimationFrame(draw);
    };

    animationFrameRef.current =
      requestAnimationFrame(draw);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(
          animationFrameRef.current
        );
      }
    };
  }, [
    sparkColor,
    sparkSize,
    sparkRadius,
    sparkCount,
    duration,
    easeFunc,
    extraScale,
  ]);

  // ==========================================
  // GLOBAL CLICK SPARK
  // ==========================================
  useEffect(() => {
    const handleClick = (event) => {
      const now = performance.now();

      const newSparks = Array.from(
        { length: sparkCount },
        (_, index) => ({
          x: event.clientX,

          y: event.clientY,

          angle:
            (2 * Math.PI * index) /
            sparkCount,

          startTime: now,
        })
      );

      sparksRef.current.push(
        ...newSparks
      );
    };

    document.addEventListener(
      "click",
      handleClick
    );

    return () => {
      document.removeEventListener(
        "click",
        handleClick
      );
    };
  }, [sparkCount]);

  // ==========================================
  // SCROLL TO TOP BUTTON
  // ==========================================
  useEffect(() => {
    const handleScroll = () => {
      if (!icon.current) return;

      if (window.scrollY > 150) {
        icon.current.style.right = "1.5rem";
      } else {
        icon.current.style.right =
          "-10rem";
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  // ==========================================
  // SCROLL TOP FUNCTION
  // ==========================================
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ==========================================
  // RETURN
  // ==========================================
  return (
    <>
      {/* =====================================
          GLOBAL CLICK SPARK CANVAS
      ====================================== */}

      <canvas
        ref={canvasRef}
        className="
          fixed
          inset-0
          w-screen
          h-screen
          pointer-events-none
          select-none
          z-[99999]
        "
      />

      {/* =====================================
          SCROLL TO TOP BUTTON
      ====================================== */}

      <div
        ref={icon}
        onClick={scrollTop}
        className="
          fixed
          top-[91%]
          -right-[10rem]
          z-[99998]
          cursor-pointer
          rounded-full
          bg-[var(--white-color)]
          text-[var(--black-color)]
          shadow-lg
          transition-all
          duration-300
          hover:scale-110
          active:scale-90
        "
      >
        <MdKeyboardArrowUp
          className="
            p-[2px]
            text-2xl
            transition-all
            duration-150
            active:text-[22px]
          "
        />
      </div>
    </>
  );
};

export default ScrollTop;