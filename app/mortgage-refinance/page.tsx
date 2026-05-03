"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מחזור משכנתא - איך לחסוך עשרות אלפי שקלים",
  description: "בדוק האם כדאי למחזר את המשכנתא שלך וקבל הצעה משתלמת עם ליווי מקצועי.",
};

const reasons = [
    { icon: "📉", title: "הריבית בשוק ירדה", desc: "אם הריבית ירדה מאז לקחת את המשכנתא — כנראה משלם יותר מדי" },
    { icon: "💼", title: "שינוי במצב הכלכלי", desc: "קידום בעבודה, ירושה, או שינוי הכנסה — כדאי לבחון מחדש" },
    { icon: "🏦", title: "תנאים טובים יותר", desc: "בנקים מציעים תנאים שונים — ייתכן שכדאי לעבור לבנק אחר" },
    { icon: "⏱️", title: "קיצור תקופת ההלוואה", desc: "הגדלת התשלום החודשי לחיסכון משמעותי בריבית הכוללת" },
];

const steps = [
    { num: "01", title: "בדיקת כדאיות", desc: "נבחן את המשכנתא הקיימת שלך מול תנאי השוק הנוכחיים" },
    { num: "02", title: "הצעות מהבנקים", desc: "נפנה למספר בנקים במקביל ונשיג הצעות מחיר" },
    { num: "03", title: "ניתוח וסיכום", desc: "נציג לך את כל ההצעות עם חישוב חיסכון מדויק" },
    { num: "04", title: "ביצוע המחזור", desc: "נלווה אותך בחתימה ובהשלמת תהליך המחזור" },
];

const stats = [
    { value: 500, suffix: "+", label: "מחזורים בוצעו" },
    { value: 120000, suffix: "₪", label: "חיסכון ממוצע ללקוח" },
    { value: 15, suffix: "+", label: "שנות ניסיון" },
    { value: 97, suffix: "%", label: "לקוחות מרוצים" },
];

function useCounter(target: number, active: boolean) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!active) return;
        let start = 0;
        const step = target / 80;
        const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [target, active]);
    return count;
}

function CounterCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(false);
    const count = useCounter(value, active);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.5 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return (
        <div ref={ref} className="text-center">
            <strong className="block text-4xl lg:text-5xl font-black text-navy">
                {count.toLocaleString()}{suffix}
            </strong>
            <span className="text-navy/60 text-sm mt-1 block">{label}</span>
        </div>
    );
}

