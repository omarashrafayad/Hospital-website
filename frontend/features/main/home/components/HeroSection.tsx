import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 lg:px-20 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-20">
        <div className="z-10">
          <span className="inline-block bg-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-accent-foreground mb-8">
            Elite Private Healthcare
          </span>
          <h1 className="text-6xl lg:text-8xl font-serif leading-[1.05] tracking-tight text-primary mb-8 font-medium">
            The Future of Care, <span className="italic text-accent underline decoration-1 underline-offset-8">Curated</span> for You
          </h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-lg leading-relaxed font-medium">
            Experience a new standard of personalized medicine. We combine elite medical expertise with a boutique approach to your wellbeing.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link href="/book">
              <Button className="h-auto bg-primary text-primary-foreground px-10 py-5 rounded-full text-sm font-bold hover:scale-[1.02] transition-all shadow-xl flex items-center group">
                Book Appointment <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="h-auto bg-background border-border text-primary px-10 py-5 rounded-full text-sm font-bold hover:bg-muted transition-all">
                View Services
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="relative h-[650px] lg:h-[800px] w-full rounded-[40px] overflow-hidden shadow-2xl border-2 border-background">
          <Image
            src="/images/clinic_hero_chair_1775374963631.png"
            alt="The Curated Clinic Interior"
            fill
            className="object-cover"
            priority
          />
          {/* Soft decorative elements */}
          <div className="absolute top-10 right-10 bg-background/90 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-border/50 max-w-[200px]">
             <div className="flex -space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full border-2 border-background bg-slate-200"></div>
                <div className="w-10 h-10 rounded-full border-2 border-background bg-slate-300"></div>
                <div className="w-10 h-10 rounded-full border-2 border-background bg-slate-400"></div>
             </div>
             <p className="text-[10px] uppercase font-bold text-muted-foreground/60 tracking-wider mb-1">Trusted partners</p>
             <p className="text-sm font-serif font-bold text-primary">2,500+ regular patients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
