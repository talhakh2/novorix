"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Linkedin, Twitter, Github, Mail, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import teamData from "./data/team.json"

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const topMembers = teamData.slice(0, 2); // First 2 members
  const otherMembers = teamData.slice(2); // Remaining members
  
  const itemsPerPage = 4; // Number of team members to show at once
  const totalPages = Math.ceil(otherMembers.length / itemsPerPage);
  
  const getVisibleMembers = () => {
    const startIndex = currentIndex * itemsPerPage;
    return otherMembers.slice(startIndex, startIndex + itemsPerPage);
  };
  
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
    setTimeout(() => setIsTransitioning(false), 600);
  };
  
  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    setTimeout(() => setIsTransitioning(false), 600);
  };
  
  const visibleMembers = getVisibleMembers();

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
      className={`w-full ${isTop ? 'max-w-md' : 'max-w-xs'} relative z-10`}
      style={{ transformOrigin: "center center" }}
      onClick={() => isTop && setSelectedMember(member)}
    >
      <Card className={`h-full border border-white/10 hover:border-white/30 shadow-xl hover:shadow-white/10 transition-all duration-300 backdrop-blur bg-white/5 ${isTop ? 'cursor-pointer' : ''}`}>
        <CardContent className={`${isTop ? 'p-6 px-12' : 'p-4'} text-center`}>
          {/* Avatar placeholder - with entrance animation */}
          <motion.div 
            className="w-10 h-10 mb-3 mx-auto rounded-full border-2 border-white/30 flex items-center justify-center text-white font-bold text-sm"
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
            className="text-base font-bold text-white mb-2"
          >
            {member.name}
          </motion.h3>
          
          <motion.div
            variants={textVariants}
            className="mb-3"
          >
            <Badge variant="secondary" className="text-xs tracking-wide uppercase px-4 py-1 border border-white/10 bg-white/5 text-white rounded-full backdrop-blur-sm">
              {member.role}
            </Badge>
          </motion.div>
          
          {isTop && (
            <motion.p 
              variants={textVariants}
              className="text-xs text-gray-400 mt-2"
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
          <Badge variant="secondary" className="text-xs tracking-wide uppercase px-4 py-1 border border-white/10 bg-white/5 text-white rounded-full backdrop-blur-sm">
            {member.role}
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The passionate individuals behind Novorix Solutions, dedicated to delivering exceptional digital experiences.
          </p>
        </motion.div>

        {/* Top 2 Members */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-row justify-center gap-6 mb-16"
          style={{ perspective: "1000px" }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key="top-members"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-row justify-center gap-6"
            >
              {topMembers.map((member, index) => (
                <TeamCard key={index} member={member} isTop={true} />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Other Team Members - With Navigation */}
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
                {visibleMembers.map((member, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    variants={cardVariants}
                    whileHover="hover"
                    className="min-w-[260px] w-full max-w-xs relative z-10"
                    style={{ transformOrigin: "center center" }}
                  >
                    <Card className="h-full border border-white/10 hover:border-white/30 shadow-xl hover:shadow-white/10 transition-all duration-300 backdrop-blur bg-white/5">
                      <CardContent className="p-4 text-center">
                        <motion.div 
                          className="w-10 h-10 mb-3 mx-auto rounded-full border-2 border-white/30 flex items-center justify-center text-white font-bold text-sm"
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
                          className="text-base font-bold text-white mb-2"
                        >
                          {member.name}
                        </motion.h3>
                        
                        <motion.div
                          variants={textVariants}
                          className="mb-3"
                        >
                          <Badge variant="secondary" className="text-xs tracking-wide uppercase px-4 py-1 border border-white/10 bg-white/5 text-white rounded-full backdrop-blur-sm">
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