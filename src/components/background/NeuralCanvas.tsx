import { useEffect, useRef, useCallback } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulse: number;
  pulseSpeed: number;
}

interface Pulse {
  from: number;
  to: number;
  progress: number;
  speed: number;
}

const NODE_COUNT = 85;
const CONNECTION_DIST = 160;
const MOUSE_RADIUS = 180;

export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const pulsesRef = useRef<Pulse[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animRef = useRef<number>(0);

  const initNodes = useCallback((w: number, h: number) => {
    nodesRef.current = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2.2 + 1,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.03,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
      if (nodesRef.current.length === 0) {
        initNodes(w, h);
      }
    };

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const nodes = nodesRef.current;
      const mouse = mouseRef.current;

      // Update node positions and handle boundary & mouse repelling
      for (const node of nodes) {
        node.pulse += node.pulseSpeed;
        node.x += node.vx;
        node.y += node.vy;

        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          node.vx -= (dx / dist) * force * 0.15;
          node.vy -= (dy / dist) * force * 0.15;
        }

        node.vx *= 0.99;
        node.vy *= 0.99;

        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
        node.x = Math.max(0, Math.min(w, node.x));
        node.y = Math.max(0, Math.min(h, node.y));
      }

      // Draw neural connections between close nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.32;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();

            // Spawn traveling electrical pulses along neural lines
            if (Math.random() < 0.0018) {
              pulsesRef.current.push({
                from: i,
                to: j,
                progress: 0,
                speed: 0.015 + Math.random() * 0.02,
              });
            }
          }
        }
      }

      // Render traveling pulse signals
      pulsesRef.current = pulsesRef.current.filter((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) return false;

        const from = nodes[p.from];
        const to = nodes[p.to];
        if (!from || !to) return false;

        const px = from.x + (to.x - from.x) * p.progress;
        const py = from.y + (to.y - from.y) * p.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${1 - p.progress})`;
        ctx.shadowColor = '#00F0FF';
        ctx.shadowBlur = 8;
        ctx.fill();
        return true;
      });

      ctx.shadowBlur = 0;

      // Draw neural nodes
      for (const node of nodes) {
        const glow = 0.5 + Math.sin(node.pulse) * 0.35;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${glow})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, [initNodes]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Soft cyan & purple radial gradient lighting in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[550px] h-[550px] rounded-full bg-purple-600/10 blur-[140px] pointer-events-none" />

      {/* Interactive Neural Canvas */}
      <canvas ref={canvasRef} className="block w-full h-full opacity-70" />
    </div>
  );
}
