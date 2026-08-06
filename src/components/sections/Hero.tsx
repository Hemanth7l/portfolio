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
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-28 pb-12 z-10 overflow-hidden"
    >
      {/* AI-Inspired Minimal Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-cyan-500/15 via-purple-600/10 to-blue-500/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-400/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Grid Container: Desktop 2-column, Mobile Stacked */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center my-auto z-10">
        
        {/* Text & Content Area - Mobile: Displayed FIRST | Desktop: Left Aligned (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-7">
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,240,255,0.35)]">
              Hemanth
            </span>{' '}
            B
          </h1>

          {/* Subtitle / Role Tag */}
          <div className="text-cyan-400 font-mono text-base sm:text-xl lg:text-2xl font-medium tracking-wide flex items-center justify-center lg:justify-start gap-2 flex-wrap">
            <span>AI & Data Science Student</span>
            <span className="text-purple-400 font-bold mx-1">|</span>
            <span>Data Analytics Intern</span>
            <span className="inline-block w-0.5 h-6 bg-cyan-400 animate-pulse ml-0.5" />
          </div>

          {/* Bio Description */}
          <p className="max-w-2xl text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            Passionate about Artificial Intelligence, Data Science, and Software Development. I build modern solutions using technology, creativity, and continuous learning.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col items-center lg:items-start gap-4 w-full pt-1">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full max-w-md lg:max-w-none">
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

            {/* Third Button: Contact Me */}
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-xl border border-white/15 bg-slate-950/40 hover:bg-cyan-500/10 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-400 font-medium text-xs sm:text-sm backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer inline-flex items-center justify-center gap-2 shadow-sm mt-1"
            >
              <Send size={14} />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center lg:justify-start gap-3 pt-4 z-20">
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
          </div>
        </div>

        {/* Profile Photo Area - Mobile: Displayed SECOND below introduction | Desktop: Displayed on right (5 cols) */}
        <div className="lg:col-span-5 flex justify-center items-center">
          {/* Outer floating wrapper with gentle floating animation */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative group flex items-center justify-center p-1"
          >
            {/* Soft Ambient Glow Behind Photo */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-cyan-500/25 via-purple-500/25 to-blue-500/25 blur-lg group-hover:blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

            {/* Rotating Glowing Gradient Ring (Cyan -> Purple -> Blue) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
             className="absolute inset-[1px] rounded-full bg-[conic-gradient(from_0deg,#00F0FF,#9B75FF,#5DD0FF,#00F0FF)] opacity-60 blur-[0.5px] transition-opacity duration-300 pointer-events-none"
            />

            {/* Glassmorphism Outer Card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 p-px rounded-full bg-slate-950/70 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] group-hover:border-cyan-400/50 group-hover:shadow-[0_0_28px_rgba(0,240,255,0.22)] transition-all duration-300"
            >
              {/* Profile Image */}
              <img
                src="/profile.jpg"
                alt="Hemanth B - AI & Data Science Engineer"
                loading="lazy"
                className="w-full h-full object-cover rounded-full shadow-inner transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}


