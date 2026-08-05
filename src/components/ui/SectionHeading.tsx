import { motion } from 'framer-motion';

interface SectionHeadingProps {
  tag: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="inline-block font-mono text-xs text-primary tracking-[0.2em] uppercase mb-3">
        // {tag}
      </span>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted max-w-2xl leading-relaxed">{subtitle}</p>
      )}
      <div className={`section-divider mt-6 ${align === 'center' ? 'mx-auto max-w-xs' : ''}`} />
    </motion.div>
  );
}
