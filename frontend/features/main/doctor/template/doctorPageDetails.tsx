"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar as CalendarIcon, MapPin, Award, ArrowRight } from "lucide-react";
import { Heart, Zap, Stethoscope, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function DoctorDetailsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const doctor = {
    name: "Dr. Elena Vance",
    specialty: "Lead Cardiologist",
    rating: "5.0",
    experience: "15+ Years",
    consultations: "12k+",
    education: "Stanford Medical",
    bio: "Dr. Elena Vance is a board-certified cardiologist with a sub-specialty in preventative medicine. Her career has been dedicated to the belief that heart health is the cornerstone of overall longevity. At The Curated Clinic, she leads a team of specialists focusing on non-invasive diagnostic techniques and personalized lifestyle interventions. Her 'Sanctuary Approach' ensures that every patient feels seen, heard, and cared for in an environment designed for tranquility.",
    focus: [
      { title: "Preventative Cardiology", description: "Early detection and risk factor management through genomic screening and AI-driven diagnostics.", Icon: Heart },
      { title: "Echocardiography", description: "Advanced imaging to visualize heart structure and function with extreme precision.", Icon: Zap },
      { title: "Metabolic Wellness", description: "Integrating nutrition and lifestyle coaching to address underlying metabolic health issues.", Icon: Stethoscope },
      { title: "Sports Cardiology", description: "Optimizing cardiovascular performance for professional and amateur athletes.", Icon: Brain },
    ],
    imageUrl: "/images/doctor_elena_rossi_1775375011208.png",
  };

  return (
    <div className="flex flex-col bg-background min-h-screen">
      {/* --- DOCTOR HERO SECTION --- */}
      <section className="pt-24 pb-20 px-6 lg:px-20 bg-muted/30">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="relative w-full lg:w-[450px] h-[600px] rounded-[40px] overflow-hidden shadow-2xl border-4 border-background group">
            <Image 
              src={doctor.imageUrl} 
              alt={doctor.name} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <Badge className="absolute bottom-6 left-6 bg-accent/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 text-xs font-bold uppercase tracking-widest text-primary hover:bg-accent/90">
               Board Certified
            </Badge>
          </div>
          
          <div className="flex-grow">
            <Badge variant="outline" className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-accent-foreground border-accent mb-6">
               {doctor.specialty}
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-serif text-primary leading-tight mb-8 tracking-tight font-medium">
               {doctor.name}
            </h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl leading-relaxed font-medium italic decoration-accent/30 decoration-2">
               Bridging advanced cardiovascular science with a bespoke, patient-centered approach to wellness in the heart of the city.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-10 border-y border-border/50">
               <div>
                  <p className="text-[10px] uppercase font-bold text-muted-foreground/60 tracking-widest mb-2">Experience</p>
                  <p className="text-2xl font-serif text-primary">{doctor.experience}</p>
               </div>
               <div>
                  <p className="text-[10px] uppercase font-bold text-muted-foreground/60 tracking-widest mb-2">Consultations</p>
                  <p className="text-2xl font-serif text-primary">{doctor.consultations}</p>
               </div>
               <div>
                  <p className="text-[10px] uppercase font-bold text-muted-foreground/60 tracking-widest mb-2">Education</p>
                  <p className="text-2xl font-serif text-primary">{doctor.education}</p>
               </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
               <Link href="/book">
                  <Button className="h-auto bg-primary text-primary-foreground px-10 py-5 rounded-full text-sm font-bold flex items-center group shadow-xl hover:bg-opacity-90 transition-all">
                     Reserve Consultation <CalendarIcon className="ml-3" size={18} />
                  </Button>
               </Link>
               <Button variant="outline" className="h-auto bg-background border-border text-primary px-10 py-5 rounded-full text-sm font-bold hover:bg-muted transition-all">
                  View Research
               </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT (BIO + BOOKING SIDEBAR) --- */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          
          <div className="flex-grow space-y-20">
             {/* ABOUT PRACTICE */}
             <div>
                <h4 className="text-xs uppercase font-bold tracking-widest text-primary mb-8 flex items-center">
                   <Award size={14} className="mr-3 text-accent" /> About the Practice
                </h4>
                <p className="text-muted-foreground leading-relaxed text-lg font-medium max-w-3xl">
                   {doctor.bio}
                </p>
             </div>

             {/* SPECIALIZED FOCUS GRID */}
             <div>
                <h4 className="text-xs uppercase font-bold tracking-widest text-primary mb-12 flex items-center">
                   Focus Areas
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {doctor.focus.map((f, i) => (
                      <Card key={i} className="p-10 rounded-[32px] border-border/50 group hover:bg-card hover:shadow-xl transition-all duration-500 bg-muted/10">
                         <div className="mb-8 p-3 rounded-full bg-background shadow-sm border border-border w-fit">
                            <f.Icon size={24} className="text-primary group-hover:text-accent transition-colors" />
                         </div>
                         <h5 className="text-xl font-serif text-primary mb-4">{f.title}</h5>
                         <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                      </Card>
                   ))}
                </div>
             </div>
          </div>

          <aside className="w-full lg:w-[400px] flex-shrink-0 space-y-10">
             {/* AVAILABILITY WIDGET */}
             <div className="bg-primary rounded-[40px] p-10 text-primary-foreground shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
                <h4 className="text-xl font-serif mb-2">Check Availability</h4>
                <p className="text-muted-foreground/60 text-xs mb-8 italic uppercase tracking-wider font-bold">Book your next private session</p>
                
                <div className="space-y-6">
                   <div className="bg-background/10 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border-none text-white"
                        classNames={{
                          head_cell: "text-muted-foreground/60 font-bold text-[10px] uppercase tracking-widest",
                          cell: "text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
                          day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-accent/20 rounded-full transition-all",
                          day_selected: "bg-accent text-primary hover:bg-accent hover:text-primary focus:bg-accent focus:text-primary",
                          day_today: "bg-white/10 text-accent",
                          nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 text-white",
                          caption: "flex justify-center pt-1 relative items-center text-sm font-bold mb-4",
                        }}
                      />
                   </div>

                   <div>
                      <p className="text-[10px] uppercase font-bold text-muted-foreground/60 tracking-widest mb-4">Select Time Slot</p>
                      <div className="grid grid-cols-2 gap-3">
                         {["09:00 AM", "10:30 AM", "02:00 PM", "04:30 PM"].map((t, i) => (
                            <Button key={i} variant={i === 1 ? "default" : "outline"} className={`h-auto py-4 rounded-2xl text-[10px] font-bold tracking-widest transition-all ${i === 1 ? "bg-white text-primary border-white hover:bg-white/90" : "bg-transparent border-white/10 text-white hover:border-accent hover:bg-white/5"}`}>
                               {t}
                            </Button>
                         ))}
                      </div>
                   </div>

                   <Link href="/book" className="block">
                      <Button className="w-full h-auto bg-accent text-primary py-5 rounded-2xl text-xs font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-all shadow-xl mt-4">
                         Proceed to Booking <ArrowRight size={16} />
                      </Button>
                   </Link>
                   <p className="text-[8px] text-center text-muted-foreground/60 uppercase font-bold tracking-[0.2em] mt-6">
                      Secure payment & HIPAA Compliant
                   </p>
                </div>
             </div>

             {/* CLINIC LOCATION */}
             <div className="bg-muted p-8 rounded-[32px] border border-border/50 flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center shadow-sm border border-border flex-shrink-0">
                   <MapPin size={24} className="text-accent" />
                </div>
                <div>
                   <h5 className="font-bold text-primary text-sm tracking-wide">Main Clinic Branch</h5>
                   <p className="text-xs text-muted-foreground font-medium">122 Fifth Avenue, New York, NY</p>
                </div>
             </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
