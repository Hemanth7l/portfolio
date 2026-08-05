import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';

export default function Projects() {
  const featured = portfolioData.projects.filter((p) => p.featured);
  const others = portfolioData.projects.filter((p) => !p.featured);

  const ProjectCard = ({ project, index }: { project: (typeof portfolioData.projects)[0]; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <GlassCard className="group h-full flex flex-col overflow-hidden">
        <div className="relative overflow-hidden rounded-[2rem] mb-5 bg-card-glow h-40">
          <div className="absolute inset-0 bg-surface/20" />
          <div className="absolute left-6 top-6 rounded-full bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-primary backdrop-blur-sm">
            {project.status === 'in-progress' ? 'In Progress' : project.status === 'upcoming' ? 'Upcoming' : 'Completed'}
          </div>
        </div>

        <div className="flex items-start justify-between mb-4 gap-4">
          <div>
            <h3 className="font-heading text-xl font-semibold text-silverBright transition-colors group-hover:text-cyanBright">
              {project.title}
            </h3>
            <p className="text-xs uppercase tracking-[0.25em] text-text-secondary mt-2">Project Overview</p>
          </div>
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-2xl bg-surface/60 text-muted hover:bg-primary/10 hover:text-primary transition"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-2xl bg-surface/60 text-muted hover:bg-primary/10 hover:text-primary transition"
                aria-label="Live demo"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        <p className="text-muted text-sm leading-relaxed mb-6 flex-1">{project.description}</p>

        {(project.accuracy || project.recall) && (
          <div className="flex flex-wrap gap-3 mb-4">
            {project.accuracy && (
              <span className="px-3 py-1 text-xs font-mono bg-success/10 text-success border border-success/20 rounded-full">
                Acc {project.accuracy}%
              </span>
            )}
            {project.recall && (
              <span className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent border border-accent/20 rounded-full">
                Recall {project.recall}%
              </span>
            )}
          </div>
        )}

        <div className="mt-auto pt-4 border-t border-white/5">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 text-[0.72rem] font-medium rounded-full bg-surface/70 border border-border text-muted">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between gap-3 text-xs text-text-secondary">
            {project.stars ? (
              <span className="inline-flex items-center gap-2 text-yellow-300">
                <Star size={14} />
                {project.stars}
              </span>
            ) : (
              <span className="text-text-secondary">No ratings yet</span>
            )}
            <div className="inline-flex items-center gap-2 text-white/60">
              <span className="h-2 w-2 rounded-full bg-cyanBright" />
              Premium build
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );

  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="projects"
          title="Featured Projects"
          subtitle="Projects I'm building now and planning as I continue learning and growing."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {others.length > 0 && (
          <>
            <h3 className="font-mono text-xs text-text-secondary tracking-[0.35em] uppercase mb-6 mt-10">
              More Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
