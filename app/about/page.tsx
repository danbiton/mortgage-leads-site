"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "שנות ניסיון" },
  { value: "500+", label: "לקוחות מרוצים" },
  { value: "₪2.3B", label: "משכנתאות שגוייסו" },
  { value: "97%", label: "שביעות רצון" },
];

const credentials = [
  { icon: "🏛️", title: "מוסמך בנק ישראל", desc: "רישיון יועץ משכנתאות מטעם בנק ישראל" },
  { icon: "🏆", title: "חבר התאחדות", desc: "חבר בהתאחדות יועצי המשכנתאות בישראל" },
  { icon: "📚", title: "השתלמויות שוטפות", desc: "עדכון שוטף בשינויי ריבית ותנאי שוק" },
  { icon: "🤝", title: "קשרים עם כל הבנקים", desc: "עבודה שוטפת מול כל הבנקים המובילים" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } as const,
  }),
};

const slideIn = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" } as const,
  },
};

export default function AboutPage() {
  return (
    <main className="bg-dark min-h-screen">

      {/* ── Hero section ─────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24">
        {/* Background glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* Text — right (RTL) */}
          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-block px-5 py-1.5 text-sm font-semibold text-gold border border-gold/30 bg-gold/5 rounded-full mb-6"
            >
              אודות
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6"
            >
       קצת עלי
              <br />
              {/* <span className="gold-gradient">טל כהן</span> */}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-white/65 text-lg leading-relaxed mb-6"
            >
              <strong className="text-white">אני טל כהן</strong>  יועץ משכנתאות מוסמך עם ניסיון של למעלה מ-15 שנה בתחום.
              לאורך הקריירה שלו ליווה מאות משפחות ברכישת דירה, מחזור משכנתא ובנייה עצמית —
              תוך השגת הריביות הטובות ביותר עבור כל לקוח.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="text-white/65 text-lg leading-relaxed mb-10"
            >
              הגישה של טל פשוטה: <strong className="text-gold">הלקוח במרכז.</strong> כל תמהיל משכנתא נבנה
              בהתאמה אישית מלאה, תוך הסבר ברור בכל שלב והנגשת עולם המשכנתאות
              לכל אחד — ללא ז׳רגון מסובך.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              <Link
                href="/contact"
                className="inline-block px-8 py-4 gold-gradient-bg text-dark font-black text-lg rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-gold/20"
              >
                קבע פגישת ייעוץ חינם
              </Link>
            </motion.div>
          </div>

          {/* Image — left, slides in from right */}
          <motion.div
            variants={slideIn}
            initial="hidden"
            animate="visible"
            className="flex justify-center relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gold/10 rounded-3xl blur-2xl scale-90" />

            <div className="relative rounded-3xl overflow-hidden border border-gold/20 shadow-2xl">
              <Image
                src="/images/advisor.png"
                alt="טל כהן — יועץ משכנתאות"
                width={480}
                height={560}
                className="object-cover w-full h-full"
                priority
              />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="absolute bottom-6 right-6 bg-dark/90 backdrop-blur-sm border border-gold/30 rounded-2xl px-4 py-3"
              >
                <p className="text-gold font-black text-xl">15+</p>
                <p className="text-white/60 text-xs">שנות ניסיון</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className="py-16 gold-gradient-bg">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="text-center"
            >
              <strong className="block text-3xl lg:text-4xl font-black text-dark">{s.value}</strong>
              <span className="text-dark/65 text-sm font-semibold">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Credentials ──────────────────────────────────────── */}
      <section className="py-24 bg-dark-mid">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-5 py-1.5 text-sm font-semibold text-gold border border-gold/30 bg-gold/5 rounded-full mb-4">
              הסמכות וניסיון
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              למה לבחור <span className="gold-gradient">בטל כהן?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((c, i) => (
              <motion.div
                key={c.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-gold/30 transition-all duration-300 text-center"
              >
                <span className="text-4xl block mb-4">{c.icon}</span>
                <h3 className="font-bold text-white mb-2">{c.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.07)_0%,_transparent_70%)] pointer-events-none" />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto px-6 text-center relative z-10"
        >
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-5">
            מוכן לקחת <span className="gold-gradient">את הצעד הבא?</span>
          </h2>
          <p className="text-white/55 text-lg mb-8">
            פגישת ייעוץ ראשונה — חינם, ללא התחייבות. נבין את המצב שלך ונבנה תוכנית.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 gold-gradient-bg text-dark font-black text-lg rounded-xl hover:opacity-90 transition-opacity"
          >
            קבע פגישה עכשיו
          </Link>
        </motion.div>
      </section>

    </main>
  );
}