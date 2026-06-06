import { createFileRoute } from "@tanstack/react-router";
import { Search, User, UserPlus, Phone, Globe, Mail, MapPin } from "lucide-react";
import contactImg from "@/assets/cat-automation.jpg";

export const Route = createFileRoute("/contact-us")({
  component: ContactUsPage,
});

function ContactUsPage() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <header className="sticky top-0 z-50">
        <div className="bg-charcoal-deep text-white/80">
          <div className="mx-auto flex h-9 max-w-[1600px] items-center justify-between px-6 font-mono text-[11px] uppercase tracking-[0.18em]">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2"><Globe className="h-3 w-3 text-accent" /> UK · EN-GB · GBP</span>
              <span className="hidden md:flex items-center gap-2 text-white/50"><Phone className="h-3 w-3" /> +44 (0)161 818 7420</span>
            </div>
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-1.5 text-white/70 transition-colors hover:text-accent">
                <User className="h-3 w-3" /> Sign In
              </button>
              <span className="h-3 w-px bg-white/15" />
              <button className="flex items-center gap-1.5 text-white/70 transition-colors hover:text-accent">
                <UserPlus className="h-3 w-3" /> Register
              </button>
            </div>
          </div>
        </div>
        <div className="border-b border-rule bg-charcoal">
          <div className="mx-auto grid h-20 max-w-[1600px] grid-cols-12 items-center gap-6 px-6">
            <a href="/" className="col-span-3 flex items-center gap-3">
              <div className="relative h-9 w-9">
                <div className="absolute inset-0 rotate-45 border-2 border-accent" />
                <div className="absolute inset-[6px] rotate-45 bg-accent" />
              </div>
              <div className="leading-none">
                <div className="font-display text-[17px] font-bold tracking-tight text-white uppercase">
                  SPARES<span className="text-accent">.</span>AUTOMATION
                </div>
                <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.28em] text-white/45">
                  Industrial Procurement Platform
                </div>
              </div>
            </a>
            <div className="col-span-9">
              <label className="group flex h-12 items-center gap-3 border border-white/10 bg-white/[0.04] pl-4 pr-1 transition-colors focus-within:border-accent">
                <Search className="h-4 w-4 text-white/50" />
                <input type="text" placeholder="Contact Procurement Desk..." className="flex-1 bg-transparent font-mono text-[13px] tracking-wide text-white placeholder:text-white/40 focus:outline-none" />
                <button className="flex h-10 items-center gap-2 bg-accent px-6 font-mono text-[11px] uppercase tracking-[0.22em] text-accent-foreground transition-colors hover:bg-accent/90">Search</button>
              </label>
            </div>
          </div>
        </div>
      </header>

      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-end">
        <img src={contactImg} alt="Contact Us" className="absolute inset-0 h-full w-full object-cover scale-105 blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/60 to-transparent" />
        <div className="relative mx-auto w-full max-w-[1600px] px-10 pb-20">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-white/60 mb-6">
            <span className="h-px w-8 bg-accent" />
            Support / Manchester / UK HQ
          </div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.9] tracking-[-0.03em] text-white uppercase">
            GET IN<br /><span className="text-accent">TOUCH</span> WITH US
          </h1>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-[1600px] px-6">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="border border-rule p-10 bg-background">
                 <Phone className="h-6 w-6 text-accent mb-6" />
                 <h3 className="font-display text-xl font-bold uppercase tracking-tight">Technical Sales</h3>
                 <p className="mt-4 text-ink-muted text-sm">+44 (0)161 818 7420</p>
                 <p className="mt-2 text-ink-muted text-sm italic">Mon–Fri 07:30–18:00 GMT</p>
              </div>
              <div className="border border-rule p-10 bg-background">
                 <Mail className="h-6 w-6 text-accent mb-6" />
                 <h3 className="font-display text-xl font-bold uppercase tracking-tight">Email Enquiries</h3>
                 <p className="mt-4 text-ink-muted text-sm">trade@spares-automation.co.uk</p>
                 <p className="mt-2 text-ink-muted text-sm italic">24h Response Guarantee</p>
              </div>
              <div className="border border-rule p-10 bg-background">
                 <MapPin className="h-6 w-6 text-accent mb-6" />
                 <h3 className="font-display text-xl font-bold uppercase tracking-tight">Manchester HQ</h3>
                 <p className="mt-4 text-ink-muted text-sm">Trafford Park Trade Centre</p>
                 <p className="mt-2 text-ink-muted text-sm">Manchester, M17 1RU, UK</p>
              </div>
           </div>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-charcoal-deep text-white/70">
        <div className="mx-auto max-w-[1600px] px-6 py-20 text-center">
           <a href="/" className="text-accent font-mono text-[11px] uppercase tracking-widest hover:underline">Return to Overview</a>
        </div>
      </footer>
    </div>
  );
}
