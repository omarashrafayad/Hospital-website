import Image from "next/image";
import Link from "next/link";
import { Eye, Target, ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const leadership = [
    {
      name: "Dr. Elena Sterling",
      role: "Chief Medical Officer",
      bio: "Pioneer in integrative cardiology with over 25 years of research in clinic hygiene.",
      imageUrl: "/images/dr_elena_sterling_1775381150064.png",
    },
    {
      name: "Julian Vance",
      role: "Executive Director",
      bio: "Dedicated to hospital design psychology and operational excellence in patient experience.",
      imageUrl: "/images/julian_vance_leader_1775381166698.png",
    },
    {
      name: "Dr. Sarah Khalil",
      role: "Head of Oncology",
      bio: "Renowned for patient-centered oncological therapy and brain health innovation.",
      imageUrl: "/images/dr_sarah_khalil_leader_1775381182776.png",
    },
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 lg:px-20 overflow-hidden bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-gray-400 mb-6 block font-sans">Est. 1994</span>
            <h1 className="text-6xl lg:text-8xl font-serif text-primary leading-[1.1] mb-10 tracking-tight">
               Healing with <span className="italic text-accent-foreground">Intention.</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-lg leading-relaxed font-medium mb-12">
               Founded on the principles of editorial precision and boutique hospitality, The Curated Clinic redefines the medical experience into a journey of tranquility and specialized care.
            </p>
            <div className="bg-white py-6 px-10 rounded-2xl shadow-xl inline-flex items-center gap-6 border border-gray-100">
               <div className="text-4xl font-serif text-primary">30+</div>
               <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Years of</p>
                  <p className="text-sm font-bold text-primary">Clinical Excellence</p>
               </div>
            </div>
          </div>
          <div className="relative h-[650px] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white group">
            <Image 
              src="/images/about_hero_corridor_1775381030879.png" 
              alt="The Curated Clinic Corridor" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-1000" 
            />
          </div>
        </div>
      </section>

      {/* --- VISION & MISSION SECTION --- */}
      <section className="py-32 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#FBFBFB] p-16 rounded-[40px] border border-gray-50 hover:shadow-xl transition-all duration-500">
             <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-10">
                <Eye size={24} className="text-primary" />
             </div>
             <h3 className="text-3xl font-serif text-primary mb-6 tracking-tight">Our Vision</h3>
             <p className="text-gray-500 leading-relaxed font-medium">
                To lead the global transition toward personalized, high-aesthetic healthcare where medical outcomes are enhanced by the psychological comfort of the environment. We envision a world where every patient feels like a guest in a sanctuary of healing.
             </p>
          </div>
          <div className="bg-primary p-16 rounded-[40px] text-white shadow-2xl relative overflow-hidden group">
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl transition-all duration-700 group-hover:scale-150"></div>
             <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-10">
                <Target size={24} className="text-accent" />
             </div>
             <h3 className="text-3xl font-serif mb-6 tracking-tight">Our Mission</h3>
             <p className="text-gray-400 leading-relaxed font-medium">
                Delivering clinical excellence through a curated lens of empathy, technology, and sophisticated design. Every touchpoint is crafted to reduce anxiety and foster trust, ensuring medical care feels personal and profoundly restorative.
             </p>
          </div>
        </div>
      </section>

      {/* --- BANNER INTERLUDE --- */}
      <section className="relative h-[60vh] lg:h-[80vh] flex items-center justify-center px-6">
        <Image 
          src="/images/precision_banner_1775381135913.png" 
          alt="Precision Lab" 
          fill 
          className="object-cover brightness-[0.4]" 
        />
        <div className="relative z-10 text-center">
           <h2 className="text-5xl lg:text-8xl font-serif text-white tracking-tight mb-4">
              Precision meets <span className="italic text-accent">Compassion.</span>
           </h2>
        </div>
      </section>

      {/* --- TIMELINE SECTION --- */}
      <section className="py-32 px-6 lg:px-20 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-24">
              <h2 className="text-5xl font-serif text-primary tracking-tight">The Timeline</h2>
              <div className="w-20 h-1 bg-accent mx-auto mt-6"></div>
           </div>
           
           <div className="space-y-24 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-12 items-start group">
                 <div className="text-5xl font-serif text-gray-200 group-hover:text-accent transition-colors shrink-0">1994</div>
                 <div className="pt-2">
                    <h4 className="text-xl font-bold text-primary mb-4">The Foundation</h4>
                    <p className="text-gray-500 font-medium leading-relaxed">
                       Dr. Alastair Thorne opens the first boutique clinic in London, prioritizing one-on-one patient care over volume.
                    </p>
                 </div>
              </div>
              <div className="flex flex-col md:flex-row gap-12 items-start group">
                 <div className="text-5xl font-serif text-gray-200 group-hover:text-accent transition-colors shrink-0">2010</div>
                 <div className="pt-2">
                    <h4 className="text-xl font-bold text-primary mb-4">Innovation Era</h4>
                    <p className="text-gray-500 font-medium leading-relaxed">
                       Integration of digital diagnostics and the launch of our Holistic Recovery program across North America.
                    </p>
                 </div>
              </div>
              <div className="flex flex-col md:flex-row gap-12 items-start group">
                 <div className="text-5xl font-serif text-primary shrink-0">Present</div>
                 <div className="pt-2">
                    <h4 className="text-xl font-bold text-primary mb-4">The Global Standard</h4>
                    <p className="text-gray-500 font-medium leading-relaxed">
                       Expanding our sanctuary-based care model across five continents, serving over 1M patients annually while maintaining boutique intimacy.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- LEADERSHIP SECTION --- */}
      <section className="py-32 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
           <div className="flex justify-between items-end mb-20 border-b border-gray-100 pb-12">
              <div>
                 <h2 className="text-5xl font-serif text-primary mb-4 tracking-tight">Our Leadership</h2>
                 <p className="text-gray-500 font-medium">Guided by the worlds most distinguished medical minds and empathetic visionaries.</p>
              </div>
              <Link href="/doctors" className="text-xs font-bold uppercase tracking-widest text-primary flex items-center hover:translate-x-1 transition-transform mb-2">
                 View All Faculty <ArrowRight size={14} className="ml-2" />
              </Link>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {leadership.map((leader, i) => (
                 <div key={i} className="group">
                    <div className="relative h-[500px] rounded-[32px] overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-lg group-hover:shadow-2xl">
                       <Image 
                         src={leader.imageUrl} 
                         alt={leader.name} 
                         fill 
                         className="object-cover group-hover:scale-105 transition-transform duration-700" 
                       />
                    </div>
                    <h3 className="text-2xl font-serif text-primary mb-1">{leader.name}</h3>
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-4">{leader.role}</p>
                    <p className="text-sm text-gray-500 leading-relaxed font-medium">
                       {leader.bio}
                    </p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="px-6 pb-24">
         <div className="max-w-7xl mx-auto rounded-[60px] bg-primary p-20 text-center flex flex-col items-center shadow-2xl relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
            <h2 className="text-5xl lg:text-7xl font-serif text-white mb-10 tracking-tight max-w-4xl">
               Experience the Sanctuary.
            </h2>
            <p className="text-gray-400 mb-12 max-w-2xl font-medium">
               Join the thousands who have chosen a more human, more beautiful way to heal.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
               <Link
                  href="/book"
                  className="bg-accent text-primary px-12 py-6 rounded-full text-sm font-bold hover:scale-105 transition-all shadow-xl flex items-center group"
               >
                  Book a Consultation <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
               </Link>
               <Link
                  href="/services"
                  className="bg-white/10 text-white px-12 py-6 rounded-full text-sm font-bold border border-white/20 hover:bg-white/20 transition-all"
               >
                  Tour the Clinic
               </Link>
            </div>
            
            <div className="absolute top-10 right-10 opacity-10">
               <CheckCircle2 size={120} className="text-accent" />
            </div>
         </div>
      </section>
    </div>
  );
}
