import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function TestimonialsSection() {
  return (
    <section className="py-32 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
           <Quote size={40} className="mx-auto text-accent mb-6 opacity-30" />
           <h2 className="text-5xl font-serif text-primary tracking-tight font-medium">Voices of Healing</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="p-16 rounded-[40px] bg-muted/30 border border-border/50 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-500">
            <p className="text-xl font-serif italic text-primary leading-relaxed mb-10">
              “The level of attention at The Curated Clinic is unprecedented. It didn&apos;t feel like a hospital visit; it felt like a personalized wellness retreat where every detail of my health was mapped out with precision.”
            </p>
            <div className="flex items-center gap-4 pt-8 border-t border-border/30">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center font-bold text-primary italic">AV</div>
              <div>
                <h5 className="font-bold text-primary tracking-wide text-sm underline decoration-accent underline-offset-4">Alexandra Vance</h5>
                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mt-1">CEO, Innovate Corp</p>
              </div>
            </div>
          </Card>
          <Card className="p-16 rounded-[40px] bg-muted/30 border border-border/50 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-500">
            <p className="text-xl font-serif italic text-primary leading-relaxed mb-10">
              “When facing my diagnosis, I needed more than just a doctor; I needed a strategy. The collaborative approach between their oncologists and nutritionists saved my life and my quality of living.”
            </p>
            <div className="flex items-center gap-4 pt-8 border-t border-border/30">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center font-bold text-primary italic">JM</div>
              <div>
                <h5 className="font-bold text-primary tracking-wide text-sm underline decoration-accent underline-offset-4">Jonathan Miles</h5>
                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mt-1">Philanthropist</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
