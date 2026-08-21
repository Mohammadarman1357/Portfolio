import { Boxes } from "../ui/background-boxes";

export default function BackgroundBoxesDemo() {
  return (
    <div className="relative flex h-96 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-slate-900">
      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-slate-900 [mask-image:radial-gradient(transparent,white)]" />

      {/* Animated Boxes */}
      <Boxes />

      {/* Content */}
      <h1 className="relative z-20 text-xl font-bold text-white md:text-4xl">
        Tailwind is Awesome
      </h1>

      <p className="relative z-20 mt-2 text-center text-neutral-300">
        Framer Motion is the best animation library ngl
      </p>
    </div>
  );
}