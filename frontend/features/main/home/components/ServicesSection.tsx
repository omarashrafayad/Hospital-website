import Link from "next/link";
import { Heart, Brain, Zap, Stethoscope, ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  return (
    <section className="py-32 px-6 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl lg:text-6xl font-serif text-primary mb-8 tracking-tight font-medium">Our Services</h2>
            <p className="text-muted-foreground font-medium leading-relaxed italic decoration-accent decoration-1 underline-offset-4">
              Specialized care tailored to your unique biological profile and lifestyle needs. We provide comprehensive medical solutions across elite clinical departments.
            </p>
          </div>
          <Link href="/services" className="text-sm font-bold flex items-center hover:translate-x-1 transition-transform border-b-2 border-accent pb-1 text-primary">
            Explore All Departments <ArrowRight className="ml-2 text-accent" size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Cardiology"
            description="Advanced cardiovascular diagnostic imaging and precision treatment plans for heart health longevity."
            Icon={Heart}
            href="/services#cardiology"
          />
          <div className="lg:col-span-1 border border-border/50 rounded-2xl p-1 relative overflow-hidden hidden lg:block bg-muted/10">
             <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <Zap size={100} className="text-primary" />
             </div>
             <div className="h-full w-full bg-transparent flex items-center justify-center p-12">
                <svg className="w-full h-24 stroke-accent/40 stroke-2 fill-none" viewBox="0 0 100 24">
                   <path d="M0 12 L10 12 L15 2 L25 22 L30 12 L100 12" />
                </svg>
             </div>
          </div>
          <ServiceCard
            title="Oncology"
            description="Integrated cancer care focusing on genomic sequencing and immunotherapy breakthroughs."
            Icon={Zap}
            href="/services#oncology"
            variant="dark"
          />
          <ServiceCard
            title="Neurology"
            description="Brain health optimization through advanced neuroimaging and personalized therapy."
            Icon={Brain}
            href="/services#neurology"
          />
          <ServiceCard
            title="Internal Medicine"
            description="Holistic health management providing a foundation for your total wellness journey."
            Icon={Stethoscope}
            href="/services#internal"
          />
          <div className="bg-accent/40 rounded-2xl p-10 flex flex-col justify-center border border-accent/20">
             <h3 className="text-2xl font-serif text-primary mb-4 font-medium">View More</h3>
             <p className="text-sm text-primary/70 mb-8 font-medium">Discover our 24+ specialized units.</p>
             <Link href="/services">
                <Button size="icon" className="w-12 h-12 rounded-full bg-background text-primary flex items-center justify-center shadow-md hover:scale-110 transition-all">
                   <ArrowRight size={20} />
                </Button>
             </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
