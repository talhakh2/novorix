"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "./data/projects.json";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { ArrowRight } from "lucide-react";
import { ChevronDown } from "lucide-react"; // make sure this is imported

const categories = ["All", ...Array.from(new Set(projectsData.map((p) => p.category)))];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    viewport={{ once: true }}
    onClick={() => window.open(project.link || "#", "_blank")}
    className="cursor-pointer"
  >
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
      <div className="relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={600}
          height={400}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/placeholder.png";
          }}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <Badge
              variant="secondary"
              className="text-xs tracking-wide uppercase mb-6 px-4 py-1 border rounded-full backdrop-blur-sm"
            >
              {project.category}
            </Badge>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="">{project.description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  return (
    <section id="projects" className="relative py-20 overflow-hidden bg-black text-white">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-purple-600 opacity-10 rounded-full blur-[140px] animate-slow-pulse" />
        <div className="absolute bottom-[-100px] right-[-120px] w-[400px] h-[400px] bg-pink-500 opacity-10 rounded-full blur-[120px] animate-slower-pulse" />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our latest work and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setVisibleCount(6);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${selectedCategory === category
                ? "bg-purple-600"
                : " hover:bg-purple-900"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {visibleProjects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="group relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-black bg-white rounded-lg hover:bg-white/90 transition-all duration-200 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                <span className="transition-opacity duration-300 group-hover:opacity-0">
                  Load More
                </span>
                {/* <ChevronDown className="ml-1.5 w-4 h-4 transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-0" /> */}
                <ChevronDown className="w-4 h-4 absolute opacity-0 transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white to-white/95 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </button>


          </div>
        )}
      </motion.div>
    </section>
  );
}
