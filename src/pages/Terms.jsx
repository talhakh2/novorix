import { motion } from "framer-motion";
import { ArrowLeft, FileText, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { useEffect } from "react";

export default function TermsOfService() {
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
                            <FileText className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-purple-400 mb-2 sm:mb-0 sm:mr-4" />
                            <Badge
                                variant="outline"
                                className="text-xs tracking-wide uppercase px-3 sm:px-4 py-1 border border-white/10 bg-white/5 text-white rounded-full backdrop-blur-sm"
                            >
                                Terms of Service
                            </Badge>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 px-2">
                            Terms of{" "}
                            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                                Service
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
                                These Terms of Service ("Terms") govern your use of the website located at https://www.novorix.com/ and all related services provided by Novorix Solutions ("Company," "we," "us," or "our"). By accessing or using our services, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use our services.
                            </p>
                        </div>
                    </motion.div>

                    {/* Terms Sections */}
                    <motion.div variants={stagger} className="space-y-8 sm:space-y-10 lg:space-y-12">

                        {/* Acceptance of Terms */}
                        <motion.section variants={fadeInUp}>
                            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Acceptance of Terms
                            </h2>
                            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-white/70 leading-relaxed">
                                <p>By accessing and using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. These Terms constitute a legally binding agreement between you and Novorix Solutions.</p>
                            </div>
                        </motion.section>

                        {/* Services Description */}
                        <motion.section variants={fadeInUp}>
                            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Services Description
                            </h2>
                            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-white/70 leading-relaxed">
                                <p>Novorix Solutions provides the following services:</p>
                                <ul className="space-y-2 sm:space-y-3 pl-4 sm:pl-6">
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                                        <span><strong className="text-white">Web Development:</strong> Custom website design and development services.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                                        <span><strong className="text-white">Mobile App Development:</strong> iOS and Android application development.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                                        <span><strong className="text-white">Digital Marketing:</strong> SEO, social media marketing, and digital advertising services.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                                        <span><strong className="text-white">Consulting Services:</strong> Technology consulting and business optimization solutions.</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.section>

                        {/* User Responsibilities */}
                        <motion.section variants={fadeInUp}>
                            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                User Responsibilities
                            </h2>
                            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-white/70 leading-relaxed">
                                <p>As a user of our services, you agree to:</p>
                                <ul className="space-y-2 sm:space-y-3 pl-4 sm:pl-6">
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                                        <span>Provide accurate and complete information when contacting us or using our services.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                                        <span>Use our services only for lawful purposes and in accordance with these Terms.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                                        <span>Not attempt to interfere with the proper functioning of our website or services.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                                        <span>Respect intellectual property rights and not infringe on copyrights or trademarks.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                                        <span>Maintain the confidentiality of any login credentials or sensitive information.</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.section>

                        {/* Service Terms and Payment */}
                        <motion.section variants={fadeInUp}>
                            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Service Terms and Payment
                            </h2>
                            <div className="space-y-4 text-white/70 leading-relaxed">
                                <p>The following terms apply to our service agreements:</p>
                                <ul className="space-y-3 pl-6">
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span><strong className="text-white">Project Scope:</strong> All services will be defined in a separate project agreement or statement of work.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span><strong className="text-white">Payment Terms:</strong> Payment schedules and methods will be specified in individual service agreements.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span><strong className="text-white">Delivery Timelines:</strong> Project timelines will be mutually agreed upon and documented in writing.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span><strong className="text-white">Revisions:</strong> The number and scope of revisions will be defined in the project agreement.</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.section>

                        {/* Intellectual Property */}
                        <motion.section variants={fadeInUp}>
                            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Intellectual Property
                            </h2>
                            <div className="space-y-4 text-white/70 leading-relaxed">
                                <p>Intellectual property rights are handled as follows:</p>
                                <ul className="space-y-3 pl-6 mb-4">
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span><strong className="text-white">Client Content:</strong> You retain ownership of all content, data, and materials you provide to us.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span><strong className="text-white">Delivered Work:</strong> Upon full payment, you will receive ownership rights to the final deliverables as specified in the project agreement.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span><strong className="text-white">Our Tools and Methods:</strong> We retain ownership of our proprietary tools, methods, and general knowledge used in service delivery.</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.section>

                        {/* Limitation of Liability */}
                        <motion.section variants={fadeInUp}>
                            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Limitation of Liability
                            </h2>
                            <div className="space-y-4 text-white/70 leading-relaxed">
                                <p>To the fullest extent permitted by law:</p>
                                <ul className="space-y-3 pl-6 mb-4">
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>Our total liability for any claims arising from our services shall not exceed the total amount paid by you for the specific service.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>We shall not be liable for any indirect, incidental, special, or consequential damages.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>We are not responsible for any third-party services, websites, or platforms integrated with our deliverables.</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.section>

                        {/* Warranty and Disclaimers */}
                        <motion.section variants={fadeInUp}>
                            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Warranty and Disclaimers
                            </h2>
                            <div className="space-y-4 text-white/70 leading-relaxed">
                                <p>We provide our services "as is" and disclaim all warranties except as follows:</p>
                                <ul className="space-y-3 pl-6 mb-4">
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>We warrant that our services will be performed in a professional manner consistent with industry standards.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>Any specific warranties will be outlined in individual service agreements.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>We do not guarantee specific results or outcomes unless explicitly stated in writing.</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.section>

                        {/* Termination */}
                        <motion.section variants={fadeInUp}>
                            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Termination
                            </h2>
                            <p className="text-white/70 leading-relaxed">
                                Either party may terminate a service agreement with written notice as specified in the individual project agreement. Upon termination, you will be responsible for payment of all services performed up to the termination date.
                            </p>
                        </motion.section>

                        {/* Governing Law */}
                        <motion.section variants={fadeInUp}>
                            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Governing Law
                            </h2>
                            <p className="text-white/70 leading-relaxed">
                                These Terms shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising from these Terms or our services shall be subject to the jurisdiction of the courts of Pakistan.
                            </p>
                        </motion.section>

                        {/* Changes to Terms */}
                        <motion.section variants={fadeInUp}>
                            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Changes to These Terms
                            </h2>
                            <p className="text-white/70 leading-relaxed">
                                We reserve the right to modify these Terms at any time. Updated Terms will be posted on our website with a new effective date. Your continued use of our services after any changes constitutes acceptance of the revised Terms.
                            </p>
                        </motion.section>

                        {/* Contact Information */}
                        <motion.section variants={fadeInUp}>
                            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Contact Us
                            </h2>
                            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-white/70 leading-relaxed mb-4 sm:mb-6">
                                <p>If you have any questions about these Terms of Service, please contact us:</p>
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
                                        <a href="mailto:contact@novorixsol.com" className="text-purple-400 hover:text-purple-300 transition-colors break-all">
                                            contact@novorixsol.com
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