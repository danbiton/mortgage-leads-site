"use client";

import Link from "next/link";
import { useState, useCallback } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מחשבון משכנתא חינם - חישוב תמהיל והחזר חודשי",
  description: "חשב תמהיל משכנתא בקלות – הזן סכום, ריבית ותקופה וקבל החזר חודשי מדויק.",
};

const TRACK_TYPES = ["פריים", "קבועה לא צמודה", "קבועה צמודה מדד", "משתנה כל 5 שנים", "משתנה כל שנה"];

interface Track {
  id: number;
  type: string;
  amount: string;
  years: string;
  interest: string;
}

interface Result {
  type: string;
  amount: number;
  years: number;
  monthly: number;
  totalPay: number;
  totalInterest: number;
}

function calcMonthly(principal: number, annualRate: number, years: number): number {
  if (!principal || !annualRate || !years) return 0;
  const r = annualRate / 100 / 12;
  const n = years * 12;
  if (r === 0) return principal / n;
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

let nextId = 2;

export default function MortgageCalculatorPage() {
  const [totalLoan, setTotalLoan] = useState("");
  const [tracks, setTracks] = useState<Track[]>([
    { id: 1, type: "פריים", amount: "", years: "25", interest: "6.0" },
  ]);
  const [results, setResults] = useState<Result[] | null>(null);
  const [error, setError] = useState("");

  const totalLoanNum = parseFloat(totalLoan) || 0;
  const totalAllocated = tracks.reduce((s, t) => s + (parseFloat(t.amount) || 0), 0);
  const remaining = totalLoanNum - totalAllocated;
  const isComplete = totalLoanNum > 0 && Math.abs(remaining) < 1;
  const isOver = remaining < -0.5;

  const addTrack = () => {
    setTracks((prev) => [...prev, { id: nextId++, type: "קבועה לא צמודה", amount: "", years: "25", interest: "4.0" }]);
    setResults(null);
  };

  const removeTrack = (id: number) => {
    setTracks((prev) => prev.filter((t) => t.id !== id));
    setResults(null);
  };

  const updateTrack = useCallback((id: number, field: keyof Track, value: string) => {
    setTracks((prev) => prev.map((t) => (t.id === id ? { ...t, [field]: value } : t)));
    setResults(null);
  }, []);

  const fillRemaining = (id: number) => {
    if (remaining > 0) {
      updateTrack(id, "amount", remaining.toFixed(0));
    }
  };

  const handleCalculate = () => {
    setError("");
    if (!totalLoanNum) { setError("נא להזין סכום הלוואה כולל"); return; }
    if (isOver) { setError("סכום המסלולים חורג מסכום ההלוואה הכולל"); return; }
    if (!isComplete) { setError(`נותר ₪${remaining.toLocaleString()} שלא חולק למסלולים`); return; }

    const computed: Result[] = tracks.map((t) => {
      const principal = parseFloat(t.amount) || 0;
      const rate = parseFloat(t.interest) || 0;
      const yrs = parseFloat(t.years) || 0;
      const monthly = calcMonthly(principal, rate, yrs);
      const totalPay = monthly * yrs * 12;
      return { type: t.type, amount: principal, years: yrs, monthly, totalPay, totalInterest: totalPay - principal };
    });

    setResults(computed);
    setTimeout(() => {
      document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const fmt = (n: number) => "₪" + Math.round(n).toLocaleString();

  const totalMonthly   = results?.reduce((s, r) => s + r.monthly, 0) ?? 0;
  const totalPay       = results?.reduce((s, r) => s + r.totalPay, 0) ?? 0;
  const totalInterest  = results?.reduce((s, r) => s + r.totalInterest, 0) ?? 0;

  return (
    <main className="min-h-screen bg-dark">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative py-14 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.07)_0%,_transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[160px] font-black text-white/[0.025] leading-none">תמהיל</span>
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <span className="inline-block px-5 py-1.5 text-sm font-semibold text-gold border border-gold/30 bg-gold/5 rounded-full mb-4">
            כלי מקצועי חינמי
          </span>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-3">
            <span className="gold-shimmer">מחשבון תמהיל משכנתא</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            בנה את תמהיל המשכנתא שלך — הוסף מסלולים וחלק את סכום ההלוואה
          </p>
        </div>
      </section>

      {/* ── Form — light ─────────────────────────────────────── */}
      <section className="bg-slate-50 py-12 relative">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 5 L55 20 L55 40 L30 55 L5 40 L5 20Z' fill='none' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-5xl mx-auto px-6 relative z-10">

          {/* Step 1 — total loan */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-6 mb-6">
            <h2 className="font-black text-slate-800 text-lg mb-4 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full gold-gradient-bg text-dark text-sm flex items-center justify-center font-black shrink-0">1</span>
              סכום ההלוואה הכולל
            </h2>
            <div className="flex gap-3 items-center flex-wrap">
              <div className="relative flex-1 min-w-[200px]">
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₪</span>
                <input
                  type="number"
                  value={totalLoan}
                  onChange={(e) => { setTotalLoan(e.target.value); setResults(null); }}
                  placeholder="1,500,000"
                  className="w-full pr-10 pl-4 py-3 border-2 border-slate-200 rounded-xl text-slate-800 font-bold text-lg focus:border-gold focus:outline-none transition-colors"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {["800000","1000000","1500000","2000000"].map((v) => (
                  <button key={v} onClick={() => { setTotalLoan(v); setResults(null); }}
                    className="px-3 py-2 text-xs font-bold bg-slate-100 hover:bg-gold/10 hover:text-gold border border-slate-200 hover:border-gold/30 rounded-lg transition-colors text-slate-500">
                    ₪{parseInt(v).toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            {/* Progress bar */}
            {totalLoanNum > 0 && (
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-500">חולק: ₪{Math.round(totalAllocated).toLocaleString()}</span>
                  <span className={`font-bold ${isOver ? "text-red-500" : isComplete ? "text-emerald-600" : "text-amber-600"}`}>
                    {isComplete ? "✓ הסכום חולק במלואו" : isOver ? `חריגה: ₪${Math.abs(remaining).toLocaleString()}` : `נותר: ₪${Math.round(remaining).toLocaleString()}`}
                  </span>
                </div>
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${isOver ? "bg-red-400" : isComplete ? "bg-emerald-500" : "gold-gradient-bg"}`}
                    style={{ width: `${Math.min((totalAllocated / totalLoanNum) * 100, 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Step 2 — tracks */}
          <div className="mb-6">
            <h2 className="font-black text-slate-800 text-lg mb-4 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full gold-gradient-bg text-dark text-sm flex items-center justify-center font-black shrink-0">2</span>
              מסלולי המשכנתא
            </h2>

            <div className="flex flex-col gap-4">
              {tracks.map((track, idx) => {
                const isLast = idx === tracks.length - 1;
                return (
                  <div key={track.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    {/* Header */}
                    <div className="bg-dark px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full gold-gradient-bg text-dark text-xs flex items-center justify-center font-black shrink-0">
                          {idx + 1}
                        </span>
                        <select
                          value={track.type}
                          onChange={(e) => updateTrack(track.id, "type", e.target.value)}
                          className="bg-transparent text-white font-bold text-sm focus:outline-none cursor-pointer"
                        >
                          {TRACK_TYPES.map((t) => (
                            <option key={t} value={t} className="bg-dark text-white">{t}</option>
                          ))}
                        </select>
                      </div>
                      {tracks.length > 1 && (
                        <button onClick={() => removeTrack(track.id)}
                          className="text-white/30 hover:text-red-400 transition-colors text-lg leading-none px-1">
                          ✕
                        </button>
                      )}
                    </div>

                    {/* Inputs */}
                    <div className="p-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* Amount */}
                      <div>
                        <label className="text-slate-500 text-xs font-semibold block mb-1.5">סכום (₪)</label>
                        <div className="relative">
                          <input
                            type="number"
                            value={track.amount}
                            onChange={(e) => updateTrack(track.id, "amount", e.target.value)}
                            placeholder="500,000"
                            className="w-full px-3 py-2.5 border-2 border-slate-200 rounded-lg text-slate-800 font-semibold text-sm focus:border-gold focus:outline-none transition-colors"
                          />
                          {isLast && remaining > 0.5 && (
                            <button onClick={() => fillRemaining(track.id)}
                              className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-gold font-bold hover:underline whitespace-nowrap">
                              מלא יתרה
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Years */}
                      <div>
                        <label className="text-slate-500 text-xs font-semibold block mb-1.5">תקופה</label>
                        <select
                          value={track.years}
                          onChange={(e) => updateTrack(track.id, "years", e.target.value)}
                          className="w-full px-3 py-2.5 border-2 border-slate-200 rounded-lg text-slate-800 font-semibold text-sm focus:border-gold focus:outline-none transition-colors"
                        >
                          {[5,10,15,20,25,30].map((y) => (
                            <option key={y} value={y}>{y} שנים</option>
                          ))}
                        </select>
                      </div>

                      {/* Interest */}
                      <div>
                        <label className="text-slate-500 text-xs font-semibold block mb-1.5">ריבית שנתית</label>
                        <div className="relative">
                          <input
                            type="number"
                            value={track.interest}
                            onChange={(e) => updateTrack(track.id, "interest", e.target.value)}
                            placeholder="4.5"
                            step="0.1"
                            className="w-full pr-3 pl-8 py-2.5 border-2 border-slate-200 rounded-lg text-slate-800 font-semibold text-sm focus:border-gold focus:outline-none transition-colors"
                          />
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-bold">%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {tracks.length < 5 && (
              <button onClick={addTrack}
                className="mt-4 w-full py-3 border-2 border-dashed border-slate-300 hover:border-gold/50 text-slate-400 hover:text-gold rounded-2xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2">
                <span className="text-xl leading-none">+</span> הוסף מסלול
              </button>
            )}
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm font-semibold">
              ⚠️ {error}
            </div>
          )}

          {/* Calculate button */}
          <button
            onClick={handleCalculate}
            className={`w-full py-4 font-black text-lg rounded-xl transition-all duration-200 shadow-lg ${
              isComplete
                ? "gold-gradient-bg text-dark hover:opacity-90 shadow-gold/20 cursor-pointer"
                : "bg-slate-200 text-slate-400 cursor-not-allowed"
            }`}
            disabled={!isComplete}
          >
            {isComplete ? "חשב תמהיל משכנתא ←" : totalLoanNum === 0 ? "הזן סכום הלוואה כולל" : isOver ? "סכום המסלולים חורג" : `נותר ₪${Math.round(remaining).toLocaleString()} לחלוקה`}
          </button>
          <p className="text-slate-400 text-xs text-center mt-2">
            * החישוב הוא לצורך הערכה בלבד ואינו מהווה הצעה מחייבת
          </p>
        </div>
      </section>

      {/* ── Results — dark ────────────────────────────────────── */}
      {results && (
        <section id="results" className="bg-dark py-14 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.06)_0%,_transparent_70%)] pointer-events-none" />

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <h2 className="font-black text-white text-2xl mb-8 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full gold-gradient-bg text-dark text-sm flex items-center justify-center font-black shrink-0">3</span>
              תוצאות התמהיל
            </h2>

            {/* 3 big numbers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-dark-card border border-dark-border rounded-2xl p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 gold-gradient-bg" />
                <p className="text-white/50 text-sm mb-2">סה״כ החזר חודשי</p>
                <strong className="text-4xl font-black gold-gradient">{fmt(totalMonthly)}</strong>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-2xl p-6 text-center">
                <p className="text-white/50 text-sm mb-2">סך כל ההחזרים</p>
                <strong className="text-2xl font-black text-white">{fmt(totalPay)}</strong>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-2xl p-6 text-center">
                <p className="text-white/50 text-sm mb-2">סך הריבית שתשלם</p>
                <strong className="text-2xl font-black text-red-400">{fmt(totalInterest)}</strong>
              </div>
            </div>

            {/* Per-track table */}
            <div className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden mb-8">
              <div className="grid grid-cols-5 px-5 py-3 border-b border-dark-border text-white/40 text-xs font-semibold">
                <span>מסלול</span>
                <span className="text-center">סכום</span>
                <span className="text-center">תקופה</span>
                <span className="text-center">חודשי</span>
                <span className="text-center">ריבית סה״כ</span>
              </div>
              {results.map((r, i) => (
                <div key={i} className="grid grid-cols-5 px-5 py-4 border-b border-dark-border last:border-0 text-sm items-center">
                  <span className="text-white font-bold">{r.type}</span>
                  <span className="text-center text-white/60">{fmt(r.amount)}</span>
                  <span className="text-center text-white/60">{r.years} שנים</span>
                  <span className="text-center text-gold font-black text-base">{fmt(r.monthly)}</span>
                  <span className="text-center text-red-400 font-semibold">{fmt(r.totalInterest)}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-dark-card border border-gold/20 rounded-2xl p-8 text-center">
              <p className="text-white font-black text-xl mb-2">
                רוצה ריבית נמוכה יותר?
              </p>
              <p className="text-white/50 mb-6">
                טל כהן ינהל עבורך מו״מ מול הבנקים ויוכל לשפר את הריביות שחישבת כאן
              </p>
              <Link href="/contact"
                className="inline-block px-10 py-4 gold-gradient-bg text-dark font-black text-lg rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-gold/20">
                קבע ייעוץ חינם עכשיו
              </Link>
            </div>
          </div>
        </section>
      )}

    </main>
  );
}