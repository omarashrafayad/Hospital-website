"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Zap, Stethoscope, Syringe } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ServicesPage() {
  const departments = [
    {
      title: "General Medicine",
      description: "Comprehensive preventative care and diagnostics focused on long-term health optimization and lifestyle management.",
      Icon: Stethoscope,
      href: "/services/general-medicine",
    },
    {
      title: "Advanced Surgery",
      description: "Minimally invasive procedures utilizing the latest robotic assistance for faster recovery and precise clinical outcomes.",
      Icon: Syringe,
      href: "/services/surgery",
    },
    {
      title: "Pediatrics",
      description: "Nurturing medical care for our youngest patients in a comforting environment designed to reduce clinical anxiety.",
      Icon: Heart,
      href: "/services/pediatrics",
    },
    {
      title: "Dermatology",
      description: "Expert care for skin health, combining medical dermatology with aesthetic procedures for holistic dermatological wellness.",
      Icon: Zap,
      href: "/services/dermatology",
    },
    {
      title: "Cardiology",
      description: "Advanced cardiac screening and treatment plans focused on heart health preservation and complex cardiovascular care.",
      Icon: Zap,
      href: "/services/cardiology",
    },
  ];

  return (
    <div className="flex flex-col bg-background min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center px-6 lg:px-20 bg-background overflow-hidden border-b border-border/50">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-muted-foreground/60 mb-4 block">Holistic Healthcare Sanctuary</span>
            <h1 className="text-5xl lg:text-7xl font-serif text-primary leading-tight mb-8 font-medium">
              Excellence in every <span className="italic text-accent underline decoration-1 underline-offset-8">specialty.</span>
            </h1>
            <p className="text-muted-foreground max-w-lg leading-relaxed font-medium italic">
              At The Curated Clinic, we transcend traditional medical boundaries. Our approach integrates state-of-the-art clinical expertise with a boutique hospitality mindset.
            </p>
            <div className="mt-8 flex items-center gap-4">
               <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-background"></div>
                  <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-background"></div>
                  <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-background"></div>
               </div>
               <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">Trusted by 2,500+ regular patients</p>
            </div>
          </div>
          <div className="relative h-[450px] rounded-[40px] overflow-hidden shadow-2xl border border-border/10 hidden lg:block">
            <Image 
              src="/images/services_consultation_room_1775376544620.png" 
              alt="Services Consultation" 
              fill 
              className="object-cover brightness-95" 
            />
            <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-md py-4 px-6 rounded-2xl shadow-xl flex items-center gap-4 border border-border/20">
               <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-serif font-bold text-lg text-primary">15+</div>
               <div>
                  <p className="text-[10px] uppercase font-bold text-muted-foreground/60 tracking-wider">Specialized</p>
                  <p className="text-sm font-bold text-primary">Clinical Units</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DEPARTMENTS GRID --- */}
      <section className="py-24 bg-muted/20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-border/50 pb-12 gap-6">
            <div>
              <h2 className="text-4xl font-serif text-primary mb-4 tracking-tight font-medium">Clinical Departments</h2>
              <p className="text-muted-foreground text-sm font-medium italic">Specialized care tailored to your unique biological narrative.</p>
            </div>
            <div className="flex gap-4 mb-1">
               <Badge variant="outline" className="px-5 py-2 rounded-full bg-background border-accent text-primary text-xs font-bold shadow-sm">All Departments</Badge>
               <Badge variant="ghost" className="px-5 py-2 rounded-full text-xs font-bold text-muted-foreground hover:text-primary cursor-pointer transition-colors">Surgical</Badge>
               <Badge variant="ghost" className="px-5 py-2 rounded-full text-xs font-bold text-muted-foreground hover:text-primary cursor-pointer transition-colors">Diagnostics</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, i) => (
              <ServiceCard 
                 key={i}
                 title={dept.title}
                 description={dept.description}
                 Icon={dept.Icon}
                 href={dept.href}
              />
            ))}
            
            {/* Featured Executive Wellness Card */}
            <div className="bg-primary rounded-2xl p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl transition-all duration-700 group-hover:scale-150"></div>
               <div>
                  <Zap size={32} className="text-accent mb-8" />
                  <h3 className="text-2xl font-serif text-primary-foreground mb-4 font-medium">Executive Wellness</h3>
                  <p className="text-primary-foreground/60 text-sm leading-relaxed mb-8">
                     Our flagship concierge program offering 24/7 access to specialized medical advisors and priority diagnostic scheduling.
                  </p>
               </div>
               <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-accent">Platinum Access</span>
                  <Link href="/book">
                     <Button variant="outline" className="h-auto bg-accent/10 border-accent/20 text-accent px-6 py-2.5 rounded-full text-xs font-bold hover:bg-accent hover:text-primary transition-all">
                        Apply Now
                     </Button>
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-6 lg:px-20 bg-background">
        <div className="max-w-5xl mx-auto rounded-[50px] bg-card p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border border-border/50 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
           <div className="max-w-lg relative z-10">
              <h2 className="text-4xl lg:text-5xl font-serif text-primary leading-tight mb-6 font-medium">
                 Ready to begin your <span className="italic text-accent underline underline-offset-4 decoration-1">wellness</span> journey?
              </h2>
              <p className="text-muted-foreground font-medium italic">
                 Speak with our coordinators to find the specialist that best matches your needs.
              </p>
           </div>
           <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <Link href="/book">
                <Button className="h-auto bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-bold flex items-center justify-center hover:bg-opacity-90 transition-all shadow-xl">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/doctors">
                <Button variant="outline" className="h-auto bg-background text-primary border border-border px-8 py-4 rounded-full text-sm font-bold flex items-center justify-center hover:bg-muted transition-all">
                  View All Doctors
                </Button>
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}