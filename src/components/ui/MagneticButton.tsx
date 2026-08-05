import { useRef, type ReactNode, type MouseEvent } from 'react';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'ghost';
}

export default function MagneticButton({
  children,
  className,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const handleMove = (e: MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleLeave = () => {
    if (btnRef.current) btnRef.current.style.transform = 'translate(0, 0)';
  };

  const variants = {
    primary:
      'bg-primary/10 text-primary border-primary/40 hover:bg-primary/20 hover:border-primary/60 hover:shadow-[0_0_24px_rgba(0,240,255,0.2)]',
    secondary:
      'bg-surface/50 text-foreground border-border hover:bg-surface/70 hover:border-border',
    ghost: 'text-muted border-transparent hover:text-primary hover:bg-primary/10',
  };

  const classes = cn(
    'inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-xl border transition-all duration-300',
    variants[variant],
    className
  );

  if (href) {
    return (
      <a
        ref={btnRef}
        href={href}
        className={classes}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={btnRef}
      type={type}
      className={classes}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
