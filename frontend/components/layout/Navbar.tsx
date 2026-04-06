"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif tracking-tight text-primary">
          The Curated Clinic
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/services" className="text-[10px] uppercase font-bold tracking-widest text-gray-400 hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/doctors" className="text-[10px] uppercase font-bold tracking-widest text-gray-400 hover:text-primary transition-colors">
            Doctors
          </Link>
          <Link href="/about" className="text-[10px] uppercase font-bold tracking-widest text-gray-400 hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-[10px] uppercase font-bold tracking-widest text-gray-400 hover:text-primary transition-colors">
            Contact
          </Link>
          <div className="h-4 w-[1px] bg-gray-200 mx-2"></div>
          <Link href="/auth" className="text-[10px] uppercase font-bold tracking-widest text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
            <User size={14} className="text-accent" /> Portal
          </Link>
          <Link
            href="/book"
            className="bg-primary text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-lg ml-4"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 border-b border-gray-100 py-6 px-6 flex flex-col space-y-4 shadow-xl">
          <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-widest text-gray-400">Services</Link>
          <Link href="/doctors" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-widest text-gray-400">Doctors</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-widest text-gray-400">About Us</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-widest text-gray-400">Contact</Link>
          <Link href="/auth" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-2">
             <User size={14} /> Patient Portal
          </Link>
          <Link
            href="/book"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-primary text-white px-6 py-4 rounded-xl text-center text-xs font-bold uppercase tracking-widest"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
}
