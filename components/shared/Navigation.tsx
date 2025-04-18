'use client';

import { FC, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Blocks, Menu, X } from 'lucide-react';

const Navigation: FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            x: '100%',
        },
        open: {
            opacity: 1,
            x: '0%',
        },
    };

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className='fixed z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex h-16 items-center justify-between'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className='flex shrink-0 items-center space-x-2'
                    >
                        <motion.div
                            whileHover={{ rotate: 180 }}
                            transition={{ duration: 0.3 }}
                            className='flex h-8 w-8 items-center justify-center'
                        >
                            <Blocks className='h-6 w-6 text-blue-600' />
                        </motion.div>
                        <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-xl font-bold text-transparent'>
                            CollabBrix
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className='hidden space-x-6 md:flex lg:space-x-8'
                    >
                        {['Features', 'Solutions', 'Pricing', 'About'].map(
                            (item) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className='group relative py-2 text-gray-600 hover:text-gray-900'
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {item}
                                    <motion.div
                                        className='absolute bottom-0 left-0 h-0.5 w-full origin-left bg-blue-600'
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                </motion.a>
                            )
                        )}
                    </motion.div>

                    <div className='flex items-center space-x-4'>
                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={handleMobileMenuToggle}
                            className='p-2 md:hidden'
                            aria-label='Toggle mobile menu'
                        >
                            <AnimatePresence mode='wait'>
                                {isMobileMenuOpen ? (
                                    <X className='h-6 w-6 text-gray-600' />
                                ) : (
                                    <Menu className='h-6 w-6 text-gray-600' />
                                )}
                            </AnimatePresence>
                        </motion.button>

                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-white transition-all duration-300 hover:shadow-lg md:block'
                        >
                            Get Started
                        </motion.button>
                    </div>
                </div>
            </div>

            <AnimatePresence mode='wait'>
                {isMobileMenuOpen && (
                    <motion.div
                        initial='closed'
                        animate='open'
                        exit='closed'
                        variants={mobileMenuVariants}
                        transition={{
                            type: 'tween',
                            duration: 0.3,
                        }}
                        className='fixed inset-y-0 right-0 z-50 w-full bg-white shadow-xl md:hidden'
                    >
                        <div className='px-6 pt-20'>
                            {['Features', 'Solutions', 'Pricing', 'About'].map(
                                (item) => (
                                    <motion.a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className='block border-b border-gray-100 py-4 text-lg text-gray-600'
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        {item}
                                    </motion.a>
                                )
                            )}
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                className='mt-6 w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-white transition-all duration-300 hover:shadow-lg'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Get Started
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navigation;
