import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
   tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(req: NextRequest) {
  try {
    console.log("body: ", req.body)
    const body = await req.json();
    const { name, phone, email, message, consent } = body;
    console.log("body: ", body)

    // Validation
    if (!name || !phone) {
      return NextResponse.json(
        { error: "שם וטלפון הם שדות חובה" },
        { status: 400 }
      );
    }

    // Email HTML
    const emailHtml = `
      <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        
        <div style="background: linear-gradient(135deg, #0f1f3d, #1a3560); padding: 30px; border-radius: 12px 12px 0 0;">
          <h1 style="color: #D4AF37; margin: 0; font-size: 24px;">🎯 ליד חדש מהאתר!</h1>
          <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0; font-size: 14px;">
            התקבלה פנייה חדשה דרך אתר ייעוץ המשכנתאות של טל כהן
          </p>
        </div>

        <div style="background: #1a1a1a; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #272727;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 14px 0; border-bottom: 1px solid #272727; color: #D4AF37; font-weight: bold; width: 100px;">שם:</td>
              <td style="padding: 14px 0; border-bottom: 1px solid #272727; color: #ffffff; font-size: 16px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 14px 0; border-bottom: 1px solid #272727; color: #D4AF37; font-weight: bold;">טלפון:</td>
              <td style="padding: 14px 0; border-bottom: 1px solid #272727;">
                <a href="tel:${phone}" style="color: #D4AF37; font-size: 18px; font-weight: bold; text-decoration: none;">📞 ${phone}</a>
              </td>
            </tr>
            ${email ? `
            <tr>
              <td style="padding: 14px 0; border-bottom: 1px solid #272727; color: #D4AF37; font-weight: bold;">מייל:</td>
              <td style="padding: 14px 0; border-bottom: 1px solid #272727;">
                <a href="mailto:${email}" style="color: #D4AF37; text-decoration: none;">✉️ ${email}</a>
              </td>
            </tr>` : ""}
            ${message ? `
            <tr>
              <td style="padding: 14px 0; color: #D4AF37; font-weight: bold; vertical-align: top;">הודעה:</td>
              <td style="padding: 14px 0; color: #ffffff; line-height: 1.6;">${message}</td>
            </tr>` : ""}
          </table>

          <div style="margin-top: 24px; padding: 16px; background: rgba(212,175,55,0.08); border-radius: 8px; border: 1px solid rgba(212,175,55,0.2);">
            <p style="color: rgba(255,255,255,0.4); font-size: 12px; margin: 0;">
              📅 התקבל: ${new Date().toLocaleString("he-IL")} &nbsp;|&nbsp; 
              הסכמה לפרסום: ${consent ? "✅ כן" : "❌ לא"}
            </p>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"טל כהן — ייעוץ משכנתאות" <${process.env.GMAIL_USER}>`,
      to: [
        process.env.NOTIFY_EMAIL_1 as string,
        process.env.NOTIFY_EMAIL_2 as string,
      ],
      subject: `🎯 ליד חדש — ${name} | ${phone}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { error: "שגיאה בשליחת הטופס, אנא נסה שוב" },
      { status: 500 }
    );
  }
}