"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "../../components/ui/card"
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
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-black text-white">
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="bg-white/5 border border-white/10 hover:border-purple-500 shadow-xl hover:shadow-purple-700/20 transition-all duration-300 hover:scale-105 h-full backdrop-blur">
                <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                  <div className="text-center flex-grow">
                    <div className="mb-6">
                      <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4">
                        {React.createElement(service.icon, {
                          className: "h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-white"
                        })}
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 gap-3 max-w-xs mx-auto">
                      {service.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-center text-sm text-gray-300"
                        >
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-center">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}