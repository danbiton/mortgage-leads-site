const steps = [
  {
    num: "01",
    icon: "💬",
    title: "פגישת היכרות חינם",
    desc: "נבין את הצרכים שלך, נבחן את האפשרויות ונסביר את כל הדרך קדימה.",
  },
  {
    num: "02",
    icon: "📐",
    title: "בניית תמהיל",
    desc: "נתאים את מסלולי המשכנתא המתאימים ביותר לפרופיל הפיננסי שלך.",
  },
  {
    num: "03",
    icon: "🤝",
    title: 'מו"מ מול הבנקים',
    desc: "נייצג אותך מול מספר בנקים במקביל ונשיג את הריביות הטובות ביותר.",
  },
  {
    num: "04",
    icon: "🗝️",
    title: "חתימה ומסירה",
    desc: "ליווי מלא בחתימה על המשכנתא עד לקבלת המפתח לדירה.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-dark-mid relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.06)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-1.5 text-sm font-semibold text-gold border border-gold/30 bg-gold/5 rounded-full mb-4">
            התהליך
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            איך זה <span className="gold-gradient">עובד?</span>
          </h2>
          <p className="text-white/50 text-lg">תהליך פשוט וברור — אנחנו מטפלים בהכל</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-gold/40 hover:bg-dark-card/80 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center text-dark font-black text-sm shrink-0">
                  {step.num}
                </span>
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}