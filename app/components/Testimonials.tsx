const testimonials = [
  {
    name: "משפחת כהן",
    location: "רחובות",
    text: 'חסכנו כ-120,000 ש"ח לאורך חיי המשכנתא. שירות מקצועי ואישי ברמה אחרת.',
    stars: 5,
    initials: "כ",
  },
  {
    name: "דני לוי",
    location: "תל אביב",
    text: "מחזרנו משכנתא ישנה וקיבלנו ריבית נמוכה בהרבה ממה שציפינו. ממליץ בחום!",
    stars: 5,
    initials: "ד",
  },
  {
    name: "שרה ואלי",
    location: "ירושלים",
    text: "ליווי מדהים, הסבר מלא בכל שלב. טל תמיד היה זמין לשאלות.",
    stars: 5,
    initials: "ש",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-1.5 text-sm font-semibold text-gold border border-gold/30 bg-gold/5 rounded-full mb-4">
            לקוחות ממליצים
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            מה אומרים <span className="gold-gradient">הלקוחות?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-dark-card border border-dark-border rounded-2xl p-7 hover:border-gold/30 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.285-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.951-.69l1.286-3.957z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/75 leading-relaxed mb-6 italic">&quot;{t.text}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center text-dark font-black text-sm shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-dark-card border border-dark-border rounded-2xl px-6 py-4">
            <span className="text-3xl">⭐</span>
            <div className="text-right">
              <p className="font-black text-white text-lg">4.9/5 בגוגל</p>
              <p className="text-white/40 text-sm">מבוסס על 87 ביקורות</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}