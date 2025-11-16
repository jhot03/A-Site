import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#111118] border-t border-white/5 z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <span className="text-[#CFCFD8] text-sm">© {new Date().getFullYear()} Jayce </span>
          <span className="text-[#CFCFD8] text-sm opacity-40">•</span>
          <span className="text-[#CFCFD8] text-sm opacity-60">Automate Anything</span>
        </div>

        <nav aria-label="footer" className="flex items-center space-x-6">
          <Link to="/home" className="text-[#CFCFD8] text-sm hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="text-[#CFCFD8] text-sm hover:text-white transition-colors">About</Link>
          <Link to="/testimonies" className="text-[#CFCFD8] text-sm hover:text-white transition-colors">Testimonials</Link>
          <Link to="/contact" className="text-[#CFCFD8] text-sm hover:text-white transition-colors">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;