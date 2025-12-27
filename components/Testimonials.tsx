import React, { useRef } from "react";
import { Briefcase, Hexagon, Triangle, Circle, Square } from "lucide-react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

// Importing Brand Logos
import brand1 from "../assets/Brands_Logo/Artboard 1.png";
import brand2 from "../assets/Brands_Logo/Artboard 2.png";
import brand3 from "../assets/Brands_Logo/Artboard 3.png";
import brand4 from "../assets/Brands_Logo/Artboard 4.png";
import brand5 from "../assets/Brands_Logo/Artboard 5.png";
import brand6 from "../assets/Brands_Logo/Artboard 6.png";
import brand7 from "../assets/Brands_Logo/Artboard 7.png";
import brand8 from "../assets/Brands_Logo/Artboard 8.png";
import brand9 from "../assets/Brands_Logo/Artboard 9.png";
import brand11 from "../assets/Brands_Logo/Artboard 11.png";
import brand12 from "../assets/Brands_Logo/Artboard 12.png";
import brand13 from "../assets/Brands_Logo/Artboard 13.png";
import brand14 from "../assets/Brands_Logo/Artboard 14.png";
import brand15 from "../assets/Brands_Logo/Artboard 15.png";

const clients = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
  brand11,
  brand12,
  brand13,
  brand14,
  brand15,
];

// 4 sets for smoother seamless loop
const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const LogoStrip = ({
  baseVelocity = 20,
  className = "",
}: {
  baseVelocity: number;
  className?: string;
}) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  // Wrap at -25% (since we have 4 sets, one set is 25% of width)
  // We move FROM 0 TO -25% then wrap back to 0
  const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);

  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000);

    // Increase speed based on scroll velocity (up or down), preventing direction reversal
    // If scrolling, velocityFactor gives a value (e.g. 5). scale speed by (1 + 5).
    moveBy += moveBy * Math.abs(velocityFactor.get());

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Layer 1: Dimmed Background */}
      <motion.div
        className="flex gap-8 flex-nowrap opacity-20 select-none pointer-events-none"
        style={{ x }}
      >
        {duplicatedClients.map((client, i) => (
          <div
            key={i}
            className="flex items-center justify-center px-4 min-w-[200px]"
          >
            <img
              src={client}
              alt="Brand Logo"
              className="h-16 w-auto object-contain pointer-events-auto"
            />
          </div>
        ))}
      </motion.div>

      {/* Layer 2: Focused Foreground (Masked) */}
      <motion.div
        className="flex gap-8 flex-nowrap absolute top-0 left-0 w-full h-full select-none pointer-events-none"
        style={{
          x,
          maskImage:
            "linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)",
        }}
      >
        {duplicatedClients.map((client, i) => (
          <div
            key={i}
            className="flex items-center justify-center px-4 min-w-[200px]"
          >
            <img
              src={client}
              alt="Brand Logo"
              className="h-16 w-auto object-contain pointer-events-auto"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden flex flex-col items-center justify-center">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-transparent z-10 pointer-events-none bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-transparent z-10 pointer-events-none bg-gradient-to-r from-background via-transparent to-background" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-20 mb-16">
        <p className="text-sm font-medium text-text-secondary uppercase tracking-wider">
          Brands we work with
        </p>
      </div>

      {/* 3D Container */}
      <div className="relative w-full max-w-[120vw] -rotate-3 skew-y-3 scale-110 opacity-80 hover:opacity-100 transition-opacity duration-500">
        {/* Strip 1 - Left */}
        <LogoStrip baseVelocity={-2} className="mb-6 opacity-60" />

        {/* Strip 2 (Main) - Right */}
        <LogoStrip baseVelocity={2} className="mb-6 scale-110 z-10" />

        {/* Strip 3 - Left */}
        <LogoStrip baseVelocity={-2} className="opacity-60" />
      </div>
    </section>
  );
};

export default Testimonials;
