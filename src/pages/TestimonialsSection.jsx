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
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  // Responsive visible count
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // Mobile
      if (window.innerWidth < 1024) return 2; // Tablet
      return 3; // Desktop
    }
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const maxLines = 2;
  const [expanded, setExpanded] = useState({});

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Touch handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Mouse drag handlers for laptop/desktop
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    e.preventDefault(); // Prevent text selection
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setDragEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging || !dragStart) return;
    
    const distance = dragStart - dragEnd;
    const isLeftDrag = distance > 50;
    const isRightDrag = distance < -50;

    if (isLeftDrag) {
      nextSlide();
    } else if (isRightDrag) {
      prevSlide();
    }
    
    setIsDragging(false);
    setDragStart(0);
    setDragEnd(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragStart(0);
      setDragEnd(0);
    }
  };

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
              className="flex items-start justify-center gap-6 select-none"
              style={{ 
                perspective: "1000px",
                cursor: isDragging ? "grabbing" : "grab"
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentIndex}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex items-start justify-center gap-6 w-full"
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
                          {/* Read More button now appears for all reviews */}
                          <motion.button
                            variants={textVariants}
                            onClick={() => toggleExpand(index)}
                            className="text-sm text-purple-500 hover:underline mb-3 transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {expanded[index] ? "Show Less" : "Read More"}
                          </motion.button>
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
                            className="flex items-center justify-center gap-3 sm:gap-4"
                          >
                            <motion.img
                              src={review.avatar || "/placeholder.svg"}
                              alt={review.name}
                              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-white/10"
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

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {Array(Math.ceil(reviewsData.length / visibleCount))
                .fill(0)
                .map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      Math.floor(currentIndex / visibleCount) === index
                        ? "bg-purple-500"
                        : "bg-gray-600"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  />
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}