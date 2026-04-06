"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Star, Clock, Filter, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const doctors = [
  {
    id: "julian-vane",
    name: "Dr. Julian Vane",
    specialty: "Chief of Cardiology",
    rating: "4.9",
    experience: "15+ Yrs Exp",
    availability: "Available Tomorrow",
    imageUrl: "/images/doctor_marcus_thorne_1775375068500.png",
  },
  {
    id: "elena-thorne",
    name: "Dr. Elena Thorne",
    specialty: "Lead Neurologist",
    rating: "5.0",
    experience: "12+ Yrs Exp",
    availability: "Available Today",
    imageUrl: "/images/doctor_elena_rossi_1775375011208.png",
  },
  {
    id: "marcus-sterling",
    name: "Dr. Marcus Sterling",
    specialty: "Dermatology Specialist",
    rating: "4.8",
    experience: "10+ Yrs Exp",
    availability: "Available Today",
    imageUrl: "/images/doctor_marcus_thorne_1775375068500.png",
  },
  {
    id: "sarah-chen",
    name: "Dr. Sarah Chen",
    specialty: "Pediatric Consultant",
    rating: "4.9",
    experience: "8+ Yrs Exp",
    availability: "Available Today",
    imageUrl: "/images/doctor_sarah_jenkins_1775375083797.png",
  },
];

export default function DoctorListingPage() {
  return (
    <div className="flex flex-col bg-background min-h-screen">
      {/* --- HERO / SEARCH SECTION --- */}
      <section className="pt-16 pb-12 px-6 lg:px-20 border-b border-border/50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-serif text-primary mb-6 tracking-tight">
            Our Distinguished <span className="italic text-accent-foreground underline underline-offset-8 decoration-1">Specialists</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl font-medium leading-relaxed mb-10 text-sm">
            Experience world-class healthcare delivered by leaders in medicine. Our practitioners are selected for their clinical excellence and empathetic approach.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-3xl">
             <div className="flex-grow bg-muted/30 rounded-2xl p-1 px-5 flex items-center border border-border">
                <Search size={18} className="text-muted-foreground mr-3" />
                <Input 
                  type="text" 
                  placeholder="Search by name, specialty or condition..." 
                  className="bg-transparent border-none outline-none py-4 w-full text-sm font-medium text-primary placeholder-muted-foreground shadow-none focus-visible:ring-0"
                />
             </div>
             <Button className="bg-primary text-primary-foreground px-8 py-7 rounded-2xl text-sm font-bold shadow-lg hover:bg-opacity-90 flex items-center justify-center h-auto">
                Search Providers
             </Button>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION (SIDEBAR + GRID) --- */}
      <section className="flex-grow py-12 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* SIDEBAR FILTERS */}
          <aside className="w-full lg:w-64 flex-shrink-0 space-y-10">
             <div>
                <Label className="text-xs uppercase font-bold tracking-widest text-primary mb-6 flex items-center">
                   <Filter size={14} className="mr-2" /> By Specialty
                </Label>
                <div className="space-y-4">
                   {["Cardiology", "Neurology", "Dermatology", "Pediatrics"].map((spec, i) => (
                      <div key={i} className="flex items-center space-x-3 group cursor-pointer">
                         <Checkbox id={`spec-${i}`} className="border-border data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground" />
                         <Label htmlFor={`spec-${i}`} className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors cursor-pointer">{spec}</Label>
                      </div>
                   ))}
                </div>
             </div>

             <div>
                <Label className="text-xs uppercase font-bold tracking-widest text-primary mb-6 block">Patient Rating</Label>
                <div className="space-y-4">
                   {["4.5+ Rating", "4.0+ Rating"].map((rate, i) => (
                      <div key={i} className="flex items-center space-x-3 group cursor-pointer">
                         <input type="radio" name="rating" id={`rate-${i}`} className="w-4 h-4 border-border text-accent focus:ring-accent" />
                         <Label htmlFor={`rate-${i}`} className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors uppercase tracking-widest text-[10px] font-bold cursor-pointer">{rate}</Label>
                      </div>
                   ))}
                </div>
             </div>

             <div>
                <Label className="text-xs uppercase font-bold tracking-widest text-primary mb-6 block">Availability</Label>
                <div className="bg-muted/50 p-4 rounded-2xl flex items-center justify-between border border-border">
                   <span className="text-xs font-bold text-primary italic">Available Today</span>
                   <div className="w-10 h-5 bg-accent/30 rounded-full relative p-1 cursor-pointer">
                      <div className="w-3 h-3 bg-accent rounded-full absolute right-1"></div>
                   </div>
                </div>
             </div>
          </aside>

          {/* DOCTORS GRID */}
          <div className="flex-grow">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {doctors.map((doctor, i) => (
                   <Card key={i} className="rounded-[32px] overflow-hidden border-border/50 shadow-sm hover:shadow-2xl transition-all duration-500 group bg-card">
                      <div className="relative h-[380px] overflow-hidden">
                         <Image 
                           src={doctor.imageUrl} 
                           alt={doctor.name} 
                           fill 
                           className="object-cover group-hover:scale-105 transition-transform duration-700" 
                         />
                         <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                            <Star size={12} className="text-yellow-500 fill-yellow-500" />
                            <span className="text-[10px] font-bold text-primary tracking-widest">{doctor.rating}</span>
                         </div>
                      </div>
                      <CardContent className="p-8">
                         <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-2">{doctor.specialty}</h4>
                         <h3 className="text-2xl font-serif text-primary mb-6 transition-colors group-hover:text-accent font-medium">{doctor.name}</h3>
                         
                         <div className="flex items-center justify-between pt-6 border-t border-border/50">
                            <Link href={`/doctors/${doctor.id}`} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary hover:translate-x-1 transition-transform">
                               View Profile <ChevronRight size={14} className="ml-1 text-accent" />
                            </Link>
                            <span className="text-[10px] font-bold text-muted-foreground border border-border px-3 py-1 rounded-full">{doctor.experience}</span>
                         </div>
                         <div className="mt-4 flex items-center gap-2">
                            <Clock size={12} className="text-accent" />
                            <span className="text-[10px] font-medium text-muted-foreground italic decoration-accent decoration-1">{doctor.availability}</span>
                         </div>
                      </CardContent>
                   </Card>
                ))}
             </div>

             {/* PAGINATION */}
             <div className="flex items-center justify-center gap-2">
                <Button variant="outline" size="icon" className="rounded-full border-border text-muted-foreground hover:border-primary hover:text-primary transition-all">
                   <ChevronLeft size={18} />
                </Button>
                {[1, 2, 3].map((num) => (
                   <Button key={num} variant={num === 1 ? "default" : "ghost"} size="icon" className={`rounded-full text-xs font-bold transition-all ${num === 1 ? "bg-accent text-primary hover:bg-accent/80" : "text-muted-foreground hover:bg-muted"}`}>
                      {num}
                   </Button>
                ))}
                <Button variant="outline" size="icon" className="rounded-full border-border text-muted-foreground hover:border-primary hover:text-primary transition-all">
                   <ChevronRight size={18} />
                </Button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
