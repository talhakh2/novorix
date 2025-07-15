"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { CalendarDays } from "lucide-react";
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[100vh] flex items-center justify-center text-white overflow-hidden bg-[#0a0a0a]"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-120px] left-[-80px] w-[500px] h-[500px] bg-purple-600 opacity-30 rounded-full blur-[140px] animate-slow-pulse" />
        <div className="absolute bottom-[-80px] right-[-100px] w-[400px] h-[400px] bg-pink-500 opacity-20 rounded-full blur-[120px] animate-slower-pulse" />
        <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] bg-red-500 opacity-10 rounded-full blur-[100px] animate-slow-pulse" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge
            variant="outline"
            className="text-xs tracking-wide uppercase mb-6 px-4 py-1 border border-white/10 bg-white/5 text-white rounded-full backdrop-blur-sm"
          >
            Welcome to Novorix
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Smart Solutions,{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Real Impact.
            </span>
          </h1>

          <div className="text-base sm:text-xl mb-10 max-w-2xl mx-auto">
            <TextGenerateEffect words="A creative agency helping ambitious brands and startups scale through AI, web, and immersive technology." />

          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 sm:mt-8">
            <Button
              size="lg"
              className="group relative flex items-center justify-center px-6 py-3 text-base font-semibold rounded-md bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-transparent hover:border hover:border-white/20 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden"
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="relative flex items-center justify-center">
                <span className="transition-opacity duration-300 group-hover:opacity-0">
                  See Our Work
                </span>
                <ArrowRight className="ml-2 h-5 w-5 transition-all duration-300 group-hover:-translate-x-8 group-hover:opacity-0" />
                <ArrowRight className="h-5 w-5 absolute opacity-0 transition-all duration-300 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0" />
              </span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group relative flex items-center justify-center px-6 py-3 text-base font-semibold border border-white/20 text-white hover:bg-white/10 transition-all duration-300 overflow-hidden"
              onClick={() => {
                document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="relative flex items-center justify-center">
                <span className="transition-opacity duration-300 group-hover:opacity-0">
                  Schedule Call
                </span>
                <CalendarDays className="ml-2 h-5 w-5 absolute opacity-0 transition-all duration-300 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0" />
              </span>
            </Button>
          </div>

        </motion.div>
      </div>
    </section>
  )
}