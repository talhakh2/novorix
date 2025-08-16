import { motion } from "framer-motion";
import { ArrowLeft, Cookie, Mail, Phone, MapPin, Settings, Eye, Zap } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { useEffect } from "react";

export default function CookiesPolicy() {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    window.history.back();
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Animated Background Blobs - Similar to Hero */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-120px] left-[-80px] w-[500px] h-[500px] bg-purple-600 opacity-20 rounded-full blur-[140px] animate-slow-pulse" />
        <div className="absolute bottom-[-80px] right-[-100px] w-[400px] h-[400px] bg-pink-500 opacity-15 rounded-full blur-[120px] animate-slower-pulse" />
        <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] bg-red-500 opacity-5 rounded-full blur-[100px] animate-slow-pulse" />
      </div>

      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 pt-4 sm:pt-6 lg:pt-8 pb-2 sm:pb-4"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            onClick={goBack}
            variant="outline"
            className="group border border-white/20 text-white hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
          >
            <ArrowLeft className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:-translate-x-1" />
            Back
          </Button>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          {/* Page Title */}
          <motion.div variants={fadeInUp} className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
              <Cookie className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-purple-400 mb-2 sm:mb-0 sm:mr-4" />
              <Badge
                variant="outline"
                className="text-xs tracking-wide uppercase px-3 sm:px-4 py-1 border border-white/10 bg-white/5 text-white rounded-full backdrop-blur-sm"
              >
                Cookies Policy
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 px-2">
              Cookies{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-white/60 mb-3 sm:mb-4">
              for Novorix Solutions
            </p>
            <p className="text-sm sm:text-base text-white/40">
              Effective Date: 13 August 2025
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div variants={fadeInUp} className="mb-8 sm:mb-10 lg:mb-12">
            <div className="p-4 sm:p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                This Cookies Policy explains how Novorix Solutions ("we," "us," or "our") uses cookies and similar technologies on our website (https://www.novorix.com/). We believe in transparency about how we collect and use data, and this policy provides detailed information about our use of cookies.
              </p>
            </div>
          </motion.div>

          {/* Cookie Sections */}
          <motion.div variants={stagger} className="space-y-8 sm:space-y-10 lg:space-y-12">
            
            {/* What Are Cookies */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                What Are Cookies?
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-white/70 leading-relaxed">
                <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.</p>
                <p>Cookies can be categorized into different types:</p>
                <ul className="space-y-2 sm:space-y-3 pl-4 sm:pl-6">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Session Cookies:</strong> Temporary cookies that are deleted when you close your browser.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Persistent Cookies:</strong> Cookies that remain on your device for a set period or until you delete them.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">First-Party Cookies:</strong> Cookies set by the website you are visiting.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Third-Party Cookies:</strong> Cookies set by external services integrated into the website.</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* How We Use Cookies */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                How We Use Cookies
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed">
                <p className="text-white font-medium">Currently, our website uses minimal cookies to ensure basic functionality. We prioritize your privacy and do not use tracking or advertising cookies.</p>
                
                <div className="grid gap-4 sm:gap-6">
                  {/* Essential Cookies */}
                  <div className="p-4 sm:p-5 rounded-lg border border-green-500/20 bg-green-500/5">
                    <div className="flex items-center mb-3">
                      <Zap className="h-5 w-5 text-green-400 mr-2" />
                      <h3 className="text-white font-bold">Essential Cookies</h3>
                    </div>
                    <p className="text-white/70 mb-2">These cookies are necessary for the website to function properly.</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Website security and basic functionality</li>
                      <li>• Form submission and contact functionality</li>
                      <li>• Session management</li>
                    </ul>
                  </div>

                  {/* Performance Cookies */}
                  <div className="p-4 sm:p-5 rounded-lg border border-blue-500/20 bg-blue-500/5">
                    <div className="flex items-center mb-3">
                      <Eye className="h-5 w-5 text-blue-400 mr-2" />
                      <h3 className="text-white font-bold">Performance Cookies (Currently Not Used)</h3>
                    </div>
                    <p className="text-white/70 mb-2">We may implement these in the future to understand how visitors interact with our website.</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Anonymous usage statistics</li>
                      <li>• Page performance monitoring</li>
                      <li>• Error tracking for improvements</li>
                    </ul>
                  </div>

                  {/* Functional Cookies */}
                  <div className="p-4 sm:p-5 rounded-lg border border-purple-500/20 bg-purple-500/5">
                    <div className="flex items-center mb-3">
                      <Settings className="h-5 w-5 text-purple-400 mr-2" />
                      <h3 className="text-white font-bold">Functional Cookies (Currently Not Used)</h3>
                    </div>
                    <p className="text-white/70 mb-2">These may be added to enhance user experience with personalized features.</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Language preferences</li>
                      <li>• User interface customizations</li>
                      <li>• Accessibility settings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Our Minimal Approach */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Privacy-First Approach
              </h2>
              <div className="p-4 sm:p-6 rounded-lg border border-green-500/20 bg-green-500/5 backdrop-blur-sm">
                <div className="space-y-4 text-white/80 leading-relaxed">
                  <p className="font-medium text-white">At Novorix Solutions, we believe in minimizing data collection and respecting your privacy:</p>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong className="text-white">No Tracking:</strong> We do not use cookies to track your browsing behavior across other websites.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong className="text-white">No Advertising Cookies:</strong> We do not serve targeted advertisements or use advertising cookies.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong className="text-white">Essential Only:</strong> Currently, we only use cookies that are absolutely necessary for website functionality.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong className="text-white">Transparent Updates:</strong> If we add any new cookie types, we will update this policy and notify you.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Third-Party Services */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Third-Party Services
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>Currently, our website does not integrate third-party services that use cookies. If we integrate any third-party services in the future (such as analytics tools), we will:</p>
                <ul className="space-y-3 pl-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Update this Cookies Policy to reflect any changes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Provide links to third-party cookie policies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Ensure compliance with privacy regulations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Obtain appropriate consent where required</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Managing Cookies */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Managing Your Cookie Preferences
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>You have control over cookies and can manage them in several ways:</p>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                    <h3 className="text-white font-bold mb-2">Browser Settings</h3>
                    <p className="text-sm">Most browsers allow you to:</p>
                    <ul className="text-sm mt-2 space-y-1 pl-4">
                      <li>• View and delete cookies</li>
                      <li>• Block cookies from specific sites</li>
                      <li>• Block all cookies (may affect functionality)</li>
                      <li>• Set preferences for cookie acceptance</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                    <h3 className="text-white font-bold mb-2">Browser-Specific Instructions</h3>
                    <div className="text-sm space-y-2">
                      <p><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</p>
                      <p><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</p>
                      <p><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</p>
                      <p><strong>Edge:</strong> Settings → Site permissions → Cookies and site data</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-lg border border-yellow-500/20 bg-yellow-500/5">
                  <p className="text-yellow-200 text-sm">
                    <strong>Note:</strong> Disabling essential cookies may affect basic website functionality, including contact forms and security features.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Your Rights */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Your Rights and Choices
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>You have the right to:</p>
                <ul className="space-y-3 pl-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Accept or Decline:</strong> Choose which cookies to accept (when cookie consent is implemented)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Withdraw Consent:</strong> Change your cookie preferences at any time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Request Information:</strong> Ask us about the cookies we use</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Lodge Complaints:</strong> Contact relevant data protection authorities if you have concerns</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Updates to Policy */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Updates to This Cookies Policy
              </h2>
              <p className="text-white/70 leading-relaxed">
                We may update this Cookies Policy from time to time to reflect changes in our cookie usage or legal requirements. When we make significant changes, we will notify you by updating the effective date and, where appropriate, provide additional notice through our website or direct communication.
              </p>
            </motion.section>

            {/* Contact Information */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Contact Us
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-white/70 leading-relaxed mb-4 sm:mb-6">
                <p>If you have any questions about our use of cookies or this Cookies Policy, please contact us:</p>
              </div>
              
              <div className="p-4 sm:p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Novorix Solutions</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start sm:items-center text-sm sm:text-base text-white/70">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span>Islamabad, Pakistan</span>
                  </div>
                  <div className="flex items-start sm:items-center text-sm sm:text-base text-white/70">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <a href="mailto:info@novorix.com" className="text-purple-400 hover:text-purple-300 transition-colors break-all">
                      info@novorix.com
                    </a>
                  </div>
                  <div className="flex items-start sm:items-center text-sm sm:text-base text-white/70">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <a href="tel:+923187115752" className="text-purple-400 hover:text-purple-300 transition-colors">
                      +92 318 7115752
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>
          </motion.div>

          {/* Back to Top Button */}
          <motion.div
            variants={fadeInUp}
            className="text-center mt-12 sm:mt-14 lg:mt-16"
          >
            <Button
              onClick={scrollToTop}
              className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition-all duration-300 text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3"
            >
              Back to Top
            </Button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}