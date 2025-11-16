import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/contact");
    }

    const isActive = (path: string) => location.pathname === path;

    return (
        <motion.header 
            className="sticky top-0 z-50 backdrop-blur-md bg-[#0A0A0F]/80 border-b border-white/5"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6">
                {/* Navigation Links - Left Aligned */}
                <nav className="flex items-center gap-8">
                    {[
                        { path: '/home', label: 'Home' },
                        { path: '/services', label: 'Services' },
                        { path: '/testimonies', label: 'Testimonials' },
                        { path: '/about', label: 'About' },
                    ].map((link) => (
                        <Link 
                            key={link.path}
                            to={link.path}
                            className="relative group"
                        >
                            <span className={`text-base font-medium transition-colors duration-200 ${
                                isActive(link.path) 
                                    ? 'text-white' 
                                    : 'text-[#CFCFD8] hover:text-white'
                            }`}>
                                {link.label}
                            </span>
                            
                            {/* Animated underline */}
                            <span 
                                className={`absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-[#4F46E5] via-[#6366F1] to-[#0EA5E9] transition-all duration-300 ${
                                    isActive(link.path) 
                                        ? 'w-full' 
                                        : 'w-0 group-hover:w-full'
                                }`}
                            />
                        </Link>
                    ))}
                </nav>

                {/* CTA Button - Right Aligned */}
                <motion.button
                    className="relative px-6 py-2.5 rounded-lg font-medium text-white bg-linear-to-br from-[#4F46E5] via-[#6366F1] to-[#0EA5E9] shadow-[0_0_20px_rgba(99,102,241,0.3)] overflow-hidden group"
                    whileHover={{ 
                        scale: 1.03,
                        boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    onClick={handleClick}
                >
                    <span className="relative z-10">Get Started</span>
                    
                    {/* Hover glow effect */}
                    <motion.div
                        className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                </motion.button>
            </div>
        </motion.header>
    );
}

export default Header;