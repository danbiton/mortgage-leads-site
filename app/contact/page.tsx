import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "יועץ משכנתאות ברחובות | טל כהן - צור קשר לייעוץ חינם",
  description: "מחפש יועץ משכנתאות ברחובות? השאר פרטים וקבל ייעוץ מקצועי ללא התחייבות תוך 24 שעות.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-dark relative overflow-hidden">

      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.07)_0%,_transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,175,55,0.04)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">

        {/* ── Right side — info ──────────────────────────────── */}
        <div className="lg:pt-8">
          <span className="inline-block px-5 py-1.5 text-sm font-semibold text-gold border border-gold/30 bg-gold/5 rounded-full mb-6">
            צור קשר
          </span>

          <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
            רוצה לדעת כמה
            <br />
            <span className="gold-gradient">תוכל לחסוך?</span>
          </h1>

          <p className="text-white/60 text-lg leading-relaxed mb-12">
            מלא את הטופס ואחזור אליך תוך 24 שעות לשיחת ייעוץ ראשונה — חינם, ללא התחייבות.
          </p>

          <ul className="flex flex-col gap-5">
            <li>
              <a href="tel:053-7199663"
                className="flex items-center gap-4 text-gold hover:text-gold-light transition-colors group">
                <span className="w-11 h-11 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center text-lg group-hover:bg-gold/15 transition-colors shrink-0">
                  📞
                </span>
                <span className="text-lg font-bold">053-7199663</span>
              </a>
            </li>
            <li>
              <a href="mailto:Talcohen663@gmail.com"
                className="flex items-center gap-4 text-gold hover:text-gold-light transition-colors group">
                <span className="w-11 h-11 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center text-lg group-hover:bg-gold/15 transition-colors shrink-0">
                  ✉️
                </span>
                <span className="text-lg font-bold">Talcohen663@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/972537199663" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 text-gold hover:text-gold-light transition-colors group">
                <span className="w-11 h-11 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center text-lg group-hover:bg-gold/15 transition-colors shrink-0">
                  💬
                </span>
                <span className="text-lg font-bold">WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>

        {/* ── Left side — form ───────────────────────────────── */}
        <div className="bg-dark-card border border-dark-border rounded-2xl p-8 lg:p-10">
          <h2 className="text-xl font-bold text-white mb-8">השאר פרטים</h2>
          <ContactForm />
        </div>

      </div>
    </main>
  );
}