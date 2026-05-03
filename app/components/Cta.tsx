import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 bg-dark-mid relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <span className="inline-block px-5 py-1.5 text-sm font-semibold text-gold border border-gold/30 bg-gold/5 rounded-full mb-6">
          התחל היום
        </span>
        <h2 className="text-4xl lg:text-5xl font-black text-white mb-5">
          מוכן <span className="gold-gradient">להתחיל לחסוך?</span>
        </h2>
        <p className="text-white/55 text-lg leading-relaxed mb-10">
          השאר פרטים עכשיו ונחזור אליך תוך 24 שעות לשיחת ייעוץ ראשונה — חינם ללא התחייבות.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-10 py-4 gold-gradient-bg text-dark text-lg font-black rounded-xl hover:opacity-90 transition-opacity shadow-xl shadow-gold/20"
          >
            השאר פרטים לייעוץ חינם
          </Link>
          <a
            href="tel:053-7199663"
            className="px-10 py-4 border-2 border-gold/40 text-gold text-lg font-bold rounded-xl hover:bg-gold/10 transition-colors"
          >
            📞 053-7199663
          </a>
        </div>
      </div>
    </section>
  );
}