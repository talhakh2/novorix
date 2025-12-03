"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sections = [
  {
    title: "Who We Are",
    description:
      "Founded in 2022, Novorix Solutions began as a vision to merge creativity with technology — a small team of innovators determined to build smarter digital experiences. Over the years, we've grown into a full-service agency, delivering powerful solutions in AI automation, web development, mobile apps, digital marketing, and UI/UX design.",
    gradient: "from-purple-600 via-pink-600 to-blue-600",
    icon: "🚀",
  },
  {
    title: "Our Mission",
    description:
      "At Novorix Solutions, we're a team of creative professionals passionate about bringing your vision to life through innovative design, intelligent automation, and cutting-edge technology. From websites and mobile apps to AI solutions and digital marketing — we craft experiences that drive real results.",
    gradient: "from-purple-600 via-pink-600 to-blue-600",
    icon: "🎯",
  },
  {
    title: "What We Deliver",
    description:
      "We specialize in AI automation, web development, mobile apps, digital marketing, and UI/UX design. We don't just build digital products — we build digital impact that transforms businesses and drives growth.",
    gradient: "from-purple-600 via-pink-600 to-blue-600",
    icon: "⚡",
  },
];

export default function AboutSection() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Auto-advance cards every 6 seconds (only if not dragging)
  useEffect(() => {
    if (!isDragging) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % sections.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isDragging]);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % sections.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + sections.length) % sections.length);
  };

  const goToCard = (index) => {
    setCurrentIndex(index);
  };

  // Calculate 3D transforms for each card
  const getCardTransform = (index) => {
    const position = index - currentIndex;
    
    if (position === 0) {
      // Center card
      return {
        x: '0%',
        rotateY: '0deg',
        scale: 1,
        zIndex: 30,
        opacity: 1
      };
    } else if (position === -1 || (currentIndex === 0 && index === sections.length - 1)) {
      // Left card
      return {
        x: isMobile ? '-70%' : '-60%',
        rotateY: '45deg',
        scale: 0.8,
        zIndex: 20,
        opacity: 0.7
      };
    } else if (position === 1 || (currentIndex === sections.length - 1 && index === 0)) {
      // Right card
      return {
        x: isMobile ? '70%' : '60%',
        rotateY: '-45deg',
        scale: 0.8,
        zIndex: 20,
        opacity: 0.7
      };
    } else {
      // Hidden cards
      return {
        x: position > 0 ? '100%' : '-100%',
        rotateY: position > 0 ? '-90deg' : '90deg',
        scale: 0.6,
        zIndex: 10,
        opacity: 0
      };
    }
  };

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full opacity-20 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
            About Novorix
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Discover our journey, mission, and what makes us different
          </p>
        </motion.div>

        {/* 3D Cards Container */}
        <div className="relative" style={{ perspective: '1000px' }}>
          {/* Navigation Arrows - Hidden */}
          {false && (
            <>
              <button
                onClick={prevCard}
                className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 transition-all duration-300 group"
                aria-label="Previous card"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={nextCard}
                className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 transition-all duration-300 group"
                aria-label="Next card"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
            </>
          )}

          {/* Cards Container with 3D Perspective */}
          <div className="relative h-[420px] md:h-[480px] mx-auto max-w-4xl">
            {sections.map((section, index) => {
              const transform = getCardTransform(index);
              const isCenter = index === currentIndex;
              
              return (
                <motion.div
                  key={index}
                  className="absolute inset-0 cursor-pointer"
                  style={{ 
                    transformStyle: 'preserve-3d',
                  }}
                  animate={{
                    x: transform.x,
                    rotateY: transform.rotateY,
                    scale: transform.scale,
                    opacity: transform.opacity,
                    zIndex: transform.zIndex
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 25,
                    duration: 0.8
                  }}
                  onClick={() => !isCenter && goToCard(index)}
                  whileHover={!isMobile && !isCenter ? { scale: transform.scale * 1.05 } : {}}
                >
                  <div className={`h-full w-full mx-auto max-w-[280px] md:max-w-[400px] bg-gradient-to-br ${section.gradient} rounded-2xl p-5 md:p-7 flex flex-col justify-center items-center text-white relative overflow-hidden shadow-2xl border border-white/10`}>
                    {/* 3D Card Frame Effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-white/20" />
                    <div className="absolute inset-1 rounded-xl border border-white/10" />
                    
                    {/* Card background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl transform translate-x-16 -translate-y-16" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl transform -translate-x-12 translate-y-12" />
                    </div>
                    
                    {/* Card Number */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    
                    <div className="relative z-10 text-center">
                      {/* Icon */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className={`${isCenter ? 'text-5xl md:text-6xl' : 'text-3xl md:text-4xl'} mb-3 md:mb-4 transition-all duration-500`}
                      >
                        {section.icon}
                      </motion.div>
                      
                      {/* Title */}
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className={`${isCenter ? 'text-xl md:text-3xl' : 'text-lg md:text-2xl'} font-bold mb-3 md:mb-4 transition-all duration-500`}
                      >
                        {section.title}
                      </motion.h3>
                      
                      {/* Description - Only show on center card */}
                      {isCenter && (
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                          className="text-sm md:text-base leading-relaxed max-w-[240px] md:max-w-[340px] mx-auto text-white/90"
                        >
                          {section.description}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => goToCard(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125 shadow-lg' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-xs mx-auto">
            <div className="w-full bg-white/20 rounded-full h-1">
              <motion.div
                className="h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / sections.length) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}