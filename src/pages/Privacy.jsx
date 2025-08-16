import { motion } from "framer-motion";
import { ArrowLeft, Shield, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { useEffect } from "react";

export default function PrivacyPolicy() {

  // ← Added this entire useEffect block
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
              <Shield className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-purple-400 mb-2 sm:mb-0 sm:mr-4" />
              <Badge
                variant="outline"
                className="text-xs tracking-wide uppercase px-3 sm:px-4 py-1 border border-white/10 bg-white/5 text-white rounded-full backdrop-blur-sm"
              >
                Privacy Policy
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 px-2">
              Privacy{" "}
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
                This Privacy Policy explains how Novorix Solutions ("we," "us," or "our") collects, uses, shares, and protects your personal information when you visit or use our website (https://www.novorix.com/) or engage with our services. We are committed to protecting your privacy and complying with applicable data protection laws, including the Pakistan Personal Data Protection Bill and international privacy regulations for our global clients.
              </p>
            </div>
          </motion.div>

          {/* Privacy Sections */}
          <motion.div variants={stagger} className="space-y-8 sm:space-y-10 lg:space-y-12">

            {/* Information We Collect */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Information We Collect
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-white/70 leading-relaxed">
                <p>We may collect the following types of personal information when you contact us or use our services:</p>
                <ul className="space-y-2 sm:space-y-3 pl-4 sm:pl-6">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Contact Information:</strong> Full name, email address, phone number.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Business Information:</strong> Company name, service interested in, project details.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Message Content:</strong> Any additional details you provide through our contact forms or communication channels.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Technical Data (if applicable):</strong> IP address, browser type, device information (for website functionality only; no tracking tools are used).</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* How We Use Your Information */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                How We Use Your Information
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-white/70 leading-relaxed">
                <p>We use your personal information for the following purposes:</p>
                <ul className="space-y-2 sm:space-y-3 pl-4 sm:pl-6">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Providing and Improving Services:</strong> To communicate with you, deliver the requested services, and enhance our offerings.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Client Support:</strong> To respond to inquiries, provide technical assistance, and handle project-related communication.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Business Communication:</strong> To send you project updates, proposals, and service information relevant to your inquiry.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Legal Compliance:</strong> To comply with legal obligations and respond to lawful requests.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Legitimate Interests:</strong> To pursue our business operations, ensure website security, and prevent fraud.</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Legal Basis for Processing */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Legal Basis for Processing
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>We process your personal information based on the following legal grounds:</p>
                <ul className="space-y-3 pl-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Consent:</strong> When you voluntarily provide your details via our contact forms or email.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Contract:</strong> When processing is necessary to fulfill a service agreement with you.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Legal Obligation:</strong> When required by applicable laws and regulations.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Legitimate Interests:</strong> For purposes such as business operations, service improvement, and fraud prevention.</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Sharing Your Information */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Sharing Your Information
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>We may share your personal information with:</p>
                <ul className="space-y-3 pl-6 mb-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Service Providers:</strong> Trusted third parties who assist us in delivering our services (e.g., secure hosting providers, subcontractors bound by confidentiality).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Legal Authorities:</strong> When required by law or to protect our rights, safety, or property.</span>
                  </li>
                </ul>
                <p className="font-medium text-white">We do not sell or trade your personal data to third parties for marketing purposes.</p>
              </div>
            </motion.section>

            {/* International Data Transfers */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                International Data Transfers
              </h2>
              <p className="text-white/70 leading-relaxed">
                As we serve clients worldwide, your data may be transferred and stored outside your home country. We take steps to ensure adequate protection, including contractual safeguards, when transferring data internationally.
              </p>
            </motion.section>

            {/* Your Rights */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Your Rights
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>Depending on your location, you may have the following rights:</p>
                <ul className="space-y-3 pl-6 mb-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Right to Access:</strong> Request a copy of your personal data.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Right to Rectify:</strong> Correct inaccurate or incomplete data.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Right to Erasure:</strong> Request deletion of your data where applicable.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Right to Restrict Processing:</strong> Limit how your data is used.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Right to Data Portability:</strong> Obtain your data in a structured, machine-readable format.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-white">Right to Object:</strong> Stop processing your data for direct marketing or legitimate interests.</span>
                  </li>
                </ul>
                <p>To exercise these rights, contact us at <a href="mailto:info@novorix.com" className="text-purple-400 hover:text-purple-300 transition-colors">info@novorix.com</a>.</p>
              </div>
            </motion.section>

            {/* Additional Sections */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Data Retention
              </h2>
              <p className="text-white/70 leading-relaxed">
                We retain your personal data only as long as necessary to fulfill the purposes stated in this Privacy Policy or as required by law.
              </p>
            </motion.section>

            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Security
              </h2>
              <p className="text-white/70 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.
              </p>
            </motion.section>

            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Changes to This Privacy Policy
              </h2>
              <p className="text-white/70 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on our website with an updated effective date.
              </p>
            </motion.section>

            {/* Contact Information */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Contact Us
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-white/70 leading-relaxed mb-4 sm:mb-6">
                <p>If you have any questions or wish to exercise your rights regarding your personal data, please contact us:</p>
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