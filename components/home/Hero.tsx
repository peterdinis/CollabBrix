'use client';

import { FC, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowRight,
    Play,
    Shield,
    Globe,
    Zap,
    ChevronDown,
    Users,
    Blocks,
    Sparkles,
    X,
} from 'lucide-react';

const Hero: FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    return (
        <>
            <section className='overflow-hidden px-4 pt-28 pb-16 md:pt-32 md:pb-20'>
                <div className='mx-auto max-w-7xl'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className='relative text-center'
                    >
                        <motion.div
                            animate={{
                                scale: [1, 1.02, 1],
                                rotate: [0, 1, -1, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                repeatType: 'reverse',
                            }}
                            className='px-4 sm:px-6 md:px-8'
                        >
                            <h1 className='mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:text-7xl'>
                                Think, plan and create
                                <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                                    {' '}
                                    together
                                </span>
                            </h1>
                        </motion.div>
                        <p className='mx-auto mb-8 max-w-2xl px-4 text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl'>
                            Transform the way your team collaborates with our
                            powerful workspace platform. Create, share, and
                            bring ideas to life in real-time.
                        </p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className='flex flex-col items-center justify-center space-y-4 px-4 sm:flex-row sm:space-y-0 sm:space-x-4'
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='flex w-full items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white transition-all duration-300 hover:shadow-lg sm:w-auto'
                            >
                                <span>Start for free</span>
                                <ArrowRight className='h-4 w-4' />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsVideoModalOpen(true)}
                                className='flex w-full items-center justify-center space-x-2 rounded-full border border-gray-300 px-8 py-4 text-gray-700 transition-all duration-300 hover:bg-gray-50 sm:w-auto'
                            >
                                <Play className='h-4 w-4' />
                                <span>Watch demo</span>
                            </motion.button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className='mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 px-4 sm:grid-cols-3'
                        >
                            <motion.p
                                className='flex items-center justify-center space-x-2'
                                whileHover={{ scale: 1.05 }}
                            >
                                <Shield className='h-5 w-5 text-green-500' />
                                <span className='text-gray-500'>
                                    Enterprise-grade security
                                </span>
                            </motion.p>
                            <motion.p
                                className='flex items-center justify-center space-x-2'
                                whileHover={{ scale: 1.05 }}
                            >
                                <Globe className='h-5 w-5 text-blue-500' />
                                <span className='text-gray-500'>
                                    Used by 10k+ teams
                                </span>
                            </motion.p>
                            <motion.p
                                className='flex items-center justify-center space-x-2'
                                whileHover={{ scale: 1.05 }}
                            >
                                <Zap className='h-5 w-5 text-yellow-500' />
                                <span className='text-gray-500'>
                                    Lightning fast setup
                                </span>
                            </motion.p>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className='absolute bottom-0 left-1/2 mt-16 hidden -translate-x-1/2 transform md:block'
                        >
                            <ChevronDown className='h-6 w-6 text-gray-400' />
                        </motion.div>
                    </motion.div>

                    {/* Feature Cards */}
                    <motion.div
                        variants={containerVariants}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, margin: '-100px' }}
                        className='mt-24 grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:gap-8 md:mt-32 lg:grid-cols-3'
                    >
                        {[
                            {
                                icon: Users,
                                color: 'blue',
                                title: 'Real-time Collaboration',
                                description:
                                    'Work together seamlessly with your team in real-time, no matter where you are.',
                            },
                            {
                                icon: Blocks,
                                color: 'purple',
                                title: 'Flexible Workspace',
                                description:
                                    "Customize your workspace to fit your team's unique needs and workflow.",
                            },
                            {
                                icon: Sparkles,
                                color: 'green',
                                title: 'Smart Features',
                                description:
                                    "Powerful tools and integrations to supercharge your team's productivity.",
                            },
                        ].map((feature) => (
                            <motion.div
                                key={feature.title}
                                variants={itemVariants}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className='rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-8'
                            >
                                <div className='mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-purple-50'>
                                    <feature.icon className='h-6 w-6 text-blue-600' />
                                </div>
                                <h3 className='mb-4 text-xl font-semibold'>
                                    {feature.title}
                                </h3>
                                <p className='leading-relaxed text-gray-600'>
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1 }}
                className='px-4 py-16 md:py-20'
            >
                <div className='mx-auto max-w-7xl'>
                    <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
                        <motion.img
                            initial={{ scale: 1.1 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 1.5 }}
                            src='https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80'
                            alt='Workspace Demo'
                            className='h-[300px] w-full object-cover sm:h-[400px] md:h-[600px]'
                        />
                        <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/30 to-transparent'>
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className='p-6 sm:p-8 md:p-12'
                            >
                                <h2 className='mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl'>
                                    Experience the future of collaboration
                                </h2>
                                <p className='max-w-2xl text-base text-white/90 opacity-90 sm:text-lg'>
                                    Our intuitive interface makes it easy to
                                    bring your team's ideas to life. Start
                                    creating amazing things together today.
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
                        className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm sm:p-6 md:p-8'
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className='relative mx-auto w-full max-w-4xl rounded-2xl bg-white p-2 sm:p-4'
                        >
                            <div className='aspect-video overflow-hidden rounded-lg bg-gray-100'>
                                {/* Video placeholder */}
                                <div className='flex h-full w-full items-center justify-center text-gray-400'>
                                    Video demo placeholder
                                </div>
                            </div>
                            <button
                                onClick={() => setIsVideoModalOpen(false)}
                                className='absolute -top-4 -right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg'
                            >
                                <X className='h-4 w-4 text-gray-600' />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Hero;
