"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import reviewsData from "./data/reviews.json";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const visibleCount = 3;
  const maxLines = 2;
  const [expanded, setExpanded] = useState({});

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < reviewsData.length - visibleCount + 1 ? prevIndex + 1 : 0
    );
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : reviewsData.length - visibleCount
    );
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const visibleReviews = reviewsData.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
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
    exit: { 
      opacity: 0, 
      y: -50,
      scale: 0.9,
      rotateX: 15,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
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

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5
      }
    }
  };

  return (
    <section
      id="testimonials"
      className="relative w-full py-20 bg-black text-white scroll-mt-16 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Hear directly from the businesses we've helped grow.
            </p>
          </div>

          <div className="relative px-4 py-8">
            <motion.div 
              className="flex items-start justify-center gap-6"
              style={{ perspective: "1000px" }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentIndex}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex items-start justify-center gap-6"
                >
                  {visibleReviews.map((review, index) => (
                    <motion.div
                      key={`${currentIndex}-${index}`}
                      variants={cardVariants}
                      whileHover="hover"
                      className="min-w-[260px] w-full max-w-xs relative z-10"
                      style={{ transformOrigin: "center center" }}
                    >
                      <Card className="h-full border border-white/10 hover:border-purple-500 shadow-xl hover:shadow-purple-700/20 transition-all duration-300 backdrop-blur bg-white/5">
                        <CardContent className="p-6 text-center">
                          <motion.p 
                            variants={textVariants}
                            className={`text-base mb-4 ${expanded[index] ? "" : "line-clamp-2"}`}
                          >
                            "{review.text}"
                          </motion.p>
                          {review.text.split(" ").length > 25 && (
                            <motion.button
                              variants={textVariants}
                              onClick={() => toggleExpand(index)}
                              className="text-sm text-purple-500 hover:underline mb-3 transition-colors duration-200"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {expanded[index] ? "Show Less" : "Read More"}
                            </motion.button>
                          )}
                          <motion.div 
                            variants={textVariants}
                            className="flex justify-center gap-1 text-yellow-400 mb-3"
                          >
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ scale: 0, rotate: -180 }}
                                  animate={{ scale: 1, rotate: 0 }}
                                  transition={{ 
                                    delay: 0.3 + i * 0.1,
                                    type: "spring",
                                    damping: 15,
                                    stiffness: 200
                                  }}
                                >
                                  <Star size={16} fill="currentColor" />
                                </motion.div>
                              ))}
                          </motion.div>
                          <motion.div 
                            variants={textVariants}
                            className="flex items-center justify-center gap-4"
                          >
                            <motion.img
                              src={review.avatar || "/placeholder.svg"}
                              alt={review.name}
                              className="w-10 h-10 rounded-full object-cover border border-white/10"
                              onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = "/placeholder.svg";
                              }}
                              initial={{ scale: 0, rotate: -90 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ 
                                delay: 0.4,
                                type: "spring",
                                damping: 12,
                                stiffness: 200
                              }}
                            />
                            <div className="text-left">
                              <motion.p 
                                className="font-semibold text-white"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                              >
                                {review.name}
                              </motion.p>
                              <motion.p 
                                className="text-sm text-gray-400"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                              >
                                {review.role}
                              </motion.p>
                            </div>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Navigation Arrows */}
            <motion.button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 p-2 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              style={{ marginTop: "2rem" }}
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 p-2 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              style={{ marginTop: "2rem" }}
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}