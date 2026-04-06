import Link from "next/link";
import {  Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        {/* Column 1: Clinic Info */}
        <div className="flex flex-col space-y-4">
          <Link href="/" className="text-xl font-serif font-bold text-primary">
            The Curated Clinic
          </Link>
          <p className="text-gray-500 leading-relaxed max-w-xs">
            Elevating the standard of boutique medical care through clinical precision and empathetic service.
          </p>
          <div className="flex space-x-4 pt-2 text-primary/70">
            {/* <Link href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></Link>
            <Link href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></Link>
            <Link href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></Link> */}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-xs">Medical Support</h4>
          <ul className="space-y-4 text-gray-500 font-medium">
            <li><Link href="#" className="hover:text-primary transition-colors">Emergency Care</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Clinic Locations</Link></li>
            <li><Link href="/doctors" className="hover:text-primary transition-colors">Our Doctors</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">All Specialties</Link></li>
          </ul>
        </div>

        {/* Column 3: Legal & Resources */}
        <div>
          <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-xs">Legal</h4>
          <ul className="space-y-4 text-gray-500 font-medium">
            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Patient Portal</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Insurance Plans</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="space-y-4">
          <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-xs">Newsletter</h4>
          <p className="text-gray-500 mb-4 font-medium italic">Join our list for wellness tips and medical insights.</p>
          <div className="flex bg-muted rounded-full overflow-hidden border border-gray-100 p-1">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-transparent px-4 py-2 flex-grow outline-none text-primary"
            />
            <button className="bg-primary text-white p-2 rounded-full hover:bg-opacity-90 transition-all">
              <Mail size={18} />
            </button>
          </div>
          <div className="pt-6 space-y-3 text-gray-500 font-medium">
            <div className="flex items-center space-x-3"><Phone size={16} /> <span>+1 (555) 123-4567</span></div>
            <div className="flex items-center space-x-3"><MapPin size={16} /> <span>122 Fifth Avenue, NYC</span></div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-gray-50 text-center text-xs text-gray-400 font-medium">
        © 2024 The Curated Clinic. All rights reserved.
      </div>
    </footer>
  );
}
