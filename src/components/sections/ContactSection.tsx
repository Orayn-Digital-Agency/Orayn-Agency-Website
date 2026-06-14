"use client";

import { useActionState, useRef, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/app/actions";

const INITIAL_STATE: ContactFormState = {
  success: false,
  error: null,
  fieldErrors: {},
};

const SERVICES = [
  "Website Design & Development",
  "Mobile App Development (iOS & Android)",
  "Web App / SaaS Platform",
  "n8n Automation & AI Workflow",
  "Other / Not Sure Yet",
] as const;

const BUDGETS = [
  "₦200,000 – ₦300,000 (Starter)",
  "₦350,000 – ₦500,000 (Business)",
  "₦600,000 – ₦1,000,000 (Premium)",
  "₦1,500,000+ (Platform / Enterprise)",
  "Not Sure — Need Guidance",
] as const;

const CONTACT_DETAILS = [
  {
    Icon: Mail,
    label: "Email",
    value: "temidaniel124@gmail.com",
    href: "mailto:temidaniel124@gmail.com",
  },
  {
    Icon: Phone,
    label: "WhatsApp",
    value: "+234 912 459 5511",
    href: "https://wa.me/2349124595511",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria",
    href: null,
  },
] as const;

export default function ContactSection() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    INITIAL_STATE,
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success]);

  const fieldError = (name: string) => state.fieldErrors[name]?.[0];

  return (
    <section id="contact" className="relative bg-orayn-darker py-28 lg:py-36">
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        aria-hidden="true"
      />

      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(196,154,40,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-px bg-orayn-gold" aria-hidden="true" />
            <span className="section-eyebrow">Get in Touch</span>
          </div>
          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Ready to Build Something{" "}
            <span className="text-orayn-gold">Real?</span>
          </h2>
          <p className="font-inter text-base text-white/50 leading-relaxed">
            Fill in the form and we will respond within 24 hours with a project
            brief template and a fixed quote. No obligation, no pressure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-14">
          {/* Form */}
          <div>
            {/* Success state */}
            {state.success ? (
              <div className="flex flex-col items-center justify-center py-20 gap-5 text-center">
                <div className="w-16 h-16 rounded-full bg-orayn-gold/10 border border-orayn-gold/30 flex items-center justify-center">
                  <CheckCircle
                    size={28}
                    className="text-orayn-gold"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-sora text-xl font-bold text-white mb-2">
                    Message Received
                  </h3>
                  <p className="font-inter text-sm text-white/50 max-w-xs leading-relaxed">
                    We will review your project brief and respond with a quote
                    within 24 hours.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="btn-outline text-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                action={formAction}
                noValidate
                className="flex flex-col gap-5"
              >
                {/* Global error */}
                {state.error && !state.success && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 p-4 bg-red-950/30 border border-red-500/20 rounded-sm"
                  >
                    <AlertCircle
                      size={16}
                      className="flex-shrink-0 mt-0.5 text-red-400"
                      aria-hidden="true"
                    />
                    <p className="font-inter text-sm text-red-300">
                      {state.error}
                    </p>
                  </div>
                )}

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Adebayo Temiloluwa"
                      aria-describedby={
                        fieldError("name") ? "name-error" : undefined
                      }
                      className={`input-field ${fieldError("name") ? "input-error" : ""}`}
                    />
                    {fieldError("name") && (
                      <p
                        id="name-error"
                        role="alert"
                        className="mt-1.5 font-inter text-xs text-red-400"
                      >
                        {fieldError("name")}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      aria-describedby={
                        fieldError("email") ? "email-error" : undefined
                      }
                      className={`input-field ${fieldError("email") ? "input-error" : ""}`}
                    />
                    {fieldError("email") && (
                      <p
                        id="email-error"
                        role="alert"
                        className="font-inter text-xs text-red-400 mt-1.5"
                      >
                        {fieldError("email")}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="label">
                    WhatsApp Number{" "}
                    <span className="normal-case font-normal text-white/20">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    placeholder="+234 912 459 5511"
                    className="input-field"
                  />
                </div>

                {/* Service + Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="service" className="label">
                      Service Type
                    </label>
                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      className="input-field"
                    >
                      <option value="" disabled>
                        Select a service...
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="label">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      defaultValue=""
                      className="input-field"
                    >
                      <option value="" disabled>
                        Select a budget...
                      </option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="label">
                    Project Brief *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe your business, what you need, and any specific features or requirements. The more detail you provide, the more accurate the quote."
                    aria-describedby={
                      fieldError("message") ? "message-error" : undefined
                    }
                    className={`input-field resize-none leading-relaxed ${fieldError("message") ? "input-error" : ""}`}
                  />
                  {fieldError("message") && (
                    <p
                      id="message-error"
                      role="alert"
                      className="font-inter text-xs text-red-400 mt-1.5"
                    >
                      {fieldError("message")}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={pending}
                  className="btn-primary self-start gap-2.5"
                >
                  {pending ? (
                    <>
                      <span
                        className="w-4 h-4 rounded-full border-2 border-orayn-dark/30 border-t-orayn-dark animate-spin"
                        aria-hidden="true"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={14} aria-hidden="true" />
                      Send Project Brief
                    </>
                  )}
                </button>

                <p className="font-inter text-xs text-white/20">
                  We respond within 24 hours on business days (Monday–Friday).
                  Your information is never shared or sold.
                </p>
              </form>
            )}
          </div>

          {/* Right column — contact info + trust signals */}
          <div className="flex flex-col gap-6">
            {/* Contact details */}
            <div className="flex flex-col gap-3">
              {CONTACT_DETAILS.map(({ Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 p-5 bg-white/[0.025] border border-white/[0.07] rounded-orayn group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-orayn-gold/10 border border-orayn-gold/20 flex items-center justify-center group-hover:bg-orayn-gold/15 transition-colors duration-200">
                    <Icon
                      size={16}
                      className="text-orayn-gold"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-inter text-[10px] uppercase tracking-widest text-white/30 mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="font-inter text-sm text-white hover:text-orayn-gold transition-colors duration-200 break-all"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-inter text-sm text-white">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust block */}
            <div className="flex flex-col gap-4 p-6 bg-orayn-gold/[0.04] border border-orayn-gold/15 rounded-orayn">
              <div className="w-6 h-px bg-orayn-gold/60" aria-hidden="true" />
              <h4 className="font-sora text-base font-bold text-white">
                What to Expect
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  "Response within 24 hours",
                  "Fixed quote — no hourly billing",
                  "Build starts within 1 business day of payment",
                  "7-day delivery window",
                  "Source code delivered on completion",
                  "No lock-in. You own everything.",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span
                      className="w-1 h-1 rounded-full bg-orayn-gold/60 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="font-inter text-xs text-white/55 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp shortcut */}
            <a
              href="https://wa.me/2349124595511?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20a%20project%20with%20Orayn."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 p-5 bg-white/[0.025] border border-white/[0.07] rounded-orayn hover:border-orayn-gold/25 hover:bg-white/[0.04] transition-all duration-200 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-green-900/40 border border-green-700/30 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-green-400"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="font-inter text-sm font-semibold text-white">
                    Chat on WhatsApp
                  </p>
                  <p className="font-inter text-xs text-white/35">
                    For quick questions or urgent enquiries
                  </p>
                </div>
              </div>
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                className="text-white/20 group-hover:text-orayn-gold transition-colors duration-200"
                aria-hidden="true"
              >
                <path
                  d="M1 6h12M8 1l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
