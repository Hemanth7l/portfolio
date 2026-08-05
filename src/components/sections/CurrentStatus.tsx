import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code2, Rocket } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import GlassCard from '@/components/ui/GlassCard';
import type { StatusItem } from '@/types';

const iconMap = {
  graduation: GraduationCap,
  briefcase: Briefcase,
  code: Code2,
  rocket: Rocket,
};

function StatusCard({ item, index }: { item: StatusItem; index: number }) {
  const Icon = iconMap[item.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
    >
      <GlassCard tilt={false} padding="p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
            <Icon size={18} />
          </div>
          <p className="text-sm text-foreground leading-snug">{item.text}</p>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default function CurrentStatus() {
  return (
    <section id="status" className="relative py-12 -mt-8">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="font-mono text-xs text-cyanBright tracking-wider uppercase mb-4">
            Current Status
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {portfolioData.currentStatus.map((item, i) => (
              <StatusCard key={item.text} item={item} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
