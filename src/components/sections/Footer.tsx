import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function Footer() {
  const { personal, socialLinks } = portfolioData;
  const year = new Date().getFullYear();

  const iconMap: Record<string, typeof Github> = {
    github: Github,
    linkedin: Linkedin,
    mail: Mail,
  };

  return (
    <footer className="relative border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading font-bold text-silverBright">
              {personal.name}
              <span className="text-cyanBright">.dev</span>
            </p>
            <p className="text-xs text-muted mt-1 font-mono">{personal.title}</p>
            <p className="text-xs text-muted mt-2 italic max-w-xs">
              &ldquo;{personal.motto}&rdquo;
            </p>
          </div>

          <div className="flex gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon] || Mail;
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label={link.platform}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          <p className="text-xs text-muted flex items-center gap-1">
            Built with <Heart size={12} className="text-red-400" /> · {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
