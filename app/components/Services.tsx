const services = [
  {
    icon: "🏠",
    title: "משכנתא לרכישת דירה",
    shortDesc: "ליווי מלא מהאישור ועד החתימה",
    fullDesc:
      "נבנה עבורך את התמהיל האופטימלי, נייצג אותך מול הבנקים ונוודא שתקבל את הריבית הכי טובה האפשרית.",
    bg: "bg-[#1a1a1a]",
    backBg: "bg-gradient-to-br from-gold-dark to-gold",
  },
  {
    icon: "🔄",
    title: "מחזור משכנתא",
    shortDesc: "חסוך עשרות אלפי שקלים",
    fullDesc:
      "נבדוק את המשכנתא הקיימת שלך ונמצא אם ניתן לחסוך בריבית. רוב הלקוחות חוסכים אלפי שקלים בשנה.",
    bg: "bg-[#1a1a1a]",
    backBg: "bg-gradient-to-br from-gold-dark to-gold",
  },
  {
    icon: "🏗️",
    title: "בנייה ושיפוץ",
    shortDesc: "מימון לפרויקטים מכל סוג",
    fullDesc:
      "בנייה עצמית, תוספות בנייה ושיפוץ — ניהול שלבי המשיכות ותיאום מול הגורמים הרלוונטיים.",
    bg: "bg-[#1a1a1a]",
    backBg: "bg-gradient-to-br from-gold-dark to-gold",
  },
  {
    icon: "📊",
    title: "ייעוץ פיננסי כולל",
    shortDesc: "תכנון נכון לטווח הארוך",
    fullDesc:
      "ניתוח מלא של המצב הפיננסי שלך, כושר ההחזר ובניית תוכנית שתשרת אותך לשנים קדימה.",
    bg: "bg-[#1a1a1a]",
    backBg: "bg-gradient-to-br from-gold-dark to-gold",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-dark">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-1.5 text-sm font-semibold text-gold border border-gold/30 bg-gold/5 rounded-full mb-4">
            השירותים שלנו
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            איך נוכל <span className="gold-gradient">לעזור לך?</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            העבר את העכבר על כל שירות לפרטים נוספים
          </p>
        </div>

        {/* Flip cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="flip-card h-64">
              <div className="flip-card-inner">

                {/* Front */}
                <div className={`flip-card-front ${s.bg} border border-white/10 flex flex-col items-center justify-center p-6 text-center`}>
                  <span className="text-5xl mb-4 block">{s.icon}</span>
                  <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-gold/80 text-sm font-medium">{s.shortDesc}</p>
                  <p className="text-white/30 text-xs mt-4">העבר עכבר לפרטים ←</p>
                </div>

                {/* Back */}
                <div className={`flip-card-back ${s.backBg} flex flex-col items-center justify-center p-6 text-center`}>
                  <span className="text-4xl mb-3 block">{s.icon}</span>
                  <h3 className="text-lg font-black text-dark mb-3">{s.title}</h3>
                  <p className="text-dark/80 text-sm leading-relaxed">{s.fullDesc}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}