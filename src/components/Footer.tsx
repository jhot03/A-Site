import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#111118] border-t border-white/5 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 pb-[calc(1rem+env(safe-area-inset-bottom))]">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          {/* Brand line */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 text-sm text-[#CFCFD8] text-center sm:text-left">
            <span>© {new Date().getFullYear()} Jayce</span>
            <span className="opacity-40">•</span>
            <span className="opacity-70">Automate Anything</span>
          </div>

          {/* Optional footer links (hidden on mobile). Remove this block if not needed. */}
          <nav aria-label="footer" className="hidden md:flex items-center gap-6">
            <Link to="/home" className="text-[#CFCFD8] text-sm hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="text-[#CFCFD8] text-sm hover:text-white transition-colors">About</Link>
            <Link to="/testimonies" className="text-[#CFCFD8] text-sm hover:text-white transition-colors">Testimonials</Link>
            <Link to="/contact" className="text-[#CFCFD8] text-sm hover:text-white transition-colors">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;