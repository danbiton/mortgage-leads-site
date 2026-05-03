import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "500+", label: "לקוחות מרוצים" },
  { value: "₪2.3B", label: "משכנתאות שגוייסו" },
  { value: "15+", label: "שנות ניסיון" },
  { value: "0.3%", label: "חיסכון ממוצע בריבית" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col">

      {/* ── Background image with dark overlay ─────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/advisor.png"
          alt="רקע"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Dark gradient overlay — heavy at bottom, medium at top */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
        {/* Gold vignette edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* ── Main content ────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">

        <span className="inline-block px-5 py-1.5 text-sm font-semibold text-gold border border-gold/40 bg-black/30 backdrop-blur-sm rounded-full mb-6">
          טל כהן — יועץ משכנתאות מוסמך
        </span>

        <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6 drop-shadow-2xl">
          <span className="gold-gradient">ייעוץ משכנתאות</span>
          <br />
          <span className="text-white">לחיים שלך</span>
        </h1>

        <p className="text-white/75 text-xl leading-relaxed mb-10 max-w-2xl drop-shadow-lg">
          ייעוץ אישי, ניהול מו&quot;מ מול הבנקים והשגת הריביות הטובות ביותר עבורך.
          ליווי מלא מהייעוץ הראשון ועד קבלת המפתח.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/contact"
            className="px-9 py-4 gold-gradient-bg text-dark font-black text-lg rounded-xl hover:opacity-90 transition-opacity shadow-2xl shadow-gold/30"
          >
            ייעוץ חינם — השאר פרטים
          </Link>
          <a
            href="#how-it-works"
            className="px-9 py-4 border-2 border-gold/50 text-gold font-bold text-lg rounded-xl hover:bg-gold/10 transition-colors backdrop-blur-sm"
          >
            איך זה עובד?
          </a>
        </div>

        <p className="text-white/35 text-sm">
          ✓ ללא עלות &nbsp;•&nbsp; ✓ ללא התחייבות &nbsp;•&nbsp; ✓ תגובה תוך 24 שעות
        </p>
      </div>

      {/* ── Stats bar ───────────────────────────────────────── */}
      <div className="relative z-10 gold-gradient-bg">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center py-5 px-4 ${i < stats.length - 1 ? "border-l border-black/15" : ""}`}
            >
              <strong className="block text-2xl lg:text-3xl font-black text-dark">
                {s.value}
              </strong>
              <span className="text-xs lg:text-sm font-semibold text-dark/65">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}