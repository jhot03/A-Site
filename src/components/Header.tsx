import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import React from 'react';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const isActive = (path: string) => location.pathname === path;

  React.useEffect(() => {
    // Close menu on route change
    setOpen(false);
  }, [location.pathname]);

  React.useEffect(() => {
    // Prevent body scroll when menu open
    if (open) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
    return () => document.body.classList.remove('overflow-hidden');
  }, [open]);

  return (
    <motion.header
      className="sticky top-0 z-50 backdrop-blur-md bg-[#0A0A0F]/80 border-b border-white/5"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: easeOut }}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between py-4 px-4 sm:px-6">
        {/* Left: Brand or simple title (optional) */}
        <Link to="/home" className="text-white font-semibold tracking-wide">
          Automation
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { path: '/home', label: 'Home' },
            { path: '/services', label: 'Services' },
            { path: '/testimonies', label: 'Testimonials' },
            { path: '/about', label: 'About' },
          ].map((link) => (
            <Link key={link.path} to={link.path} className="relative group">
              <span
                className={`text-base font-medium transition-colors duration-200 ${
                  isActive(link.path) ? 'text-white' : 'text-[#CFCFD8] hover:text-white'
                }`}
              >
                {link.label}
              </span>
              <span
                className={`pointer-events-none absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-[#4F46E5] via-[#6366F1] to-[#0EA5E9] transition-all duration-300 ${
                  isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.button
          className="hidden md:inline-flex relative px-5 py-2.5 rounded-lg font-medium text-white bg-linear-to-br from-[#4F46E5] via-[#6366F1] to-[#0EA5E9] shadow-[0_0_20px_rgba(99,102,241,0.3)] overflow-hidden group"
          whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(99,102,241,0.5)' }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          onClick={() => navigate('/contact')}
        >
          <span className="relative z-10">Get Started</span>
          <motion.div className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 text-white/90 hover:text-white h-10 w-10"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (full-width, scrollable, safe on iPhone) */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-60 bg-black/80 backdrop-blur-md md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed top-0 left-0 right-0 z-70 md:hidden"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: easeOut }}
              role="dialog"
              aria-modal="true"
            >
              <div
                className="mx-3 mt-[env(safe-area-inset-top)] rounded-2xl border border-white/10 bg-[#111118]/99 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.4)] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                  <span className="text-white font-semibold tracking-wide">Menu</span>
                  <button
                    className="rounded-md border border-white/10 text-[#CFCFD8] hover:text-white h-9 w-9 inline-flex items-center justify-center"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                  >
                    ✕
                  </button>
                </div>

                <div className="max-h-[calc(100vh-10rem)] overflow-y-auto p-2">
                  <nav className="flex flex-col">
                    {[
                      { path: '/home', label: 'Home' },
                      { path: '/services', label: 'Services' },
                      { path: '/testimonies', label: 'Testimonials' },
                      { path: '/about', label: 'About' },
                    ].map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`px-4 py-3 text-base ${
                          isActive(link.path) ? 'text-white' : 'text-[#CFCFD8] hover:text-white'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="px-4 py-3">
                    <motion.button
                      className="w-full relative px-5 py-3 rounded-lg font-medium text-white bg-linear-to-br from-[#4F46E5] via-[#6366F1] to-[#0EA5E9] shadow-[0_0_20px_rgba(99,102,241,0.3)] overflow-hidden group"
                      whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(99,102,241,0.5)' }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => {
                        setOpen(false);
                        navigate('/contact');
                      }}
                    >
                      <span className="relative z-10">Get Started</span>
                      <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br from-white/20 to-transparent" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;