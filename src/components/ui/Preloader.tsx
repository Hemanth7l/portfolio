import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_SEQUENCE = [
  '[INITIALIZING NEURAL CORE...]',
  '[LOADING SYNAPTIC MATRIX...]',
  '[CALIBRATING SENSOR ARRAY...]',
  '[ESTABLISHING DATA LINKS...]',
  '[BOOT SEQUENCE COMPLETE]',
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  const finish = useCallback(() => {
    setVisible(false);
    setTimeout(onComplete, 600);
  }, [onComplete]);

  useEffect(() => {
    const stageInterval = setInterval(() => {
      setStage((prev) => {
        if (prev >= BOOT_SEQUENCE.length - 1) {
          clearInterval(stageInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 500);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(finish, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearInterval(stageInterval);
      clearInterval(progressInterval);
    };
  }, [finish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background/95 backdrop-blur-xl"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative mb-8">
            <div className="h-16 w-16 rounded-full border border-primary/30 animate-pulse-ring" />
            <div className="absolute inset-2 rounded-full border border-primary/60 animate-spin-slow" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-xs text-cyanBright">AI</span>
            </div>
          </div>

          <motion.p
            key={stage}
            className="font-mono text-sm text-cyanBright tracking-wider mb-6"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {BOOT_SEQUENCE[stage]}
          </motion.p>

          <div className="w-64 h-1 bg-elevated rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-accent via-primary to-accent rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <span className="font-mono text-xs text-muted mt-3">{progress}%</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
