import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import MagneticButton from '@/components/ui/MagneticButton';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const { contact } = portfolioData;
  const [status, setStatus] = useState<FormStatus>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    await new Promise((r) => setTimeout(r, 1500));

    if (form.name && form.email && form.message) {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const statusConfig = {
    idle: null,
    sending: { icon: Loader2, text: 'Transmitting...', color: 'text-cyanBright', spin: true },
    success: { icon: CheckCircle, text: 'Message sent successfully!', color: 'text-green-400', spin: false },
    error: { icon: AlertCircle, text: 'Please fill all fields.', color: 'text-red-400', spin: false },
  };

  const feedback = statusConfig[status];

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(0,240,255,0.12),transparent_45%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="contact"
          title="Get In Touch"
          subtitle={contact.availability}
          align="center"
        />

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-textMuted uppercase tracking-[0.3em] mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-3xl border border-white/10 bg-[rgba(8,10,18,0.88)] px-4 py-4 text-silverBright placeholder:text-textMuted focus:outline-none focus:border-cyanBright/40 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-textMuted uppercase tracking-[0.3em] mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-3xl border border-white/10 bg-[rgba(8,10,18,0.88)] px-4 py-4 text-silverBright placeholder:text-textMuted focus:outline-none focus:border-cyanBright/40 transition-all duration-300"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-textMuted uppercase tracking-[0.3em] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-3xl border border-border bg-glass px-4 py-4 text-foreground placeholder:text-text-muted focus:outline-none focus:border-primary/40 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {feedback && (
                  <motion.div
                    className={`flex items-center gap-2 text-sm ${feedback.color}`}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <feedback.icon size={16} className={feedback.spin ? 'animate-spin' : ''} />
                    {feedback.text}
                  </motion.div>
                )}

                <MagneticButton type="submit" variant="primary" className="w-full justify-center">
                  <Send size={16} />
                  Send Message
                </MagneticButton>
              </form>
            </GlassCard>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <GlassCard tilt={false} padding="p-6" className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <div>
                  <p className="text-xs text-textMuted font-mono uppercase tracking-[0.3em]">Email</p>
                  <a href={`mailto:${contact.email}`} className="text-sm text-silverBright hover:text-cyanBright transition-colors">
                    {contact.email}
                  </a>
                </div>
              </div>
            </GlassCard>

            {contact.phone && (
              <GlassCard tilt={false} padding="p-6" className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary" />
                  <div>
                    <p className="text-xs text-textMuted font-mono uppercase tracking-[0.3em]">Phone</p>
                    <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-sm text-silverBright hover:text-cyanBright transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                </div>
              </GlassCard>
            )}

            <GlassCard tilt={false} padding="p-6" className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-cyanBright" />
                <div>
                  <p className="text-xs text-textMuted font-mono uppercase tracking-[0.3em]">Location</p>
                  <p className="text-sm text-silverBright">{contact.location}</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard tilt={false} padding="p-6" className="space-y-4">
              <p className="text-xs text-textMuted font-mono uppercase tracking-[0.3em] mb-2">Status</p>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                <span className="text-sm text-success">{contact.availability}</span>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
