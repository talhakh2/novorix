// src/components/Footer.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Twitter, Instagram, Github, ArrowRight, Mail, Phone, MapPin, Send, ChevronUp, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/novorix/about/?viewAsMember=true", label: "LinkedIn" },
    // { icon: Twitter, href: "#", label: "Twitter" },
    // { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "https://github.com/talhakh2", label: "GitHub" }
  ];

  const services = [
    { name: "AI Automation", href: "#services" },
    { name: "Web Development", href: "#services" },
    { name: "Mobile Applications", href: "#services" },
    { name: "Digital Marketing", href: "#services" },
    { name: "UI/UX Design", href: "#services" }
  ];

  const company = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
    { name: "Projects", href: "#projects" }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail("");
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <footer className="relative bg-black text-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      {/* Main content */}
      <div className="relative">
        {/* Top accent line */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="container mx-auto px-6 py-20">
          {/* Main grid */}
          <div className="grid lg:grid-cols-12 gap-16 mb-20">
            {/* Brand section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="mb-8">
                <img
                  src="/logo1.png"
                  alt="Novorix"
                  width={180}
                  height={18}
                  className="opacity-90"
                />
              </div>

              <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-md">
                We craft digital experiences that matter. Transforming ambitious ideas into reality through thoughtful design and innovative technology.
              </p>

              {/* Newsletter */}
              <div className="mb-12">
                <h4 className="text-white/90 font-medium mb-6 tracking-wide">
                  STAY CONNECTED
                </h4>

                <form onSubmit={handleNewsletterSubmit} className="group">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full bg-white/5 border-0 border-b border-white/10 focus:border-white/30 pb-4 pt-2 pr-12 text-white placeholder-white/40 focus:outline-none transition-all duration-300"
                      required
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute right-0 bottom-2 w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-all duration-300"
                    >
                      <Send className="w-4 h-4 text-white/60 hover:text-white transition-colors duration-300" />
                    </motion.button>
                  </div>

                  <AnimatePresence>
                    {isSubscribed && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-4 text-white/80 text-sm"
                      >
                        ✓ Thank you for subscribing
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>

              {/* Social links */}
              <div className="flex space-x-1">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="p-3 hover:bg-white/10 rounded-lg transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-white/50 group-hover:text-white transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h4 className="text-white/90 font-medium mb-8 tracking-wide">
                SERVICES
              </h4>
              <nav className="space-y-4">
                {services.map((service, i) => (
                  <motion.button
                    key={i}
                    onClick={() => scrollToSection(service.href)}
                    onMouseEnter={() => setHoveredIndex(`service-${i}`)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    whileHover={{ x: 8 }}
                    className="block text-white/60 hover:text-white transition-all duration-300 group text-left w-full"
                  >
                    <div className="flex items-center">
                      <span className="text-sm">{service.name}</span>
                      <ArrowRight className={`w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ${hoveredIndex === `service-${i}` ? 'translate-x-1' : ''
                        }`} />
                    </div>
                  </motion.button>
                ))}
              </nav>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h4 className="text-white/90 font-medium mb-8 tracking-wide">
                COMPANY
              </h4>
              <nav className="space-y-4">
                {company.map((item, i) => (
                  <motion.button
                    key={i}
                    onClick={() => scrollToSection(item.href)}
                    onMouseEnter={() => setHoveredIndex(`company-${i}`)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    whileHover={{ x: 8 }}
                    className="block text-white/60 hover:text-white transition-all duration-300 group text-left w-full"
                  >
                    <div className="flex items-center">
                      <span className="text-sm">{item.name}</span>
                      <ArrowRight className={`w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ${hoveredIndex === `company-${i}` ? 'translate-x-1' : ''
                        }`} />
                    </div>
                  </motion.button>
                ))}
              </nav>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h4 className="text-white/90 font-medium mb-8 tracking-wide">
                CONTACT
              </h4>
              <div className="space-y-6">
                <div>
                  <div className="text-white/80 text-sm mb-1">Email</div>
                  <a href="mailto:contact@novorixsol.com" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">
                    contact@novorixsol.com
                  </a>
                </div>

                <div>
                  <div className="text-white/80 text-sm mb-1">Phone</div>
                  <a href="tel:+923187115752" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">
                    +92 3187115752
                  </a>
                </div>

                <div>
                  <div className="text-white/80 text-sm mb-1">Location</div>
                  <div className="text-white/60 text-sm">
                    Pakistan Town, Islamabad
                    
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <div className="text-white/40 text-sm">
                © {new Date().getFullYear()} Novorix Solutions. All rights reserved.
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex space-x-6">
                  <Link
                    to="/privacy"
                    className="text-white/40 hover:text-white/80 text-sm transition-colors duration-300"
                  >
                    Privacy
                  </Link>
                  <Link
                    to="/terms"
                    className="text-white/40 hover:text-white/80 text-sm transition-colors duration-300"
                  >
                    Terms
                  </Link>
                  <Link
                    to="/cookies"
                    className="text-white/40 hover:text-white/80 text-sm transition-colors duration-300"
                  >
                    Cookies
                  </Link>
                </div>


                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 border border-white/10"
                >
                  <ChevronUp className="w-4 h-4 text-white/60" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}