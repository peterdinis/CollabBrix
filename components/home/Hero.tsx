"use client"

import { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, Play, Shield, Globe, Zap, ChevronDown, Users, Blocks, Sparkles, X } from "lucide-react";

const Hero: FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    return (
        <>
            <section className="pt-28 md:pt-32 pb-16 md:pb-20 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center relative"
                    >
                        <motion.div
                            animate={{
                                scale: [1, 1.02, 1],
                                rotate: [0, 1, -1, 0]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                            className="px-4 sm:px-6 md:px-8"
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
                                Think, plan and create
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"> together</span>
                            </h1>
                        </motion.div>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                            Transform the way your team collaborates with our powerful workspace platform.
                            Create, share, and bring ideas to life in real-time.
                        </p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 px-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                                <span>Start for free</span>
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsVideoModalOpen(true)}
                                className="w-full sm:w-auto border border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                                <Play className="w-4 h-4" />
                                <span>Watch demo</span>
                            </motion.button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto px-4"
                        >
                            <motion.p
                                className="flex items-center justify-center space-x-2"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Shield className="w-5 h-5 text-green-500" />
                                <span className="text-gray-500">Enterprise-grade security</span>
                            </motion.p>
                            <motion.p
                                className="flex items-center justify-center space-x-2"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Globe className="w-5 h-5 text-blue-500" />
                                <span className="text-gray-500">Used by 10k+ teams</span>
                            </motion.p>
                            <motion.p
                                className="flex items-center justify-center space-x-2"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Zap className="w-5 h-5 text-yellow-500" />
                                <span className="text-gray-500">Lightning fast setup</span>
                            </motion.p>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-16 hidden md:block"
                        >
                            <ChevronDown className="w-6 h-6 text-gray-400" />
                        </motion.div>
                    </motion.div>

                    {/* Feature Cards */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="mt-24 md:mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4"
                    >
                        {[
                            {
                                icon: Users,
                                color: 'blue',
                                title: 'Real-time Collaboration',
                                description: 'Work together seamlessly with your team in real-time, no matter where you are.'
                            },
                            {
                                icon: Blocks,
                                color: 'purple',
                                title: 'Flexible Workspace',
                                description: 'Customize your workspace to fit your team\'s unique needs and workflow.'
                            },
                            {
                                icon: Sparkles,
                                color: 'green',
                                title: 'Smart Features',
                                description: 'Powerful tools and integrations to supercharge your team\'s productivity.'
                            }
                        ].map((feature) => (
                            <motion.div
                                key={feature.title}
                                variants={itemVariants}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-gradient-to-br from-blue-50 to-purple-50">
                                    <feature.icon className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className="py-16 md:py-20 px-4"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <motion.img
                            initial={{ scale: 1.1 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 1.5 }}
                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80"
                            alt="Workspace Demo"
                            className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end">
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="p-6 sm:p-8 md:p-12"
                            >
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
                                    Experience the future of collaboration
                                </h2>
                                <p className="text-base sm:text-lg opacity-90 max-w-2xl text-white/90">
                                    Our intuitive interface makes it easy to bring your team's ideas to life.
                                    Start creating amazing things together today.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Video Modal */}
            <AnimatePresence>
                {isVideoModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsVideoModalOpen(false)}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={e => e.stopPropagation()}
                            className="bg-white rounded-2xl p-2 sm:p-4 max-w-4xl w-full mx-auto relative"
                        >
                            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                                {/* Video placeholder */}
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    Video demo placeholder
                                </div>
                            </div>
                            <button
                                onClick={() => setIsVideoModalOpen(false)}
                                className="absolute -top-4 -right-4 bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
                            >
                                <X className="w-4 h-4 text-gray-600" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Hero;