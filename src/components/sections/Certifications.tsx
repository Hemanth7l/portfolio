import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="certifications"
          title="Credentials"
          subtitle="Certificates from internships, workshops, and academic programs."
        />

        <div className="grid sm:grid-cols-2 gap-4">
          {portfolioData.certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <GlassCard tilt={false} padding="p-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Award size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-foreground leading-snug">{cert.name}</h3>
                    <p className="text-xs text-muted mt-1">{cert.issuer}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-mono text-xs text-primary">{cert.date}</span>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted hover:text-primary transition-colors"
                          aria-label="View credential"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
