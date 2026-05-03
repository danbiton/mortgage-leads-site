"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "בית" },
  { href: "/about", label: "אודות" },
  { href: "/mortgage-calculator", label: "מחשבון משכנתא" },
  { href: "/mortgage-refinance", label: "מחזור משכנתא" },
  { href: "/blog", label: "בלוג" },
  { href: "/#services", label: "שירותים" },
  { href: "/#how-it-works", label: "איך זה עובד" },
  { href: "/contact", label: "צור קשר" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">

        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
          
            src="/icons/logo.png"
            alt="טל כהן — יועץ משכנתאות"
            width={120}
            height={80}
            className="h-14 w-auto object-contain"
            // style={{ mixBlendMode: 'screen' }}
            priority
          />
        </Link>

       
        {/* <Link href="/" className="shrink-0 flex flex-col leading-none">
  <span className="font-black text-white text-xl tracking-widest">
    TAL <span className="text-gold">COHEN</span>
  </span>
  <span className="text-xs font-light text-white/40 tracking-widest text-center">
    יועץ משכנתאות
  </span>
</Link> */}

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-white/70 hover:text-gold hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:053-7199663" className="text-gold text-sm font-bold hover:text-gold-light transition-colors">
            📞 053-7199663
          </a>
          <Link
            href="/contact"
            className="px-5 py-2 gold-gradient-bg text-dark text-sm font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            ייעוץ חינם
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-white/70 hover:bg-white/10 transition-colors"
          aria-label="תפריט"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-dark px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 text-sm font-medium text-white/70 hover:text-gold hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-2.5 gold-gradient-bg text-dark text-sm font-bold rounded-lg text-center"
          >
            ייעוץ חינם
          </Link>
        </div>
      )}
    </header>
  );
}