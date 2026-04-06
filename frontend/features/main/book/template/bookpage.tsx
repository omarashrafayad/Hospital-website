"use client";

import Image from "next/image";
import { CheckCircle, Phone, Mail, Clock, Calendar as CalendarIcon, User, PhoneCall, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BookingPage() {
  return (
    <div className="flex flex-col bg-background min-h-screen">
      {/* --- HEADER SECTION --- */}
      <section className="pt-24 pb-12 px-6 lg:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-[0.3em] text-accent-foreground mb-4 block">Reservation</span>
          <h1 className="text-5xl lg:text-7xl font-serif text-primary leading-tight mb-8 tracking-tight">
             Begin your <span className="italic text-accent-foreground">wellness</span> journey
          </h1>
          <p className="text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed italic decoration-accent decoration-1 underline-offset-4">
             Schedule a consultation with our specialists in a sanctuary designed for your comfort and health.
          </p>
        </div>
      </section>

      {/* --- BOOKING FORM SECTION --- */}
      <section className="pb-32 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-stretch">
          
          {/* FORM CARD */}
          <div className="flex-grow bg-card rounded-[40px] p-8 md:p-16 border border-border/50 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
             
             <form className="space-y-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                   <div className="space-y-4">
                      <Label htmlFor="fullname" className="text-xs uppercase font-bold tracking-widest text-primary flex items-center">
                         <User size={14} className="mr-2" /> Full Name
                      </Label>
                      <Input 
                         id="fullname"
                         type="text" 
                         placeholder="Johnathan Doe" 
                         className="h-auto bg-background px-6 py-4 rounded-2xl border border-border outline-none focus-visible:ring-1 focus-visible:ring-accent transition-all text-sm font-medium"
                      />
                   </div>
                   <div className="space-y-4">
                      <Label htmlFor="phone" className="text-xs uppercase font-bold tracking-widest text-primary flex items-center">
                         <PhoneCall size={14} className="mr-2" /> Phone Number
                      </Label>
                      <Input 
                         id="phone"
                         type="tel" 
                         placeholder="+1 (555) 000-0000" 
                         className="h-auto bg-background px-6 py-4 rounded-2xl border border-border outline-none focus-visible:ring-1 focus-visible:ring-accent transition-all text-sm font-medium"
                      />
                   </div>
                </div>

                <div className="space-y-4">
                   <Label className="text-xs uppercase font-bold tracking-widest text-primary">Select Specialist</Label>
                   <Select>
                      <SelectTrigger className="h-auto bg-background px-6 py-4 rounded-2xl border border-border outline-none focus:ring-1 focus:ring-accent text-sm font-medium text-muted-foreground">
                         <SelectValue placeholder="Select a Doctor" />
                      </SelectTrigger>
                      <SelectContent>
                         <SelectItem value="rossi">Dr. Elena Rossi - Cardiology</SelectItem>
                         <SelectItem value="thorne">Dr. Marcus Thorne - Neurology</SelectItem>
                         <SelectItem value="jenkins">Dr. Sarah Jenkins - Oncology</SelectItem>
                      </SelectContent>
                   </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                   <div className="space-y-4">
                      <Label htmlFor="date" className="text-xs uppercase font-bold tracking-widest text-primary flex items-center">
                         <CalendarIcon size={14} className="mr-2" /> Preferred Date
                      </Label>
                      <Input 
                         id="date"
                         type="date" 
                         className="h-auto bg-background px-6 py-4 rounded-2xl border border-border outline-none focus-visible:ring-1 focus-visible:ring-accent transition-all text-sm font-medium text-muted-foreground"
                      />
                   </div>
                   <div className="space-y-4">
                      <Label className="text-xs uppercase font-bold tracking-widest text-primary flex items-center">
                         <Clock size={14} className="mr-2" /> Preferred Time
                      </Label>
                      <Select>
                         <SelectTrigger className="h-auto bg-background px-6 py-4 rounded-2xl border border-border outline-none focus:ring-1 focus:ring-accent text-sm font-medium text-muted-foreground">
                            <SelectValue placeholder="Select a time slot" />
                         </SelectTrigger>
                         <SelectContent>
                            <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (1 PM - 5 PM)</SelectItem>
                            <SelectItem value="evening">Evening (6 PM - 8 PM)</SelectItem>
                         </SelectContent>
                      </Select>
                   </div>
                </div>

                <div className="space-y-4">
                   <Label htmlFor="notes" className="text-xs uppercase font-bold tracking-widest text-primary flex items-center">
                      <FileText size={14} className="mr-2" /> Notes / Reason for Visit
                   </Label>
                   <Textarea 
                      id="notes"
                      placeholder="Briefly describe your concerns or goals..." 
                      rows={5}
                      className="bg-background px-6 py-4 rounded-2xl border border-border outline-none focus-visible:ring-1 focus-visible:ring-accent transition-all text-sm font-medium resize-none"
                   />
                </div>

                <Button className="w-full h-auto bg-primary text-primary-foreground py-6 rounded-3xl text-sm font-bold shadow-2xl hover:scale-[1.01] transition-all flex items-center justify-center gap-3 active:scale-95">
                   Confirm Appointment Request <CheckCircle size={18} className="text-accent" />
                </Button>
             </form>
          </div>

          {/* INFO COLUMN */}
          <aside className="w-full lg:w-96 space-y-8 flex flex-col">
             <div className="bg-card rounded-[32px] p-10 border border-border/50 shadow-sm flex-grow">
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-8 border border-border/10">
                   <Image 
                     src="/images/clinic_hero_chair_1775374963631.png" 
                     alt="Clinic Standards" 
                     fill 
                     className="object-cover" 
                   />
                </div>
                <h4 className="text-lg font-serif text-primary mb-4">Our Care Standards</h4>
                <p className="text-muted-foreground text-sm leading-relaxed font-medium mb-8">
                   Every appointment includes a 15-minute diagnostic intake and a personalized wellness plan designed for your lifestyle.
                </p>
                <div className="space-y-4">
                   {[
                      "HIPAA Compliant Care",
                      "Private Recovery Suites",
                      "24/7 Concierge Support",
                      "Advanced AI Diagnostics"
                   ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs font-bold text-muted-foreground/60 tracking-wide">
                         <CheckCircle size={14} className="text-accent" /> {item}
                      </div>
                   ))}
                </div>
             </div>

             <div className="bg-accent/40 rounded-[32px] p-10 border border-accent/20 flex flex-col items-center text-center backdrop-blur-sm">
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary/40 mb-6 block">Support</span>
                <p className="text-primary font-serif text-lg mb-8 italic">Need help scheduling? Our concierge is available to assist you directly.</p>
                <div className="w-full space-y-4">
                   <div className="flex items-center justify-center gap-4 bg-background/50 backdrop-blur-md py-4 rounded-2xl border border-white/20 text-sm font-bold text-primary">
                      <Phone size={16} /> (555) 123-4567
                   </div>
                   <div className="flex items-center justify-center gap-4 bg-background/50 backdrop-blur-md py-4 rounded-2xl border border-white/20 text-sm font-bold text-primary">
                      <Mail size={16} /> concierge@curatedclinic.com
                   </div>
                </div>
             </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
