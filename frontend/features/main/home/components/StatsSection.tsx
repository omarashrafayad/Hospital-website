import Image from "next/image";

export default function StatsSection() {
  return (
    <section className="py-32 bg-primary text-primary-foreground overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative rounded-[40px] overflow-hidden group shadow-2xl h-[500px] border border-white/10">
          <Image 
            src="/images/doctor_marcus_thorne_1775375068500.png" 
            alt="Elite Care" 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90" 
          />
          <div className="absolute bottom-10 left-10 bg-background p-8 rounded-3xl shadow-2xl border border-border/50">
            <p className="text-5xl font-serif text-primary font-bold mb-1">99.8%</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold font-sans">Patient Satisfaction Rate</p>
          </div>
        </div>
        <div>
          <h2 className="text-5xl font-serif mb-12 tracking-tight leading-tight font-medium">Elevating the Standard of Private Healthcare</h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0 text-sm font-bold italic text-accent">01</div>
              <div>
                <h4 className="text-xl font-bold mb-3 tracking-wide flex items-center gap-3">Unrivaled Expertise</h4>
                <p className="text-muted-foreground/80 leading-relaxed text-sm max-w-sm">Access to world-renowned clinicians and the latest medical breakthroughs before they reach general hospitals.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0 text-sm font-bold italic text-accent">02</div>
              <div>
                <h4 className="text-xl font-bold mb-3 tracking-wide flex items-center gap-3">Technological Innovation</h4>
                <p className="text-muted-foreground/80 leading-relaxed text-sm max-w-sm">State-of-the-art diagnostic suites offering AI-assisted imaging and genomic sequencing for ultra-precise care.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0 text-sm font-bold italic text-accent">03</div>
              <div>
                <h4 className="text-xl font-bold mb-3 tracking-wide flex items-center gap-3">Absolute Privacy</h4>
                <p className="text-muted-foreground/80 leading-relaxed text-sm max-w-sm">Discreet concierge service with private recovery suites designed for tranquility and total confidentiality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
