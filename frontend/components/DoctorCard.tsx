import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DoctorCardProps {
  id: string;
  name: string;
  specialty: string;
  description: string;
  imageUrl: string;
}

export default function DoctorCard({ id, name, specialty, description, imageUrl }: DoctorCardProps) {
  return (
    <Card className="rounded-[40px] overflow-hidden border-border/50 shadow-sm transition-all duration-500 hover:shadow-2xl group bg-card">
      <CardContent className="p-0">
        <div className="relative h-[480px] overflow-hidden">
          <Image 
            src={imageUrl} 
            alt={name} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
             <Link href={`/doctors/${id}`} className="w-full">
                <Button className="w-full h-auto py-5 rounded-2xl bg-white text-primary hover:bg-accent hover:text-white transition-all font-bold text-xs uppercase tracking-widest gap-3 shadow-2xl">
                   View Full Profile <ArrowRight size={16} />
                </Button>
             </Link>
          </div>
        </div>
        <div className="p-10">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-2">{specialty}</h4>
          <h3 className="text-3xl font-serif text-primary mb-6 transition-colors group-hover:text-accent font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-10 line-clamp-3">
            {description}
          </p>
          <div className="pt-8 border-t border-border/50 flex items-center justify-between">
            <Link href={`/doctors/${id}`} className="text-xs font-bold uppercase tracking-widest text-primary hover:translate-x-1 transition-transform flex items-center group/link">
              Read Bio <ArrowRight size={14} className="ml-1.5 text-accent group-hover/link:translate-x-1 transition-transform" />
            </Link>
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
