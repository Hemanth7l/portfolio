import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, FileText, Send } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

// Custom X / Twitter SVG Icon for clean rendering
function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Hero() {
  const { personal, socialLinks } = portfolioData;

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case 'github':
        return <Github size={18} />;
      case 'linkedin':
        return <Linkedin size={18} />;
      case 'twitter':
        return <XIcon size={16} />;
      case 'mail':
        return <Mail size={18} />;
      default:
        return <Mail size={18} />;
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between items-center px-4 pt-28 pb-10 text-center z-10 overflow-hidden"
    >
      {/* Glow background accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-gradient-to-r from-cyan-500/15 to-purple-600/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Spacer for top centering balance */}
      <div className="w-full h-2" />

      {/* Main Content Area - Center Aligned */}
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center space-y-7 my-auto">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight"
        >
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,240,255,0.35)]">
            Hemanth
          </span>{' '}
          B
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="text-cyan-400 font-mono text-base sm:text-xl lg:text-2xl font-medium tracking-wide flex items-center justify-center gap-2 flex-wrap"
        >
          <span>AI & Data Science Student</span>
          <span className="text-purple-400 font-bold mx-1">|</span>
          <span>Data Analytics Intern</span>
          <span className="inline-block w-0.5 h-6 bg-cyan-400 animate-pulse ml-0.5" />
        </motion.div>

        {/* Short Professional Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="max-w-2xl text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal"
        >
          Passionate about Artificial Intelligence, Data Science, and Software Development. I build modern solutions using technology, creativity, and continuous learning.
        </motion.p>

        {/* Action Buttons Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-col items-center gap-4 w-full pt-2"
        >
          {/* Top Two Premium Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
            {/* Button 1: View Projects */}
            <a
              href="#projects"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-bold text-sm sm:text-base shadow-[0_0_30px_rgba(0,240,255,0.35)] hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <span>View Projects</span>
              <ArrowUpRight size={18} className="text-slate-950" />
            </a>

            {/* Button 2: Download Resume */}
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl border border-white/20 bg-slate-900/60 hover:bg-white/10 hover:border-cyan-400/50 text-slate-200 hover:text-cyan-300 font-semibold text-sm sm:text-base backdrop-blur-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer inline-flex items-center justify-center gap-2 shadow-lg"
            >
              <FileText size={18} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Third Smaller Button: Contact Me */}
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-xl border border-white/15 bg-slate-950/40 hover:bg-cyan-500/10 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-400 font-medium text-xs sm:text-sm backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer inline-flex items-center justify-center gap-2 shadow-sm mt-1"
          >
            <Send size={14} />
            <span>Contact Me</span>
          </a>
        </motion.div>
      </div>

      {/* Social Icons at Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
        className="flex items-center justify-center gap-3 pt-6 pb-2 z-20"
      >
        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.platform}
            className="w-11 h-11 rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur-xl text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 flex items-center justify-center"
          >
            {getSocialIcon(link.icon)}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
