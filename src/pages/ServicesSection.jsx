"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import {
  Palette,
  Code,
  Smartphone,
  TrendingUp,
  Zap,
  Target,
  CheckCircle,
} from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "AI Automation",
    description:
      "Streamline operations with intelligent automation to boost efficiency and growth.",
    features: [
      "Workflow Automation",
      "AI Chatbots & Virtual Assistants",
      "Predictive Analytics",
      "Process Optimization",
    ],
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Build fast, responsive websites that convert visitors into customers.",
    features: [
      "Custom Development",
      "E-commerce",
      "CMS Integration",
      "Performance Optimization",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Develop seamless native and cross-platform mobile experiences.",
    features: [
      "iOS Development",
      "Android Development",
      "React Native",
      "App Store Optimization",
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Drive growth with data-driven marketing strategies and SEO.",
    features: [
      "SEO Optimization",
      "Social Media",
      "Content Marketing",
      "PPC Campaigns",
    ],
  },
  {
    icon: Zap,
    title: "UI/UX Design",
    description:
      "Design intuitive interfaces focused on exceptional user engagement.",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
    ],
  },
  {
    icon: Target,
    title: "Consulting",
    description:
      "Strategic guidance to optimize your digital transformation.",
    features: [
      "Digital Strategy",
      "Technology Consulting",
      "Growth Planning",
      "Process Improvement",
    ],
  },
]

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Autoplay functionality - Changed to 5 seconds
  useEffect(() => {
    if (!isAutoplay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Changed to 5 seconds

    return () => clearInterval(interval)
  }, [isAutoplay])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Only handle mouse events on desktop
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsAutoplay(false)
    }
  }
  
  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsAutoplay(true)
    }
  }

  // Handle touch events for mobile
  const handleTouchStart = () => {
    if (isMobile) {
      setIsAutoplay(false)
    }
  }

  const handleTouchEnd = () => {
    if (isMobile) {
      // Resume autoplay after 2 seconds of no interaction
      setTimeout(() => {
        setIsAutoplay(true)
      }, 2000)
    }
  }

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white">
            What We Do Best
          </h2>
          <p className="text-base sm:text-lg lg:text-xl max-w-2xl lg:max-w-3xl mx-auto text-gray-300 px-4">
            From concept to launch, we provide comprehensive digital solutions
            that help your business thrive in the digital landscape.
          </p>
        </div>

        <div 
          className="relative max-w-sm sm:max-w-2xl lg:max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-xl sm:rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Card className="bg-gray-900 border-gray-800 shadow-2xl">
                  <CardContent className="p-6 sm:p-8 lg:p-12">
                    <div className="text-center">
                      <div className="mb-6 sm:mb-8">
                        <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                          {React.createElement(services[currentIndex].icon, {
                            className: "h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-white"
                          })}
                        </div>
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">
                        {services[currentIndex].title}
                      </h3>
                      <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed px-2 sm:px-0">
                        {services[currentIndex].description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-xs sm:max-w-lg mx-auto">
                        {services[currentIndex].features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-center sm:justify-start text-sm sm:text-sm text-gray-300"
                          >
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                            <span className="text-center sm:text-left whitespace-nowrap">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {services.map((_, index) => {
              const isActive = index === currentIndex;
              const buttonClass = isActive 
                ? "w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 bg-purple-500"
                : "w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 bg-gray-600 hover:bg-gray-500";
              
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={buttonClass}
                  aria-label={`Go to slide ${index + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}