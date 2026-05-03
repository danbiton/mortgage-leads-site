"use client";

import Link from "next/link";
import { useState } from "react";

const posts = [
  {
    slug: "5-mistakes-mortgage",
    category: "טיפים",
    categoryColor: "text-blue-400",
    categoryBg: "bg-blue-500/10 border-blue-500/20",
    icon: "⚠️",
    gradient: "from-blue-900/40 to-dark-card",
    accentColor: "#60a5fa",
    title: "5 טעויות שאנשים עושים כשלוקחים משכנתא",
    excerpt: "רוב האנשים לוקחים משכנתא פעם אחת בחיים — ולכן עושים טעויות יקרות. הנה 5 הטעויות הנפוצות ביותר ואיך להימנע מהן.",
    date: "15 בינואר 2025",
    readTime: "5 דקות",
    tags: ["משכנתא", "טעויות", "טיפים"],
  },
  {
    slug: "when-to-refinance",
    category: "מחזור משכנתא",
    categoryColor: "text-emerald-400",
    categoryBg: "bg-emerald-500/10 border-emerald-500/20",
    icon: "🔄",
    gradient: "from-emerald-900/40 to-dark-card",
    accentColor: "#34d399",
    title: "מתי כדאי למחזר משכנתא? המדריך המלא לשנת 2025",
    excerpt: "מחזור משכנתא יכול לחסוך לך עשרות אלפי שקלים — אבל לא תמיד זה כדאי. הנה איך לדעת מתי הזמן הנכון.",
    date: "8 בינואר 2025",
    readTime: "7 דקות",
    tags: ["מחזור", "חיסכון", "ריבית"],
  },
  {
    slug: "interest-rate-rise",
    category: "עדכוני שוק",
    categoryColor: "text-orange-400",
    categoryBg: "bg-orange-500/10 border-orange-500/20",
    icon: "📈",
    gradient: "from-orange-900/40 to-dark-card",
    accentColor: "#fb923c",
    title: "הריבית עלתה — מה זה אומר על המשכנתא שלך?",
    excerpt: "בנק ישראל העלה את הריבית שוב. מה זה אומר על ההחזר החודשי שלך ומה אפשר לעשות?",
    date: "1 בינואר 2025",
    readTime: "4 דקות",
    tags: ["ריבית", "בנק ישראל", "שוק"],
  },
  {
    slug: "mortgage-mix-explained",
    category: "מדריכים",
    categoryColor: "text-purple-400",
    categoryBg: "bg-purple-500/10 border-purple-500/20",
    icon: "📊",
    gradient: "from-purple-900/40 to-dark-card",
    accentColor: "#c084fc",
    title: "מה זה תמהיל משכנתא ולמה זה הדבר החשוב ביותר?",
    excerpt: "תמהיל המשכנתא הוא ההחלטה שתשפיע הכי הרבה על כמה תשלם לאורך השנים. המדריך המלא.",
    date: "20 בדצמבר 2024",
    readTime: "8 דקות",
    tags: ["תמהיל", "מסלולים", "מדריך"],
  },
  {
    slug: "0-5-percent-difference",
    category: "חישובים",
    categoryColor: "text-gold",
    categoryBg: "bg-gold/10 border-gold/20",
    icon: "💰",
    gradient: "from-yellow-900/40 to-dark-card",
    accentColor: "#D4AF37",
    title: "הפרש של 0.5% בריבית — כמה זה שווה ב-25 שנה?",
    excerpt: "נראה זניח, אבל 0.5% בריבית על משכנתא של מיליון שקל שווה יותר מ-60,000 ש״ח לאורך חיי ההלוואה.",
    date: "10 בדצמבר 2024",
    readTime: "3 דקות",
    tags: ["ריבית", "חישוב", "חיסכון"],
  },
  {
    slug: "first-apartment-guide",
    category: "מדריכים",
    categoryColor: "text-purple-400",
    categoryBg: "bg-purple-500/10 border-purple-500/20",
    icon: "🏠",
    gradient: "from-purple-900/40 to-dark-card",
    accentColor: "#c084fc",
    title: "המדריך המלא לרכישת דירה ראשונה — מא׳ עד ת׳",
    excerpt: "קונים דירה ראשונה? המדריך שמסביר כל מה שצריך לדעת — מהון עצמי, דרך אישור עקרוני ועד חתימה.",
    date: "1 בדצמבר 2024",
    readTime: "10 דקות",
    tags: ["דירה ראשונה", "רכישה", "מדריך"],
  },
];

