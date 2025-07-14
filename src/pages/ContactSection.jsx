"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    service: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const services = [
    "Web Development",
    "Mobile App Development", 
    "UI/UX Design",
    "E-commerce Solutions",
    "Digital Marketing",
    "Other"
  ];

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: "Email Us",
      details: "hello@novorixsolutions.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: <Phone size={20} />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtitle: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: <MapPin size={20} />,
      title: "Visit Us",
      details: "123 Innovation Street",
      subtitle: "Tech District, City 12345"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        service: ""
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 2000);
  };

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  // Form input animation variants
  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300
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
    <section id="contact" className="relative w-full py-20 bg-black text-white scroll-mt-16 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-purple-600 opacity-10 rounded-full blur-[140px] animate-slow-pulse" />
        <div className="absolute bottom-[-100px] right-[-120px] w-[400px] h-[400px] bg-pink-500 opacity-10 rounded-full blur-[120px] animate-slower-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            Ready to transform your digital presence? Let's discuss your project and bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1"
            style={{ perspective: "1000px" }}
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="relative z-10"
                  style={{ transformOrigin: "center center" }}
                >
                  <Card className="h-full border border-white/10 hover:border-white/30 shadow-xl hover:shadow-white/10 transition-all duration-300 backdrop-blur bg-white/5">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="p-3 rounded-full bg-white/10 text-white"
                          initial={{ scale: 0, rotate: -90 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ 
                            delay: 0.3 + index * 0.1,
                            type: "spring",
                            damping: 12,
                            stiffness: 200
                          }}
                        >
                          {info.icon}
                        </motion.div>
                        <div className="flex-1">
                          <motion.h3 
                            variants={textVariants}
                            className="text-lg font-semibold text-white mb-1"
                          >
                            {info.title}
                          </motion.h3>
                          <motion.p 
                            variants={textVariants}
                            className="text-white mb-1"
                          >
                            {info.details}
                          </motion.p>
                          <motion.p 
                            variants={textVariants}
                            className="text-sm text-gray-400"
                          >
                            {info.subtitle}
                          </motion.p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="relative z-10"
              style={{ transformOrigin: "center center" }}
            >
              <Card className="h-full border border-white/10 hover:border-white/30 shadow-xl hover:shadow-white/10 transition-all duration-300 backdrop-blur bg-white/5">
                <CardContent className="p-8">
                  <motion.h3 
                    variants={textVariants}
                    className="text-2xl font-bold text-white mb-6"
                  >
                    Send us a message
                  </motion.h3>

                  <AnimatePresence mode="wait">
                    {submitStatus === 'success' ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="text-center py-8"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", damping: 15 }}
                          className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center"
                        >
                          <CheckCircle className="w-8 h-8 text-green-400" />
                        </motion.div>
                        <motion.h4 
                          variants={textVariants}
                          className="text-xl font-semibold text-white mb-2"
                        >
                          Message Sent Successfully!
                        </motion.h4>
                        <motion.p 
                          variants={textVariants}
                          className="text-gray-300"
                        >
                          Thank you for reaching out. We'll get back to you within 24 hours.
                        </motion.p>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          <motion.div variants={inputVariants}>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-gray-400 transition-all duration-300"
                              placeholder="Enter your full name"
                            />
                          </motion.div>

                          <motion.div variants={inputVariants}>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-gray-400 transition-all duration-300"
                              placeholder="Enter your email"
                            />
                          </motion.div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <motion.div variants={inputVariants}>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                              Company Name
                            </label>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-gray-400 transition-all duration-300"
                              placeholder="Enter your company name"
                            />
                          </motion.div>

                          <motion.div variants={inputVariants}>
                            <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                              Service Interested In
                            </label>
                            <select
                              id="service"
                              name="service"
                              value={formData.service}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 text-white transition-all duration-300"
                            >
                              <option value="" className="bg-gray-900">Select a service</option>
                              {services.map((service) => (
                                <option key={service} value={service} className="bg-gray-900">
                                  {service}
                                </option>
                              ))}
                            </select>
                          </motion.div>
                        </div>

                        <motion.div variants={inputVariants}>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                            Message *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={5}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-gray-400 transition-all duration-300 resize-none"
                            placeholder="Tell us about your project..."
                          />
                        </motion.div>

                       <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          variants={inputVariants}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="group relative w-full py-4 px-6 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                        >
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full inline-block mr-2"
                              />
                              Sending...
                            </>
                          ) : (
                            <span className="relative flex items-center justify-center">
                              <span className="transition-opacity duration-300 group-hover:opacity-0">
                                Send Message
                              </span>
                              <Send className="h-5 w-5 absolute opacity-0 transition-all duration-300 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0" />
                            </span>
                          )}
                        </motion.button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slow-pulse {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.05); opacity: 0.15; }
        }
        
        @keyframes slower-pulse {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.08); opacity: 0.12; }
        }
        
        .animate-slow-pulse {
          animation: slow-pulse 4s ease-in-out infinite;
        }
        
        .animate-slower-pulse {
          animation: slower-pulse 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}