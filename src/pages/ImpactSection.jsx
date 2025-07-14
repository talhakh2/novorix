"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function ImpactSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const stats = [
    { label: "Projects Completed", value: 70 },
    { label: "Client Satisfaction", value: 98, suffix: "%" },
    { label: "Years Experience", value: 3, suffix: "+" },
  ];

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Card animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
        duration: 0.6
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 400
      }
    }
  };

  // Number animation variants
  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        delay: 0.3,
        type: "spring",
        damping: 15,
        stiffness: 200
      }
    }
  };

  // Label animation variants
  const labelVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-8"
          style={{ perspective: "1000px" }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover="hover"
              className="text-center p-8 border border-white/10 hover:border-white/30 rounded-lg transition-all duration-300 backdrop-blur bg-white/5 shadow-xl hover:shadow-white/10 min-w-[200px]"
              style={{ transformOrigin: "center center" }}
            >
              <motion.div 
                variants={numberVariants}
                className="text-4xl font-bold mb-2"
              >
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    delay={0.5}
                    suffix={stat.suffix || ""}
                  />
                ) : (
                  `0${stat.suffix || ""}`
                )}
              </motion.div>
              <motion.div 
                variants={labelVariants}
                className="text-gray-400"
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}