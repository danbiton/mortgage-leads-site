"use client";

import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");

        const form = e.currentTarget;
        const data = {
            name: (form.elements.namedItem("name") as HTMLInputElement).value,
            phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
            message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
            consent: (form.elements.namedItem("consent") as HTMLInputElement).checked,
        };

        try {
            const res = await axios.post("/api/contact", data);
            console.log("Response: ", res.data)
            setStatus("success");
        } catch (err: any) {
            setStatus("error");
            setErrorMsg(err.response?.data?.error || "שגיאה בשליחה, נסה שוב");
        }
    }

        if (status === "success") {
            return (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full gold-gradient-bg flex items-center justify-center text-3xl mb-4 text-dark font-black">
                        ✓
                    </div>
                    <h3 className="text-xl font-black text-white mb-2">הפרטים נשלחו בהצלחה!</h3>
                    <p className="text-white/50">טל יחזור אליך תוך 24 שעות</p>
                </div>
            );
        }

        return (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                {/* Name */}
                <div className="relative">
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder=" "
                        className="peer w-full bg-transparent border-b border-white/15 focus:border-gold outline-none py-3 text-white placeholder-transparent transition-colors text-base"
                    />
                    <label className="absolute right-0 top-3 text-white/40 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs">
                        שם *
                    </label>
                    <span className="absolute left-0 bottom-0 h-px w-0 bg-gold transition-all duration-300 peer-focus:w-full" />
                </div>

                {/* Phone */}
                <div className="relative">
                    <input
                        type="tel"
                        name="phone"
                        required
                        placeholder=" "
                        className="peer w-full bg-transparent border-b border-white/15 focus:border-gold outline-none py-3 text-white placeholder-transparent transition-colors text-base"
                    />
                    <label className="absolute right-0 top-3 text-white/40 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs">
                        טלפון *
                    </label>
                    <span className="absolute left-0 bottom-0 h-px w-0 bg-gold transition-all duration-300 peer-focus:w-full" />
                </div>

                {/* Email */}
                <div className="relative">
                    <input
                        type="email"
                        name="email"
                        placeholder=" "
                        className="peer w-full bg-transparent border-b border-white/15 focus:border-gold outline-none py-3 text-white placeholder-transparent transition-colors text-base"
                    />
                    <label className="absolute right-0 top-3 text-white/40 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs">
                        מייל
                    </label>
                    <span className="absolute left-0 bottom-0 h-px w-0 bg-gold transition-all duration-300 peer-focus:w-full" />
                </div>

                {/* Message */}
                <div className="relative">
                    <textarea
                        name="message"
                        rows={3}
                        placeholder=" "
                        className="peer w-full bg-transparent border-b border-white/15 focus:border-gold outline-none py-3 text-white placeholder-transparent transition-colors text-base resize-none"
                    />
                    <label className="absolute right-0 top-3 text-white/40 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs">
                        במה נוכל לעזור? (בכמה מילים)
                    </label>
                    <span className="absolute left-0 bottom-0 h-px w-0 bg-gold transition-all duration-300 peer-focus:w-full" />
                </div>

                {/* Consent */}
                <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" name="consent" className="mt-1 accent-gold shrink-0" />
                    <span className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                        אני מאשר/ת קבלת חומר פרסומי ולחזור אליי בהודעת סמס ו/או בדוא&quot;ל.
                    </span>
                </label>

                {/* Error */}
                {status === "error" && (
                    <p className="text-red-400 text-sm text-center">{errorMsg}</p>
                )}

                {/* Submit */}
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 gold-gradient-bg text-dark font-black text-lg rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-gold/20 mt-2 disabled:opacity-50"
                >
                    {status === "loading" ? "שולח..." : "תחזרו אליי >"}
                </button>
            </form>
        );
    }