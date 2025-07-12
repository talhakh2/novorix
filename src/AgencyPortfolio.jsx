"use client"

import { useState, useEffect } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Badge } from "../components/ui/badge"
import { Link } from "react-router-dom";

import {
  Menu,
  X,
  ArrowRight,
  Star,
  Users,
  Target,
  Zap,
  Palette,
  Code,
  Smartphone,
  TrendingUp,
  CheckCircle,
  Quote,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Github,
} from "lucide-react"

export default function AgencyPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "projects", "team", "testimonials", "process", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src="/logo1.png" alt="Norovix Logo" width={120} height={40} />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {["home", "about", "services", "projects", "testimonials", "contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`capitalize px-3 py-2 text-sm font-medium transition-colors duration-200 ${activeSection === item
                        ? "text-purple-600 border-b-2 border-purple-600"
                        : "text-gray-700 hover:text-purple-600"
                        }`}
                    >
                      {item}
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              {["home", "about", "services", "projects", "team", "testimonials", "process", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

// Hero Section
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-white to-pink-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <Badge variant="outline" className="text-purple-600 border-purple-200">
                  🚀 Creative Digital Agency
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Smart Solutions.
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {" "}
                    Real Impact.
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl">
                  An innovative digital agency offering cutting-edge software, web, and AI solutions for modern businesses.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  onClick={() => scrollToSection("projects")}
                >
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button className="px-6" variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
                  Get In Touch
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">70+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">3+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="relative z-10">
                <img
                  src="./home.png"
                  alt="Creative Team"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* // About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="p-4 text-purple-600 border-purple-200 mb-4">
              About Us
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Passionate About Digital Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Novorix Solutions, we’re a team of creative professionals passionate about bringing your vision to life through innovative design, intelligent automation, and cutting-edge technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2022, Novorix Solutions began as a vision to merge creativity with technology — a small team of innovators determined to build smarter digital experiences. Over the years, we’ve grown into a full-service agency, delivering powerful solutions in AI automation, web development, mobile apps, digital marketing, and UI/UX design.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our approach blends strategic insight with bold creativity, ensuring every project not only looks great but drives real, measurable results. At Novorix, we don’t just build digital products — we build digital impact.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-pink-50 rounded-lg">
                  <Target className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">100+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="about.png"
                alt="About Us"
                width={500}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="p-4 text-purple-600 border-purple-200 mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What We Do Best</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to launch, we provide comprehensive digital solutions that help your business thrive in the
              digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: "AI Automation",
                description:
                  "Streamline your operations with intelligent automation solutions that boost efficiency, reduce errors, and drive growth.",
                features: ["Workflow Automation", "AI Chatbots & Virtual Assistants", "Predictive Analytics", "Intelligent Process Optimization"],
              },
              {
                icon: Code,
                title: "Web Development",
                description: "Build fast, responsive, and user-friendly websites that convert visitors into customers.",
                features: ["Custom Development", "E-commerce", "CMS Integration", "Performance Optimization"],
              },
              {
                icon: Smartphone,
                title: "Mobile Apps",
                description:
                  "Develop native and cross-platform mobile applications that provide exceptional user experiences.",
                features: ["iOS Development", "Android Development", "React Native", "App Store Optimization"],
              },
              {
                icon: TrendingUp,
                title: "Digital Marketing",
                description:
                  "Grow your online presence with data-driven marketing strategies that deliver real results.",
                features: ["SEO Optimization", "Social Media", "Content Marketing", "PPC Campaigns"],
              },
              {
                icon: Zap,
                title: "UI/UX Design",
                description: "Design intuitive and engaging user interfaces that provide seamless user experiences.",
                features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
              },
              {
                icon: Target,
                title: "Consulting",
                description:
                  "Strategic guidance to help you make informed decisions about your digital transformation.",
                features: ["Digital Strategy", "Technology Consulting", "Process Optimization", "Growth Planning"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="p-4 text-purple-600 border-purple-200 mb-4">
              Our Work
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our latest work and see how we've helped businesses transform their digital presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pet Love E-commerce Website",
                category: "Web Development",
                image: "/pet-love.png?height=400&width=600",
                description: "Modern e-commerce solution with advanced features",
                link: "https://petlovekw.com/"
              },
              {
                title: "Brand Identity",
                category: "Brand Design",
                image: "/placeholder.svg?height=400&width=600",
                description: "Complete brand redesign for tech startup",
              },
              {
                title: "Mobile Banking App",
                category: "Mobile App",
                image: "/placeholder.svg?height=400&width=600",
                description: "Secure and user-friendly banking application",
              },
              {
                title: "SaaS Dashboard",
                category: "UI/UX Design",
                image: "/placeholder.svg?height=400&width=600",
                description: "Intuitive dashboard for data analytics platform",
              },
              {
                title: "Restaurant Website",
                category: "Web Development",
                image: "/placeholder.svg?height=400&width=600",
                description: "Responsive website with online ordering system",
              },
              {
                title: "Fitness App",
                category: "Mobile App",
                image: "/placeholder.svg?height=400&width=600",
                description: "Personal training and workout tracking app",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge variant="secondary" className="mb-2">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="p-4 text-purple-600 border-purple-200 mb-4">
              Our Team
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet the Creators</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of talented professionals brings together creativity, technical expertise, and strategic
              thinking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Talha Farooq",
                role: "CEO",
                image: "/placeholder.svg?height=400&width=400",
                bio: "5+ years of experience in AI Automation and Full-Stack Development",
              },
              {
                name: "Muhammad Abubaker",
                role: "COO",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Full-stack developer with expertise in modern frameworks",
              },
              {
                name: "Bilal Anwar",
                role: "Lead Developer",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Passionate about creating intuitive user experiences",
              },
              {
                name: "Hassan Farooq",
                role: "Project Manager",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Ensures projects are delivered on time and within budget",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="group text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="p-4 text-purple-600 border-purple-200 mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Jennifer Walsh",
                company: "TechStart Inc.",
                role: "CEO",
                content:
                  "CreativeStudio transformed our brand completely. The new design perfectly captures our vision and has significantly improved our market presence.",
                rating: 5,
              },
              {
                name: "Robert Martinez",
                company: "GreenLeaf Organics",
                role: "Marketing Director",
                content:
                  "The team's attention to detail and creative approach exceeded our expectations. Our website conversion rate increased by 150% after the redesign.",
                rating: 5,
              },
              {
                name: "Lisa Thompson",
                company: "FinanceFlow",
                role: "Founder",
                content:
                  "Professional, creative, and reliable. They delivered our mobile app on time and within budget. Couldn't be happier with the results.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-purple-200 mb-4" />
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="p-4 text-purple-600 border-purple-200 mb-4">
              Our Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures every project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business, goals, and target audience through comprehensive research and analysis.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "Based on our findings, we develop a strategic plan that aligns with your objectives and market opportunities.",
              },
              {
                step: "03",
                title: "Design & Development",
                description:
                  "Our team brings the strategy to life through creative design and robust development, keeping you involved throughout.",
              },
              {
                step: "04",
                title: "Launch & Support",
                description:
                  "We ensure a smooth launch and provide ongoing support to help you achieve continued success.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-200 to-pink-200"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="p-4 text-purple-600 border-purple-200 mb-4">
              Get In Touch
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Let's Start Your Project</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your digital presence? We'd love to hear about your project and discuss how we can
              help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-purple-600 mr-4" />
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <div className="text-gray-600">hello@creativestudio.com</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-purple-600 mr-4" />
                    <div>
                      <div className="font-medium text-gray-900">Phone</div>
                      <div className="text-gray-600">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-purple-600 mr-4" />
                    <div>
                      <div className="font-medium text-gray-900">Address</div>
                      <div className="text-gray-600">123 Creative Street, Design City, DC 12345</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-colors duration-200"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-colors duration-200"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-colors duration-200"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-colors duration-200"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <Input placeholder="Your Company" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                      <option>Select a service</option>
                      <option>AI Automization</option>
                      <option>Web Development</option>
                      <option>Mobile App</option>
                      <option>Digital Marketing</option>
                      <option>UI/UX Design</option>
                      <option>Consulting</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea placeholder="Tell us about your project..." rows={4} />
                  </div>
                  <Button
                    type="submit"
                    className="p-4 w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    size="lg"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center">
                <img src="/logo1.png" alt="Norovix Logo" width={200} height={20} />
              </div>
              <p className="text-gray-400 mb-10 max-w-md">
                We're a Novorix Solutions agency passionate about bringing your vision to life through innovative design
                and cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-colors duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-colors duration-200"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-colors duration-200"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-colors duration-200"
                >
                  <Github className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    AI Automization
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    UI/UX Design
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#about" className="hover:text-white transition-colors duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} CreativeStudio. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div >
  )
}