import { useEffect, useRef } from "react";

const ShapeGrid = ({
  speed = 0.5,
  squareSize = 40,
  direction = "diagonal",
  borderColor = "#fff",
  hoverFillColor = "#222",
  shape = "square",
  hoverTrailAmount = 5,
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame;
    let isVisible = true;
    let isPageVisible = true;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;

    let columns = 0;
    let rows = 0;

    let offsetX = 0;
    let offsetY = 0;

    let hoveredCell = null;

    const trail = [];

    const resize = () => {
      const rect = container.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      columns = Math.ceil(width / squareSize) + 2;
      rows = Math.ceil(height / squareSize) + 2;
    };

    const getCell = (x, y) => {
      const col = Math.floor((x + offsetX) / squareSize);
      const row = Math.floor((y + offsetY) / squareSize);

      return {
        col,
        row,
      };
    };

    const cellKey = (col, row) => `${col}-${row}`;

    const drawSquare = (x, y, size, fill = null) => {
      if (fill) {
        ctx.fillStyle = fill;
        ctx.fillRect(x, y, size, size);
      }

      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 1;
      ctx.strokeRect(x + 0.5, y + 0.5, size - 1, size - 1);
    };

    const drawCircle = (x, y, size, fill = null) => {
      const centerX = x + size / 2;
      const centerY = y + size / 2;
      const radius = size * 0.38;

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);

      if (fill) {
        ctx.fillStyle = fill;
        ctx.fill();
      }

      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const drawHexagon = (x, y, size, fill = null) => {
      const centerX = x + size / 2;
      const centerY = y + size / 2;
      const radius = size * 0.42;

      ctx.beginPath();

      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;

        const px = centerX + radius * Math.cos(angle);
        const py = centerY + radius * Math.sin(angle);

        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }

      ctx.closePath();

      if (fill) {
        ctx.fillStyle = fill;
        ctx.fill();
      }

      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const drawTriangle = (x, y, size, fill = null) => {
      const centerX = x + size / 2;
      const centerY = y + size / 2;
      const radius = size * 0.42;

      ctx.beginPath();

      for (let i = 0; i < 3; i++) {
        const angle = -Math.PI / 2 + (Math.PI * 2 * i) / 3;

        const px = centerX + radius * Math.cos(angle);
        const py = centerY + radius * Math.sin(angle);

        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }

      ctx.closePath();

      if (fill) {
        ctx.fillStyle = fill;
        ctx.fill();
      }

      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const drawShape = (x, y, size, fill = null) => {
      switch (shape) {
        case "circle":
          drawCircle(x, y, size, fill);
          break;

        case "hexagon":
          drawHexagon(x, y, size, fill);
          break;

        case "triangle":
          drawTriangle(x, y, size, fill);
          break;

        case "square":
        default:
          drawSquare(x, y, size, fill);
          break;
      }
    };

    const getTrailDistance = (cell) => {
      if (!hoveredCell) return Infinity;

      return Math.max(
        Math.abs(cell.col - hoveredCell.col),
        Math.abs(cell.row - hoveredCell.row)
      );
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < columns; col++) {
          let x = col * squareSize - offsetX;
          let y = row * squareSize - offsetY;

          const cell = {
            col,
            row,
          };

          const distance = getTrailDistance(cell);

          let fill = null;

          if (distance <= hoverTrailAmount) {
            const opacity =
              1 - distance / Math.max(hoverTrailAmount + 1, 1);

            fill = hexToRgba(hoverFillColor, opacity * 0.65);
          }

          drawShape(x, y, squareSize, fill);
        }
      }
    };

    const hexToRgba = (color, alpha) => {
      if (color.startsWith("rgba")) {
        return color;
      }

      if (color.startsWith("rgb")) {
        return color.replace("rgb", "rgba").replace(")", `, ${alpha})`);
      }

      let hex = color.replace("#", "");

      if (hex.length === 3) {
        hex = hex
          .split("")
          .map((char) => char + char)
          .join("");
      }

      if (hex.length !== 6) {
        return `rgba(0,0,0,${alpha})`;
      }

      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);

      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const animate = () => {
      if (isVisible && isPageVisible) {
        const movement = speed * 0.35;

        switch (direction) {
          case "up":
            offsetY += movement;
            break;

          case "down":
            offsetY -= movement;
            break;

          case "left":
            offsetX += movement;
            break;

          case "right":
            offsetX -= movement;
            break;

          case "diagonal":
          default:
            offsetX += movement;
            offsetY += movement;
            break;
        }

        if (offsetX >= squareSize) {
          offsetX -= squareSize;
        }

        if (offsetX <= -squareSize) {
          offsetX += squareSize;
        }

        if (offsetY >= squareSize) {
          offsetY -= squareSize;
        }

        if (offsetY <= -squareSize) {
          offsetY += squareSize;
        }

        draw();
      }

      animationFrame = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      hoveredCell = getCell(x, y);
    };

    const handleMouseLeave = () => {
      hoveredCell = null;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
      },
      {
        threshold: 0,
      }
    );

    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
    };

    resize();

    observer.observe(container);

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);

      observer.disconnect();

      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, [
    speed,
    squareSize,
    direction,
    borderColor,
    hoverFillColor,
    shape,
    hoverTrailAmount,
  ]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block w-full h-full"
      />
    </div>
  );
};

export default ShapeGrid;