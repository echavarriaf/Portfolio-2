"use client";

import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
} from "motion/react";

import {
  useEffect,
  useRef,
  useState,
} from "react";

type TechMarqueeProps = {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
};

export default function TechMarquee({
  items,
  direction = "left",
  speed = 35,
}: TechMarqueeProps) {
  const shouldReduceMotion = useReducedMotion();

  const wrapperRef =
    useRef<HTMLDivElement>(null);

  const trackRef =
    useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);

  const [trackWidth, setTrackWidth] =
    useState(0);

  const [isPaused, setIsPaused] =
    useState(false);

  const isInView = useInView(wrapperRef, {
    margin: "200px 0px",
  });

  useEffect(() => {
    if (
      shouldReduceMotion ||
      !trackRef.current
    ) {
      return;
    }

    const track = trackRef.current;

    const updateWidth = () => {
      const width =
        track.scrollWidth / 2;

      setTrackWidth(width);

      if (direction === "right") {
        x.set(-width);
      } else {
        x.set(0);
      }
    };

    updateWidth();

    const resizeObserver =
      new ResizeObserver(updateWidth);

    resizeObserver.observe(track);

    return () => {
      resizeObserver.disconnect();
    };
  }, [
    direction,
    shouldReduceMotion,
    x,
  ]);

  useAnimationFrame((_, delta) => {
    if (
      shouldReduceMotion ||
      isPaused ||
      !isInView ||
      trackWidth === 0
    ) {
      return;
    }

    const distance =
      (speed * delta) / 1000;

    const currentX = x.get();

    if (direction === "left") {
      let nextX =
        currentX - distance;

      if (nextX <= -trackWidth) {
        nextX += trackWidth;
      }

      x.set(nextX);

      return;
    }

    let nextX =
      currentX + distance;

    if (nextX >= 0) {
      nextX -= trackWidth;
    }

    x.set(nextX);
  });

  const visualItems =
    shouldReduceMotion
      ? items
      : [...items, ...items];

  return (
    <div
      ref={wrapperRef}
      className="group relative overflow-hidden"
      onPointerEnter={() =>
        setIsPaused(true)
      }
      onPointerLeave={() =>
        setIsPaused(false)
      }
    >
      {/* Accessible version */}
      <p className="sr-only">
        Technologies: {items.join(", ")}
      </p>

      {/* Edge fades */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-[#050505] to-transparent sm:w-40"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-[#050505] to-transparent sm:w-40"
      />

      {/* Visual marquee */}
      <motion.div
        ref={trackRef}
        aria-hidden="true"
        style={{
          x: shouldReduceMotion
            ? 0
            : x,
        }}
        className="flex w-max gap-3 py-3"
      >
        {visualItems.map(
          (technology, index) => (
            <div
              key={`${technology}-${index}`}
              className="flex shrink-0 items-center gap-3 rounded-full border border-white/[0.07] bg-white/[0.025] px-5 py-3 transition-all duration-300 hover:border-sky-400/20 hover:bg-sky-400/[0.05]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400/70" />

              <span className="whitespace-nowrap font-mono text-xs text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">
                {technology}
              </span>
            </div>
          ),
        )}
      </motion.div>
    </div>
  );
}