export default function RefinancePage() {
    const particles = ["💰", "🏠", "📉", "💎", "🪙", "📊"];

    return (
        <main className="min-h-screen bg-dark overflow-hidden">

            {/* ── HERO ─────────────────────────────────────────────── */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-[#1a1400]" />

                {/* Rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {[400, 560, 720, 880].map((size, i) => (
                        <div key={size}
                            className={`absolute rounded-full border border-gold/10 ${i % 2 === 0 ? "animate-spin" : ""}`}
                            style={{ width: size, height: size, animationDuration: `${20 + i * 8}s` }}
                        />
                    ))}
                </div>

                {/* Center coin — 3D rotating */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                        className="w-44 h-44 rounded-full flex items-center justify-center text-7xl shadow-2xl"
                        style={{
                            background: "linear-gradient(135deg, #B8960C 0%, #D4AF37 40%, #F0D060 60%, #D4AF37 100%)",
                            boxShadow: "0 0 80px rgba(212,175,55,0.35), inset 0 2px 4px rgba(255,255,255,0.2)",
                            animation: "rotateCoin 6s ease-in-out infinite",
                            transformStyle: "preserve-3d",
                        }}
                    >
                        🔄
                    </div>
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                    {particles.map((icon, i) => (
                        <span key={i}
                            className="absolute text-3xl"
                            style={{
                                left: `${8 + i * 15}%`,
                                top: `${15 + (i % 3) * 22}%`,
                                animationName: "sparkle",
                                animationDuration: `${2.5 + i * 0.4}s`,
                                animationDelay: `${i * 0.3}s`,
                                animationTimingFunction: "ease-in-out",
                                animationIterationCount: "infinite",
                            }}
                        >
                            {icon}
                        </span>
                    ))}
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <span className="inline-block px-5 py-1.5 text-sm font-semibold text-gold border border-gold/30 bg-gold/5 backdrop-blur-sm rounded-full mb-6">
                        מחזור משכנתא חכם
                    </span>
                    <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
                        חסוך
                        <span className="gold-shimmer"> עשרות אלפים</span>
                        <br />
                        על המשכנתא שלך
                    </h1>
                    <p className="text-white/65 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                        מחזור משכנתא נכון יכול לחסוך לך מאות שקלים בחודש —
                        ועשרות אלפי שקלים לאורך חיי ההלוואה.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact"
                            className="px-9 py-4 gold-gradient-bg text-dark font-black text-lg rounded-xl hover:opacity-90 transition-opacity shadow-2xl shadow-gold/30">
                            ייעוץ חינם עכשיו
                        </Link>
                        <Link href="/mortgage-calculator"
                            className="px-9 py-4 border-2 border-gold/40 text-gold font-bold text-lg rounded-xl hover:bg-gold/10 transition-colors backdrop-blur-sm">
                            למחשבון המשכנתא
                        </Link>
                    </div>
                </div>

                {/* Scroll arrow */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 animate-bounce">
                    <span className="text-xs">גלול למטה</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </section>

            {/* ── Stats ────────────────────────────────────────────── */}
            <section className="gold-gradient-bg py-10">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((s) => (
                        <CounterCard key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
                    ))}
                </div>
            </section>

            {/* ── Why refinance — flip cards ────────────────────────── */}
            <section className="py-24 bg-dark-mid relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.05)_0%,_transparent_70%)] pointer-events-none" />
                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-block px-5 py-1.5 text-sm font-semibold text-gold border border-gold/30 bg-gold/5 rounded-full mb-4">
                            מתי כדאי?
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-black text-white mb-2">
                            4 סיבות למחזר <span className="gold-gradient">עכשיו</span>
                        </h2>
                        <p className="text-white/30 text-sm">העבר עכבר לפרטים</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {reasons.map((r) => (
                            <div key={r.title} className="flip-card h-56">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front bg-dark-card border border-dark-border flex flex-col items-center justify-center p-6 text-center">
                                        <span className="text-5xl mb-4 block">{r.icon}</span>
                                        <h3 className="font-bold text-white text-base">{r.title}</h3>
                                        <p className="text-white/25 text-xs mt-3">העבר עכבר ←</p>
                                    </div>
                                    <div className="flip-card-back gold-gradient-bg flex flex-col items-center justify-center p-6 text-center">
                                        <span className="text-4xl mb-3 block">{r.icon}</span>
                                        <h3 className="font-black text-dark text-base mb-2">{r.title}</h3>
                                        <p className="text-dark/75 text-sm leading-relaxed">{r.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Calculator CTA ───────────────────────────────────── */}
            <section className="bg-slate-50 py-20 relative">
                <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 5 L55 20 L55 40 L30 55 L5 40 L5 20Z' fill='none' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E")`,
                        backgroundSize: "60px 60px",
                    }}
                />
                <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
                    <span className="inline-block px-5 py-1.5 text-sm font-semibold text-gold border border-gold/30 bg-gold/10 rounded-full mb-5">
                        כלי חינמי
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-800 mb-4">
                        רוצה לדעת כמה <span className="gold-gradient">תחסוך?</span>
                    </h2>
                    <p className="text-slate-500 text-lg mb-8">
                        השתמש במחשבון התמהיל המקצועי שלנו — בנה מסלולים, השווה ריביות וראה את החיסכון שלך
                    </p>
                    <Link href="/mortgage-calculator"
                        className="inline-block px-10 py-4 gold-gradient-bg text-dark font-black text-lg rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-gold/20">
                        למחשבון המשכנתא המלא ←
                    </Link>
                </div>
            </section>

            {/* ── How it works ─────────────────────────────────────── */}
            <section className="py-24 bg-dark relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(212,175,55,0.05)_0%,_transparent_70%)] pointer-events-none" />
                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-block px-5 py-1.5 text-sm font-semibold text-gold border border-gold/30 bg-gold/5 rounded-full mb-4">
                            התהליך
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-black text-white">
                            איך עובד <span className="gold-gradient">מחזור משכנתא?</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                        <div className="absolute top-8 right-[12%] left-[12%] h-px bg-gradient-to-l from-transparent via-gold/20 to-transparent hidden lg:block" />
                        {steps.map((step) => (
                            <div key={step.num}
                                className="bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-gold/30 transition-all duration-300 group">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center text-dark font-black text-sm shrink-0">
                                        {step.num}
                                    </span>
                                </div>
                                <h3 className="font-bold text-white mb-2 group-hover:text-gold transition-colors">{step.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Final CTA ─────────────────────────────────────────── */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 gold-gradient-bg" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)] pointer-events-none" />
                <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl lg:text-5xl font-black text-dark mb-5">מוכן לחסוך?</h2>
                    <p className="text-dark/65 text-xl leading-relaxed mb-10">
                        טל כהן ינהל עבורך מו״מ מול הבנקים וישיג את הריבית הטובה ביותר.
                        פגישה ראשונה — חינם.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact"
                            className="px-10 py-4 bg-dark text-gold font-black text-lg rounded-xl hover:bg-dark-mid transition-colors shadow-xl">
                            קבע פגישה חינם
                        </Link>
                        <a href="tel:053-7199663"
                            className="px-10 py-4 border-2 border-dark/30 text-dark font-bold text-lg rounded-xl hover:bg-dark/10 transition-colors">
                            📞 053-7199663
                        </a>
                    </div>
                </div>
            </section>
            <style>{`
  @keyframes rotateCoin {
    0%   { transform: rotateY(0deg) rotateX(10deg); }
    50%  { transform: rotateY(180deg) rotateX(-10deg); }
    100% { transform: rotateY(360deg) rotateX(10deg); }
  }
  @keyframes sparkle {
    0%, 100% { 
      opacity: 0.35;
      filter: drop-shadow(0 0 4px rgba(212,175,55,0.4));
      transform: translateY(0px) scale(1);
    }
    50% { 
      opacity: 0.8;
      filter: drop-shadow(0 0 20px rgba(212,175,55,1)) drop-shadow(0 0 8px #fff8dc) brightness(1.5);
      transform: translateY(-12px) scale(1.2);
    }
  }
`}</style>

        </main>
    );
}