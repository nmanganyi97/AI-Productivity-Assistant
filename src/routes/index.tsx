import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Mail,
  Calendar,
  Brain,
  Sparkles,
  Clock,
  TrendingUp,
  Zap,
  Award,
  Check,
  ArrowRight,
  Play,
  Github,
} from "lucide-react";
import heroImg from "@/assets/hero-ai.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Features />
      <Benefits />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <div
            className="h-8 w-8 rounded-lg grid place-items-center text-white"
            style={{ background: "var(--gradient-hero)" }}
          >
            <Sparkles className="h-4 w-4" />
          </div>
          <span>Workplace AI</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#benefits" className="hover:text-foreground transition-colors">Benefits</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:inline text-sm text-muted-foreground hover:text-foreground transition-colors">Sign in</a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
            style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-elegant)" }}
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1 text-xs text-muted-foreground mb-6">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Powered by advanced AI
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Work Smarter
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-hero)" }}
            >
              with AI
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Automate emails, organize tasks, and research anything in seconds using one intelligent workplace assistant.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
              style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-elegant)" }}
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold border border-border bg-card hover:bg-secondary transition-colors"
            >
              <Play className="h-4 w-4" /> Watch Demo
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div><span className="text-foreground font-semibold">10k+</span> professionals</div>
            <div className="h-4 w-px bg-border" />
            <div><span className="text-foreground font-semibold">4.9/5</span> rating</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-3xl overflow-hidden border border-border"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            <img
              src={heroImg}
              alt="AI productivity workspace illustration"
              width={1280}
              height={1024}
              className="w-full h-auto"
            />
          </motion.div>
          <div
            aria-hidden
            className="absolute -inset-8 -z-10 blur-3xl opacity-40"
            style={{ background: "var(--gradient-hero)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Mail,
    title: "Smart Email Generator",
    desc: "Generate professional emails instantly — pick a tone, length, and purpose and let AI draft it for you.",
  },
  {
    icon: Calendar,
    title: "AI Task Planner",
    desc: "Turn ideas into organized task lists with priorities, deadlines, and daily schedules.",
  },
  {
    icon: Brain,
    title: "AI Research Assistant",
    desc: "Summarize articles, reports, documents and websites into clear, actionable insights.",
  },
];

function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Features"
          title="Everything you need to move faster"
          subtitle="Three focused modules replacing a dozen scattered tools."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div
                className="h-12 w-12 rounded-xl grid place-items-center text-white mb-6"
                style={{ background: "var(--gradient-hero)" }}
              >
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const benefits = [
  { icon: Clock, title: "Save Hours Every Week", desc: "Reclaim 5+ hours weekly on routine writing and planning." },
  { icon: TrendingUp, title: "Increase Productivity", desc: "Ship more with a workflow tuned for deep work." },
  { icon: Zap, title: "AI Powered Automation", desc: "Automate repetitive drafts and research end-to-end." },
  { icon: Award, title: "Professional Outputs", desc: "Polished, on-brand results ready to send." },
];

function Benefits() {
  return (
    <section id="benefits" className="py-24 border-y border-border" style={{ background: "var(--gradient-subtle)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Benefits"
          title="Built for professionals who ship"
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="h-10 w-10 rounded-lg grid place-items-center bg-primary/10 text-primary mb-4">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    desc: "For trying things out.",
    features: ["50 AI generations / mo", "Email generator", "Basic task planner", "Community support"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Professional",
    price: "$19",
    period: "/mo",
    desc: "For daily power users.",
    features: ["Unlimited generations", "All 3 AI modules", "History & templates", "Priority support", "Dark mode"],
    cta: "Start 14-day trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For teams & organizations.",
    features: ["Team workspaces", "SSO & SAML", "Admin controls", "Dedicated support", "Custom integrations"],
    cta: "Contact sales",
    featured: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Pricing"
          title="Simple pricing that scales with you"
          subtitle="Start free. Upgrade when you're ready."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border p-8 ${
                t.featured
                  ? "border-transparent text-white"
                  : "border-border bg-card"
              }`}
              style={
                t.featured
                  ? { background: "var(--gradient-hero)", boxShadow: "var(--shadow-elegant)" }
                  : { boxShadow: "var(--shadow-card)" }
              }
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-background text-foreground text-xs font-semibold px-3 py-1 border border-border">
                  Most popular
                </div>
              )}
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className={`mt-1 text-sm ${t.featured ? "text-white/80" : "text-muted-foreground"}`}>{t.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tight">{t.price}</span>
                <span className={t.featured ? "text-white/70" : "text-muted-foreground"}>{t.period}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${t.featured ? "text-white" : "text-primary"}`} />
                    <span className={t.featured ? "text-white/90" : ""}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                  t.featured
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-foreground text-background hover:opacity-90"
                }`}
              >
                {t.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div
          className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center text-white"
          style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-elegant)" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to work smarter?</h2>
          <p className="mt-4 text-white/85 max-w-2xl mx-auto">
            Join thousands of professionals using AI to save time and produce better work.
          </p>
          <a
            href="#pricing"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            Get Started Free <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div
            className="h-6 w-6 rounded-md grid place-items-center text-white"
            style={{ background: "var(--gradient-hero)" }}
          >
            <Sparkles className="h-3 w-3" />
          </div>
          © {new Date().getFullYear()} Workplace AI. All rights reserved.
        </div>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          <a href="#" className="hover:text-foreground transition-colors inline-flex items-center gap-1">
            <Github className="h-4 w-4" /> GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="inline-flex items-center rounded-full border border-border bg-card/60 px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground">
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
    </div>
  );
}
