"use client"

import { motion } from "framer-motion"
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
  return (
    <section id="services" className="py-20 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What We Do Best
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            From concept to launch, we provide comprehensive digital solutions
            that help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-black border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}