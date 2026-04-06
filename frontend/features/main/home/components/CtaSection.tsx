import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="px-6 pb-24 bg-background">
       <div className="max-w-7xl mx-auto rounded-[60px] bg-accent p-20 text-center flex flex-col items-center shadow-2xl border border-accent/20">
          <h2 className="text-5xl lg:text-7xl font-serif text-primary mb-10 tracking-tight max-w-4xl font-medium leading-tight">
             Ready for a medical experience tailored to you?
          </h2>
          <p className="text-primary/70 mb-12 max-w-2xl font-medium italic underline decoration-white/20 decoration-1 underline-offset-8">
             Schedule a private consultation with our intake specialists to begin your journey toward optimized health.
          </p>
          <Link href="/book">
             <Button className="h-auto bg-primary text-primary-foreground px-12 py-6 rounded-full text-sm font-bold hover:scale-105 transition-all shadow-2xl flex items-center group">
                Schedule Your Consultation <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform text-accent" size={20} />
             </Button>
          </Link>
       </div>
    </section>
  );
}
