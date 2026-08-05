import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    return scrollYProgress.on('change', (v) => setPercent(Math.round(v * 100)));
  }, [scrollYProgress]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left bg-gradient-to-r from-accent via-primary to-accent"
        style={{ scaleX }}
      />
      <div className="fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/80 backdrop-blur-md border border-glass-border font-mono text-xs text-muted">
        <span className="text-cyanBright">{percent}</span>
        <span>%</span>
      </div>
    </>
  );
}
