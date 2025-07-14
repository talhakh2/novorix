// src/components/Header.jsx
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header({ scrollToSection, activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ["home", "about", "services", "projects", "team", "testimonials", "process", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
      ? 'bg-neutral-900/90 backdrop-blur-md border-b border-white/10 shadow-lg'
      : 'bg-neutral-900/95 backdrop-blur-sm border-b border-white/5'

      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 group">
              <img
                src="/logo1.png"
                alt="Norovix Logo"
                width={120}
                height={40}
                className="transition-all duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`relative capitalize px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg group ${activeSection === item
                    ? "text-white bg-white/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                >
                  <span className="relative z-10">{item}</span>
                  {activeSection === item && (
                    <div className="absolute inset-0 bg-white/10 rounded-lg transition-all duration-200" />
                  )}
                </button>
              ))}

              {/* CTA Button */}
              <div className="ml-6 pl-6 border-l border-white/20">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-black bg-white rounded-lg hover:bg-white/90 transition-all duration-200 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <span className="transition-opacity duration-300 group-hover:opacity-0">
                      Get Started
                    </span>
                    <ArrowRight className="ml-1.5 w-4 h-4 transition-all duration-300 group-hover:-translate-x-6 group-hover:opacity-0" />
                    <ArrowRight className="w-4 h-4 absolute opacity-0 transition-all duration-300 translate-x-6 group-hover:opacity-100 group-hover:translate-x-0" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-white/95 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 focus:outline-none transition-all duration-200"
            >
              <div className="relative w-5 h-5">
                <Menu className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                <X className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="px-4 py-4 bg-neutral-900/95 border-t border-white/10 backdrop-blur-md">

          <div className="space-y-1">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  setIsMenuOpen(false);
                }}
                className={`capitalize block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${activeSection === item
                  ? "text-white bg-white/10"
                  : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMenuOpen ? 'slideInFromTop 0.3s ease-out forwards' : 'none'
                }}
              >
                {item}
              </button>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 mt-4 border-t border-white/20">
              <button
                onClick={() => {
                  scrollToSection('contact');
                  setIsMenuOpen(false);
                }}
                className="group relative flex items-center justify-center w-full px-5 py-2.5 text-sm font-semibold rounded-lg bg-white text-black shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative flex items-center justify-center">
                  <span className="transition-opacity duration-300 group-hover:opacity-0">
                    Get Started
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:-translate-x-6 group-hover:opacity-0" />
                  <ArrowRight className="h-4 w-4 absolute opacity-0 transition-all duration-300 translate-x-6 group-hover:opacity-100 group-hover:translate-x-0" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}