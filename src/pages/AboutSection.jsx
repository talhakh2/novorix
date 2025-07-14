"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import PointerHighlight from "../../components/ui/pointer-highlight"; // Adjust path if needed

const sections = [
  {
    title: "Who We Are",
    description:
      "Founded in 2022, Novorix Solutions began as a vision to merge creativity with technology — a small team of innovators determined to build smarter digital experiences.",
    bg: "bg-black",
    textColor: "text-white",
    headerGradient: "bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent",
    showBlobs: false,
    showPointer: false,
  },
  {
    title: "Our Mission",
    description:
      "Our approach blends strategic insight with bold creativity, ensuring every project not only looks great but drives real, measurable results.",
    bg: "bg-white",
    textColor: "text-black",
    headerGradient: "bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent",
    showBlobs: false,
    showPointer: false,
  },
  {
    title: "What We Deliver",
    description:
      "We specialize in AI automation, web development, mobile apps, digital marketing, and UI/UX design. We don't just build digital products — we build digital impact.",
    bg: "bg-black",
    textColor: "text-white",
    headerGradient: "bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent",
    showBlobs: true,
    showPointer: true,
  },
];

export default function AboutSection() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.floor(v * sections.length);
    setCurrentIndex(Math.min(i, sections.length - 1));
  });

  const opacitySteps = [0, 1, 1, 0];
  const ySteps = ["50px", "0px", "0px", "-50px"];
  const scaleSteps = [0.94, 1, 1, 0.94];
  const blurSteps = [12, 0, 0, 12];
  const transitionZone = 0.08;
  const transforms = [];
  const filterTransformsArray = [];

  sections.forEach((_, index) => {
    const start = index / sections.length;
    const end = (index + 1) / sections.length;

    const opacity = useTransform(
      scrollYProgress,
      [start - transitionZone, start, end - transitionZone, end],
      opacitySteps
    );
    const y = useTransform(
      scrollYProgress,
      [start - transitionZone, start, end - transitionZone, end],
      ySteps
    );
    const scale = useTransform(
      scrollYProgress,
      [start - transitionZone, start, end - transitionZone, end],
      scaleSteps
    );
    const blur = useTransform(
      scrollYProgress,
      [start - transitionZone, start, end - transitionZone, end],
      blurSteps
    );
    const filter = useTransform(blur, (v) => `blur(${v}px)`);

    transforms.push({ opacity, y, scale });
    filterTransformsArray.push(filter);
  });

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full scroll-mt-16"
      style={{ height: `${sections.length * 100}vh` }}
    >
      {/* Global Background for Gradient Blobs if present */}
      {sections[currentIndex]?.showBlobs && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-purple-600 opacity-10 rounded-full blur-[140px] animate-slow-pulse" />
          <div className="absolute bottom-[-100px] right-[-120px] w-[400px] h-[400px] bg-pink-500 opacity-10 rounded-full blur-[120px] animate-slower-pulse" />
        </div>
      )}

      {/* Sticky Slides */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 flex items-center justify-center px-6 ${section.bg}`}
            style={{
              opacity: transforms[index].opacity,
              y: transforms[index].y,
              scale: transforms[index].scale,
              filter: filterTransformsArray[index],
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className={`max-w-4xl text-center relative z-10 ${section.textColor}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {!section.showPointer && (
                  <>
                    <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${section.headerGradient}`}>
                      {section.title}
                    </h2>
                    <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                      {section.description}
                    </p>
                  </>
                )}
                {/* Pointer Line */}
                {section.showPointer && (
                  <div className="mx-auto max-w-lg py-20 text-2xl font-bold tracking-tight md:text-4xl">
                    <PointerHighlight>
                      <span>{section.title}</span>
                    </PointerHighlight>
                    {section.description}
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}