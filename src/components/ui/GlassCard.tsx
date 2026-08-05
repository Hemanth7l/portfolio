import { useRef, type ReactNode, type MouseEvent } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
  padding?: string;
}

export default function GlassCard({
  children,
  className,
  tilt = true,
  padding = 'p-6',
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!tilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -12;
    const rotateY = (x - 0.5) * 12;

    cardRef.current.style.setProperty('--mx', `${x * 100}%`);
    cardRef.current.style.setProperty('--my', `${y * 100}%`);
    cardRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };

  return (
    <div
      ref={cardRef}
      className={cn('glass-card group', padding, className)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        backgroundImage:
          'radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(0,240,255,0.06) 0%, transparent 60%)',
      }}
    >
      <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-cyanBright/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-cyanBright/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      {children}
    </div>
  );
}