const categories = ["הכל", "מדריכים", "טיפים", "מחזור משכנתא", "עדכוני שוק", "חישובים"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("הכל");

  const filteredPosts =
    activeCategory === "הכל"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const featured = filteredPosts[0];
  const rest = filteredPosts.slice(1);

  return (
    <main className="bg-dark min-h-screen">

      {/* ── Header ───────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gold/6 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <span className="inline-block px-5 py-1.5 text-sm font-semibold text-gold border border-gold/30 bg-gold/5 rounded-full mb-5">
            בלוג מקצועי
          </span>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-5">
            מדריכים וטיפים
            <br />
            <span className="gold-shimmer">למשכנתא חכמה</span>
          </h1>
          <p className="text-white/55 text-lg max-w-2xl mx-auto">
            ידע מקצועי שיעזור לך לקבל החלטות נכונות — ולחסוך עשרות אלפי שקלים
          </p>
        </div>
      </section>

      {/* ── Categories filter ────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? "gold-gradient-bg text-dark shadow-lg shadow-gold/20"
                  : "bg-dark-card border border-dark-border text-white/50 hover:border-gold/40 hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Posts ────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 pb-24">

        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 text-white/30 text-lg">
            אין כתבות בקטגוריה זו עדיין
          </div>
        ) : (
          <>
            {/* Featured */}
            {featured && (
              <Link href={`/blog/${featured.slug}`} className="group block mb-10">
                <article className={`relative bg-gradient-to-br ${featured.gradient} border border-dark-border rounded-3xl overflow-hidden hover:border-gold/40 transition-all duration-300`}>
                  <div className="absolute top-0 left-0 right-0 h-1 gold-gradient-bg" />
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="flex items-center justify-center p-12 relative">
                      <div className="text-[120px] leading-none group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl">
                        {featured.icon}
                      </div>
                      <div className="absolute top-6 right-6 gold-gradient-bg text-dark text-xs font-black px-3 py-1 rounded-full">
                        מומלץ
                      </div>
                    </div>
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <span className={`self-start px-3 py-1 rounded-full text-xs font-bold border mb-4 ${featured.categoryBg} ${featured.categoryColor}`}>
                        {featured.category}
                      </span>
                      <h2 className="text-2xl lg:text-3xl font-black text-white group-hover:text-gold transition-colors duration-300 mb-4 leading-tight">
                        {featured.title}
                      </h2>
                      <p className="text-white/55 leading-relaxed mb-6">{featured.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featured.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 bg-dark/60 border border-dark-border rounded text-xs text-white/40">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-white/30 text-sm border-t border-dark-border pt-4">
                        <span>📅 {featured.date}</span>
                        <span className="flex items-center gap-2">
                          ⏱ {featured.readTime}
                          <span className="text-gold group-hover:-translate-x-1 transition-transform duration-300">←</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            )}

            {/* Rest */}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                    <article className={`relative bg-gradient-to-br ${post.gradient} border border-dark-border rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-300 h-full flex flex-col hover:-translate-y-1 hover:shadow-xl`}>
                      <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, transparent, ${post.accentColor}, transparent)` }} />
                      <div className="flex items-center justify-center py-8">
                        <div className="text-7xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                          {post.icon}
                        </div>
                      </div>
                      <div className="px-6 pb-6 flex flex-col flex-1">
                        <span className={`self-start px-3 py-1 rounded-full text-xs font-bold border mb-3 ${post.categoryBg} ${post.categoryColor}`}>
                          {post.category}
                        </span>
                        <h2 className="text-lg font-black text-white group-hover:text-gold transition-colors duration-300 mb-3 leading-snug flex-1">
                          {post.title}
                        </h2>
                        <p className="text-white/45 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {post.tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 bg-dark/60 border border-dark-border rounded text-xs text-white/35">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between text-white/25 text-xs border-t border-dark-border pt-3 mt-auto">
                          <span>{post.date}</span>
                          <span className="flex items-center gap-1">
                            {post.readTime}
                            <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">←</span>
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.07)_0%,_transparent_70%)] pointer-events-none" />
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            יש לך שאלה על <span className="gold-gradient">המשכנתא שלך?</span>
          </h2>
          <p className="text-white/50 text-lg mb-8">
            פגישת ייעוץ ראשונה חינם — ויכולה לחסוך לך הרבה כסף.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 gold-gradient-bg text-dark font-black text-lg rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-gold/20"
          >
            קבע פגישה חינם
          </Link>
        </div>
      </section>

    </main>
  );
}