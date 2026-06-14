"use server";

import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type ContactFormState = {
  success: boolean;
  error: string | null;
  fieldErrors: Record<string, string[]>;
};

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    service: formData.get("service"),
    budget: formData.get("budget"),
    message: formData.get("message"),
  };

  const parsed = ContactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      error: "Please fix the errors below.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const { name, email, phone, service, budget, message } = parsed.data;

  // Send via email using Resend HTTP API (no SDK needed, avoids edge runtime issues)
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (RESEND_API_KEY) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Orayn Contact Form <onboarding@resend.dev>",
          to: ["temidaniel124@gmail.com"],
          subject: `New Enquiry from ${name} — Orayn Website`,
          html: `
<div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#0F1B2D;color:#fff;padding:32px;border-radius:8px">
  <div style="border-bottom:1px solid rgba(196,154,40,0.3);padding-bottom:20px;margin-bottom:24px">
    <p style="color:#C49A28;font-size:11px;text-transform:uppercase;letter-spacing:0.15em;margin:0 0 6px">New Project Enquiry</p>
    <h2 style="font-size:22px;font-weight:700;margin:0;color:#fff">Orayn Digital Agency</h2>
  </div>
  <table style="width:100%;border-collapse:collapse">
    <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.07);color:rgba(255,255,255,0.4);font-size:12px;width:130px">Name</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.07);color:#fff;font-size:13px">${name}</td></tr>
    <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.07);color:rgba(255,255,255,0.4);font-size:12px">Email</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.07);color:#C49A28;font-size:13px"><a href="mailto:${email}" style="color:#C49A28">${email}</a></td></tr>
    ${phone ? `<tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.07);color:rgba(255,255,255,0.4);font-size:12px">Phone</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.07);color:#fff;font-size:13px">${phone}</td></tr>` : ""}
    ${service ? `<tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.07);color:rgba(255,255,255,0.4);font-size:12px">Service</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.07);color:#fff;font-size:13px">${service}</td></tr>` : ""}
    ${budget ? `<tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.07);color:rgba(255,255,255,0.4);font-size:12px">Budget</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.07);color:#fff;font-size:13px">${budget}</td></tr>` : ""}
  </table>
  <div style="margin-top:24px;padding:20px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);border-radius:6px">
    <p style="color:rgba(255,255,255,0.4);font-size:11px;text-transform:uppercase;letter-spacing:0.12em;margin:0 0 10px">Message</p>
    <p style="color:#fff;font-size:13px;line-height:1.7;margin:0;white-space:pre-wrap">${message}</p>
  </div>
  <p style="margin-top:24px;color:rgba(255,255,255,0.2);font-size:11px;text-align:center">Sent from orayn.studio contact form</p>
</div>`,
        }),
      });
    } catch (err) {
      console.error("[Orayn] Resend email error:", err);
    }
  }

  // Also save to Supabase
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (supabaseUrl && supabaseKey) {
    try {
      const supabase = createClient(supabaseUrl, supabaseKey, {
        auth: { detectSessionInUrl: false, persistSession: false },
      });
      await supabase.from("contact_inquiries").insert({
        full_name: name,
        email,
        phone: phone || null,
        service_type: service || null,
        budget_range: budget || null,
        message,
        source: "website",
      });
    } catch {
      // Non-fatal
    }
  }

  return { success: true, error: null, fieldErrors: {} };
}
