"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Linkedin, Twitter, Github, Mail, X } from "lucide-react";

import teamData from "./data/team.json"

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const topMembers = teamData.slice(0, 2); // First 2 members
  const otherMembers = teamData.slice(2); // Remaining members
  
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
      prevIndex + 1 < otherMembers.length - visibleCount + 1 ? prevIndex + 1 : 0
    );
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : otherMembers.length - visibleCount
    );
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const visibleMembers = otherMembers.slice(
    currentIndex,
    currentIndex + visibleCount
  );

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

  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'linkedin':
        return <Linkedin size={16} />;
      case 'twitter':
        return <Twitter size={16} />;
      case 'github':
        return <Github size={16} />;
      case 'email':
        return <Mail size={16} />;
      default:
        return null;
    }
  };

  const TeamCard = ({ member, isTop = false }) => (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className={`w-full ${isTop ? 'max-w-sm sm:max-w-xs lg:max-w-md' : 'max-w-xs'} relative z-10`}
      style={{ transformOrigin: "center center" }}
      onClick={() => isTop && setSelectedMember(member)}
    >
      <Card className={`h-full border border-white/10 hover:border-white/30 shadow-xl hover:shadow-white/10 transition-all duration-300 backdrop-blur bg-white/5 ${isTop ? 'cursor-pointer' : ''}`}>
        <CardContent className={`${isTop ? 'p-6 sm:p-4 lg:p-6 px-6 sm:px-4 lg:px-8' : 'p-6'} text-center`}>
          {/* Avatar placeholder - with entrance animation */}
          <motion.div 
            className={`${isTop ? 'w-12 h-12 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-base sm:text-sm lg:text-base' : 'w-8 h-8 text-sm'} mb-3 sm:mb-2 lg:mb-3 mx-auto rounded-full border-2 border-white/30 flex items-center justify-center text-white font-bold`}
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              delay: 0.3,
              type: "spring",
              damping: 12,
              stiffness: 200
            }}
          >
            {member.name.split(' ').map(n => n[0]).join('')}
          </motion.div>
          
          <motion.h3 
            variants={textVariants}
            className={`${isTop ? 'text-base sm:text-base lg:text-lg' : 'text-base'} font-semibold text-white mb-3 sm:mb-2 lg:mb-3`}
          >
            {member.name}
          </motion.h3>
          
          <motion.div
            variants={textVariants}
            className="mb-3"
          >
            <Badge variant="secondary" className="text-xs sm:text-xs tracking-wide px-3 sm:px-3 py-1 border border-white/10 bg-white/5 text-white rounded-full backdrop-blur-sm whitespace-nowrap">
              CO-FOUNDER
            </Badge>
          </motion.div>
          
          {isTop && (
            <motion.p 
              variants={textVariants}
              className="text-sm sm:text-xs lg:text-sm text-gray-400 mt-2 sm:mt-1 lg:mt-2"
            >
              Click to learn more
            </motion.p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );

  const PopupModal = ({ member, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-black border border-white/20 rounded-lg p-6 max-w-md w-full mx-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="text-center mb-4">
          <div className="w-16 h-16 mx-auto rounded-full border-2 border-white/30 flex items-center justify-center text-white font-bold text-lg mb-3">
            {member.name.split(' ').map(n => n[0]).join('')}
          </div>
          <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
          <Badge variant="secondary" className="text-xs tracking-wide px-3 py-1 border border-white/10 bg-white/5 text-white rounded-full backdrop-blur-sm whitespace-nowrap">
            CO-FOUNDER
          </Badge>
        </div>
        
        <p className="text-gray-300 leading-relaxed mb-6">
          {member.fullMessage}
        </p>
        
        <div className="flex justify-center gap-2">
          {Object.entries(member.social).map(([platform, url]) => (
            <motion.a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-white text-gray-400 hover:text-black transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {getSocialIcon(platform)}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="team" className="relative w-full py-20 bg-black text-white scroll-mt-16 overflow-hidden">
      <div className="container mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The passionate individuals behind Novorix Solutions, dedicated to delivering exceptional digital experiences.
          </p>
        </motion.div>

        {/* Top 2 Members */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16"
          style={{ perspective: "1000px" }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key="top-members"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8"
            >
              {topMembers.map((member, index) => (
                <TeamCard key={index} member={member} isTop={true} />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Other Team Members - With Testimonials Style Navigation */}
        <div className="relative px-2 sm:px-4 py-4 sm:py-6 lg:py-8">
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
                {visibleMembers.map((member, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    variants={cardVariants}
                    whileHover="hover"
                    className="min-w-[260px] w-full max-w-xs relative z-10"
                    style={{ transformOrigin: "center center" }}
                  >
                    <Card className="h-full border border-white/10 hover:border-white/30 shadow-xl hover:shadow-white/10 transition-all duration-300 backdrop-blur bg-white/5">
                      <CardContent className="p-6 text-center">
                        <motion.div 
                          className="w-8 h-8 mb-3 mx-auto rounded-full border-2 border-white/30 flex items-center justify-center text-white font-bold text-sm"
                          initial={{ scale: 0, rotate: -90 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ 
                            delay: 0.3,
                            type: "spring",
                            damping: 12,
                            stiffness: 200
                          }}
                        >
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </motion.div>
                        
                        <motion.h3 
                          variants={textVariants}
                          className="text-base font-semibold text-white mb-3"
                        >
                          {member.name}
                        </motion.h3>
                        
                        <motion.div
                          variants={textVariants}
                          className="mb-3"
                        >
                          <Badge variant="secondary" className="text-xs tracking-wide px-3 py-1 border border-white/10 bg-white/5 text-white rounded-full backdrop-blur-sm whitespace-nowrap">
                            {member.role}
                          </Badge>
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
            {Array(Math.ceil(otherMembers.length / visibleCount))
              .fill(0)
              .map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / visibleCount) === index
                      ? "bg-white"
                      : "bg-gray-600"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedMember && (
          <PopupModal 
            member={selectedMember} 
            onClose={() => setSelectedMember(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}