"use client";

import { Phone, Mail, MapPin, Send, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-background min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6 lg:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl lg:text-8xl font-serif text-primary leading-[1.1] mb-12 tracking-tight">
             We are here to help you <span className="italic text-accent-foreground">find your sanctuary</span> of health.
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed italic decoration-accent decoration-2 underline-offset-8">
             Whether you have a clinical inquiry or wish to learn more about our boutique approach to medicine, our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-24 px-6 lg:px-20 bg-muted/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* CONTACT FORM */}
          <div className="bg-card p-12 md:p-16 rounded-[40px] shadow-sm border border-border/50 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
             <h2 className="text-3xl font-serif text-primary mb-12 tracking-tight">Send an Inquiry</h2>
             
             <form className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-3">
                      <Label htmlFor="first-name" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground font-sans">First Name</Label>
                      <Input 
                        id="first-name"
                        type="text" 
                        placeholder="Jane" 
                        className="h-auto bg-background border-border px-6 py-4 rounded-2xl outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:border-accent transition-all text-sm font-medium text-primary"
                      />
                   </div>
                   <div className="space-y-3">
                      <Label htmlFor="last-name" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground font-sans">Last Name</Label>
                      <Input 
                        id="last-name"
                        type="text" 
                        placeholder="Doe" 
                        className="h-auto bg-background border-border px-6 py-4 rounded-2xl outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:border-accent transition-all text-sm font-medium text-primary"
                      />
                   </div>
                </div>

                <div className="space-y-3">
                   <Label htmlFor="email" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground font-sans">Email Address</Label>
                   <Input 
                     id="email"
                     type="email" 
                     placeholder="jane@example.com" 
                     className="h-auto bg-background border-border px-6 py-4 rounded-2xl outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:border-accent transition-all text-sm font-medium text-primary"
                   />
                </div>

                <div className="space-y-3">
                   <Label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground font-sans">Department of Interest</Label>
                   <Select>
                      <SelectTrigger className="h-auto bg-background border-border px-6 py-4 rounded-2xl outline-none focus:ring-1 focus:ring-accent transition-all text-sm font-medium text-muted-foreground">
                         <SelectValue placeholder="General Concierge" />
                      </SelectTrigger>
                      <SelectContent>
                         <SelectItem value="general">General Concierge</SelectItem>
                         <SelectItem value="cardiology">Cardiology Unit</SelectItem>
                         <SelectItem value="neurology">Neurology Specialty</SelectItem>
                         <SelectItem value="wellness">Executive Wellness</SelectItem>
                      </SelectContent>
                   </Select>
                </div>

                <div className="space-y-3">
                   <Label htmlFor="message" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground font-sans">Your Message</Label>
                   <Textarea 
                     id="message"
                     placeholder="How can we assist you today?" 
                     rows={5}
                     className="bg-background border-border px-6 py-4 rounded-3xl outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:border-accent transition-all text-sm font-medium text-primary resize-none"
                   />
                </div>

                <Button className="bg-primary text-primary-foreground w-full h-auto py-5 rounded-2xl text-sm font-bold flex items-center justify-center gap-3 shadow-xl hover:bg-opacity-90 transition-all hover:scale-[1.01]">
                   Submit Message <Send size={16} className="text-accent" />
                </Button>
             </form>
          </div>

          {/* CONTACT INFO & MAP */}
          <div className="flex flex-col gap-8">
             <div className="grid grid-cols-1 gap-6">
                <div className="bg-card p-8 rounded-[32px] border border-border/50 flex items-center shadow-sm hover:shadow-lg transition-all duration-300">
                   <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mr-6">
                      <Phone size={24} className="text-primary" />
                   </div>
                   <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground font-sans mb-1">Call Us</h4>
                      <p className="text-xl font-serif text-primary mb-1">+1 (555) 012-3456</p>
                      <p className="text-[10px] font-medium text-muted-foreground/60 font-sans uppercase tracking-[0.1em]">Mon-Fri, 8am - 6pm EST</p>
                   </div>
                </div>

                <div className="bg-card p-8 rounded-[32px] border border-border/50 flex items-center shadow-sm hover:shadow-lg transition-all duration-300">
                   <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mr-6">
                      <Mail size={24} className="text-primary" />
                   </div>
                   <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground font-sans mb-1">Email Us</h4>
                      <p className="text-xl font-serif text-primary mb-1">concierge@curatedclinic.com</p>
                      <p className="text-[10px] font-medium text-muted-foreground/60 font-sans uppercase tracking-[0.1em]">Expected response: 4-6 hours</p>
                   </div>
                </div>

                <div className="bg-card p-8 rounded-[32px] border border-border/50 flex items-center shadow-sm hover:shadow-lg transition-all duration-300">
                   <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mr-6">
                      <MapPin size={24} className="text-primary" />
                   </div>
                   <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground font-sans mb-1">Visit Us</h4>
                      <p className="text-xl font-serif text-primary mb-1">1200 Sanctuary Plaza</p>
                      <p className="text-[10px] font-medium text-muted-foreground/60 font-sans uppercase tracking-[0.1em]">Suite 400, Beverly Hills, CA 90210</p>
                   </div>
                </div>
             </div>

             {/* MAP VISUAL PLACEHOLDER */}
             <div className="relative flex-grow bg-primary rounded-[40px] overflow-hidden shadow-2xl group min-h-[400px]">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
                <Image 
                  src="/images/about_hero_corridor_1775381030879.png" 
                  alt="Clinic Map Visual" 
                  fill 
                  className="object-cover grayscale brightness-[0.4] group-hover:scale-105 transition-transform duration-1000" 
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="relative">
                      <div className="w-4 h-4 bg-accent rounded-full animate-ping absolute -top-2 -left-2 opacity-50"></div>
                      <MapPin size={48} className="text-accent fill-accent/20 relative z-10" />
                   </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 bg-background/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex items-center justify-between">
                   <div>
                      <p className="text-white font-serif text-lg">Our Main Campus</p>
                      <p className="text-xs text-muted-foreground/60 font-medium">Get directions for your visit</p>
                   </div>
                   <button className="w-12 h-12 rounded-full bg-background flex items-center justify-center hover:scale-110 transition-all shadow-xl">
                      <ArrowRight size={20} className="text-primary" />
                   </button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER BANNER --- */}
      <section className="py-32 px-6 lg:px-20 bg-background">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between border-t border-border/50 pt-32">
            <div className="max-w-xl text-center md:text-left mb-12 md:mb-0">
               <h3 className="text-4xl font-serif text-primary leading-tight mb-6">Experience boutique care with absolute precision.</h3>
               <p className="text-muted-foreground/60 font-medium uppercase tracking-widest text-[10px]">Your journey is our priority.</p>
            </div>
            <div className="flex gap-4">
               <Link href="/book">
                  <Button className="h-auto px-10 py-5 rounded-full text-sm font-bold shadow-xl bg-primary text-primary-foreground hover:bg-opacity-90 transition-all">
                     Book a Consultation
                  </Button>
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
