import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/about", label: "אודות" },
  { href: "/mortgage-calculator", label: "מחשבון משכנתא" },
  { href: "/mortgage-refinance", label: "מחזור משכנתא" },
  { href: "/blog", label: "בלוג" },
  { href: "/contact", label: "צור קשר" },
];

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5 text-white/50 text-sm">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <Image
            src="/icons/logo.png"
            alt="טל כהן — יועץ משכנתאות"
            width={120}
            height={40}
            className="h-12 w-auto object-contain mb-4"
          />
          <p className="leading-relaxed text-white/40">
            ייעוץ אישי ומקצועי — נלחם עבורך מול הבנקים להשיג את הריבית הטובה ביותר.
          </p>
        </div>

        <div>
          <span className="block font-bold text-white mb-4">ניווט מהיר</span>
          <ul className="flex flex-col gap-2.5">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="block font-bold text-white mb-4">יצירת קשר</span>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="tel:053-7199663" className="hover:text-gold transition-colors">
                📞 053-7199663
              </a>
            </li>
            <li>
              <a href="mailto:Talcohen663@gmail.com" className="hover:text-gold transition-colors">
                ✉️ Talcohen663@gmail.com
              </a>
            </li>
          </ul>
          <a
            href="https://wa.me/972537199663"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 px-4 py-2 bg-green-700 hover:bg-green-600 text-white text-sm font-bold rounded-lg transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.112 1.522 5.84L.044 23.956l6.288-1.455A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.844 0-3.574-.483-5.073-1.33l-.364-.214-3.733.864.945-3.624-.237-.375A9.964 9.964 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/5 py-4 text-center text-xs text-white/20">
        © {new Date().getFullYear()} טל כהן — יועץ משכנתאות. כל הזכויות שמורות.
      </div>
    </footer>
  );
}