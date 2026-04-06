"use client";

import Image from "next/image";
import Link from "next/link";
import { Apple, Key, Lock, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AuthPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      {/* --- TOP BAR --- */}
      <nav className="h-20 flex items-center justify-between px-6 lg:px-20 border-b border-border/40">
        <Link href="/" className="text-xl font-serif text-primary tracking-tight">
          The Curated Clinic
        </Link>
        <div className="flex items-center gap-8">
           <Link href="/contact" className="text-[10px] uppercase font-bold text-muted-foreground hover:text-primary transition-colors tracking-widest">Help Center</Link>
           <div className="text-[10px] uppercase font-bold text-accent-foreground border-b-2 border-accent pb-1">
              Sanctuary Access
           </div>
        </div>
      </nav>

      <div className="flex flex-grow flex-col lg:flex-row h-full">
        {/* --- VISUAL SIDE (LEFT) --- */}
        <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-0 overflow-hidden bg-muted">
           <Image 
             src="/images/clinic_hero_chair_1775374963631.png" 
             alt="Welcome Sanctuary" 
             fill 
             className="object-cover brightness-95 grayscale-[0.2] transition-transform duration-1000 transform hover:scale-105" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent lg:bg-gradient-to-r lg:from-primary/40 lg:to-transparent"></div>
           
           <div className="absolute bottom-12 left-12 right-12 text-white">
              <span className="text-[10px] uppercase font-bold tracking-[0.4em] mb-6 block opacity-80">Welcome Back</span>
              <h2 className="text-4xl lg:text-7xl font-serif leading-tight mb-8 tracking-tight max-w-lg">
                 Your health journey, <span className="italic text-accent underline decoration-1 underline-offset-8">beautifully</span> managed.
              </h2>
              <p className="text-gray-200 text-sm font-medium leading-relaxed max-w-md italic opacity-90">
                 Access your records, schedule consultations, and connect with your care team in our secure editorial sanctuary.
              </p>
           </div>
        </div>

        {/* --- FORM SIDE (RIGHT) --- */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-32 py-20 bg-background">
           <div className="max-w-md w-full mx-auto">
              
              <Tabs defaultValue="signin" className="w-full">
                {/* TABS HEADER */}
                <TabsList className="grid w-full grid-cols-2 mb-16 h-auto bg-transparent border-b border-border rounded-none p-0">
                  <TabsTrigger 
                    value="signin" 
                    className="pb-4 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none text-xs font-bold uppercase tracking-widest text-muted-foreground data-[state=active]:text-primary transition-all"
                  >
                    Sign In
                  </TabsTrigger>
                  <TabsTrigger 
                    value="create" 
                    className="pb-4 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none text-xs font-bold uppercase tracking-widest text-muted-foreground data-[state=active]:text-primary transition-all"
                  >
                    Create Account
                  </TabsTrigger>
                </TabsList>

                {/* FORM HEADER */}
                <div className="mb-12">
                   <h3 className="text-3xl font-serif text-primary mb-4 tracking-tight">Welcome to the Sanctuary</h3>
                   <p className="text-muted-foreground text-xs font-medium uppercase tracking-[0.1em]">Please enter your credentials to access the clinic portal.</p>
                </div>

                <TabsContent value="signin" className="m-0 border-none p-0 outline-none">
                  <form className="space-y-8 mb-12">
                     <div className="space-y-3">
                        <Label htmlFor="email" className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Email Address</Label>
                        <div className="relative group">
                           <Mail size={16} className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground/50 group-focus-within:text-accent transition-colors z-10" />
                           <Input 
                             id="email"
                             type="email" 
                             placeholder="name@example.com" 
                             className="h-auto bg-muted/30 border-border px-16 py-5 rounded-2xl outline-none focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-accent focus-visible:border-accent transition-all text-sm font-medium text-primary shadow-sm"
                           />
                        </div>
                     </div>

                     <div className="space-y-3">
                        <div className="flex justify-between items-center">
                           <Label htmlFor="password" className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Password</Label>
                           <Link href="#" className="text-[10px] uppercase font-bold text-muted-foreground hover:text-primary transition-colors tracking-widest">Forgot password?</Link>
                        </div>
                        <div className="relative group">
                           <Lock size={16} className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground/50 group-focus-within:text-accent transition-colors z-10" />
                           <Input 
                             id="password"
                             type="password" 
                             placeholder="••••••••" 
                             className="h-auto bg-muted/30 border-border px-16 py-5 rounded-2xl outline-none focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-accent focus-visible:border-accent transition-all text-sm font-medium text-primary shadow-sm"
                           />
                        </div>
                     </div>

                     <div className="flex items-center space-x-3 group cursor-pointer">
                        <Checkbox id="remember" className="border-border data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground" />
                        <Label htmlFor="remember" className="text-[10px] uppercase font-bold text-muted-foreground group-hover:text-primary transition-colors tracking-widest cursor-pointer">Stay signed in for 30 days</Label>
                     </div>

                     <Button className="w-full h-auto py-5 rounded-2xl text-xs font-bold shadow-2xl hover:scale-[1.01] transition-all flex items-center justify-center gap-3 bg-primary text-primary-foreground">
                        Sign Into Portal <ArrowRight size={16} className="text-accent" />
                     </Button>
                  </form>
                </TabsContent>

                <TabsContent value="create" className="m-0 border-none p-0 outline-none">
                  <form className="space-y-8 mb-12">
                     {/* Registration fields would go here */}
                     <p className="text-center text-muted-foreground text-sm py-10 italic">Registration for new guests is currently invitation-only.</p>
                     <Button variant="outline" className="w-full h-auto py-5 rounded-2xl text-xs font-bold flex items-center justify-center gap-3 border-border">
                        Contact intake specialist
                     </Button>
                  </form>
                </TabsContent>
              </Tabs>

              {/* SOCIAL / SEPARATOR */}
              <div className="relative mb-12 text-center">
                 <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border"></div></div>
                 <div className="relative inline-block text-[8px] uppercase font-bold tracking-[0.5em] text-muted-foreground bg-background px-4">Social Verification</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <Button variant="outline" className="h-auto py-4 rounded-xl flex items-center justify-center gap-3 text-xs font-bold text-muted-foreground hover:bg-muted/50 transition-all shadow-sm border-border">
                    <Apple size={16} /> Apple ID
                 </Button>
                 <Button variant="outline" className="h-auto py-4 rounded-xl flex items-center justify-center gap-3 text-xs font-bold text-muted-foreground hover:bg-muted/50 transition-all shadow-sm border-border">
                    <Key size={16} /> Passkey
                 </Button>
              </div>

              <div className="mt-20 flex items-center justify-center gap-4 text-muted-foreground/40">
                 <Lock size={12} />
                 <p className="text-[8px] uppercase font-bold tracking-[0.3em]">Secure patient encryption active.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}