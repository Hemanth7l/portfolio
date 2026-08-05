import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = portfolioData.navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActiveSection(id);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-4 py-3 sm:px-8 transition-all duration-300',
        scrolled ? 'py-3' : 'py-5'
      )}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight flex items-center gap-1 group"
        >
          <span className="text-white group-hover:text-cyan-400 transition-colors">
            {portfolioData.personal.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-950/60 border border-white/10 backdrop-blur-xl rounded-full px-4 py-1.5 shadow-lg shadow-black/40">
          {portfolioData.navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200',
                  isActive
                    ? 'text-cyan-400 bg-white/10 shadow-[0_0_15px_rgba(0,240,255,0.15)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                )}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full border border-white/10 bg-slate-950/60 backdrop-blur-xl flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-300 shadow-md"
          >
            {isDark ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Desktop Resume Button */}
          <a
            href={portfolioData.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-4 py-1.5 text-sm font-medium text-cyan-400 border border-cyan-400/40 rounded-full bg-cyan-400/10 hover:bg-cyan-400/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.15)]"
          >
            Resume
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="md:hidden w-10 h-10 rounded-full border border-white/10 bg-slate-950/60 backdrop-blur-xl flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-300"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 max-w-6xl mx-auto bg-slate-950/90 border border-white/10 backdrop-blur-2xl rounded-3xl p-5 shadow-2xl space-y-3"
          >
            <div className="grid grid-cols-2 gap-2">
              {portfolioData.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm text-slate-300 hover:text-cyan-400 hover:bg-white/5 transition-colors font-medium text-center border border-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center py-2.5 rounded-xl text-sm font-semibold text-cyan-400 border border-cyan-400/30 bg-cyan-400/10 hover:bg-cyan-400/20 transition-colors"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
