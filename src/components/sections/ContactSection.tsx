"use client";

import { useActionState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { MessageSquare, Phone, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/app/actions";

const contactSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters."),
  business_name: z.string().min(1, "Business name is required."),
  phone: z.string().min(7, "Phone number is required."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormData = z.infer<typeof contactSchema>;

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export default function ContactSection() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    if (state.success) {
      reset();
      formRef.current?.reset();
    }
  }, [state.success, reset]);

  return (
    <section id="contact" className="py-24 bg-orayn-light" aria-label="Contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
          >
            <span className="font-inter text-xs font-semibold text-orayn-gold uppercase tracking-widest">
              Get in Touch
            </span>
            <h2 className="mt-3 section-heading">Start Your Project Today</h2>
            <p className="mt-4 font-inter text-base text-orayn-gray leading-relaxed max-w-md">
              Send us a message and we will respond within 24 hours. Or reach us
              directly on WhatsApp — we are available 7 days a week.
            </p>

            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2348123121554"}?text=Hi%20Orayn%2C%20I%27m%20interested%20in%20getting%20a%20website%20for%20my%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 px-6 py-3.5 bg-[#25D366] text-white font-inter text-sm font-semibold rounded-orayn hover:bg-[#1ebe5d] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
            >
              <MessageSquare size={18} aria-hidden="true" />
              Chat on WhatsApp
            </a>

            <div className="mt-8 flex items-center gap-3 text-orayn-gray">
              <Phone
                size={16}
                className="flex-shrink-0 text-orayn-navy"
                aria-hidden="true"
              />
              <span className="font-inter text-sm">+234 812 312 1554</span>
            </div>

            <div className="mt-10 flex flex-col gap-4">
              {[
                "We build a free demo before asking for payment.",
                "You review the live site before committing.",
                "7–10 business day delivery on standard projects.",
              ].map((note) => (
                <div key={note} className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    className="flex-shrink-0 mt-0.5 text-orayn-green"
                    aria-hidden="true"
                  />
                  <span className="font-inter text-sm text-orayn-gray">
                    {note}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="card">
              <h3 className="font-sora text-lg font-semibold text-orayn-navy">
                Send a Message
              </h3>

              {state.success && (
                <div
                  role="alert"
                  className="mt-5 flex items-start gap-3 p-4 bg-orayn-green-bg border border-orayn-green/30 rounded-orayn"
                >
                  <CheckCircle2
                    size={18}
                    className="flex-shrink-0 mt-0.5 text-orayn-green"
                    aria-hidden="true"
                  />
                  <p className="font-inter text-sm text-orayn-green font-medium">
                    {state.message}
                  </p>
                </div>
              )}

              {!state.success && state.message && (
                <div
                  role="alert"
                  className="mt-5 flex items-start gap-3 p-4 bg-orayn-red-bg border border-orayn-red/30 rounded-orayn"
                >
                  <AlertCircle
                    size={18}
                    className="flex-shrink-0 mt-0.5 text-orayn-red"
                    aria-hidden="true"
                  />
                  <p className="font-inter text-sm text-orayn-red font-medium">
                    {state.message}
                  </p>
                </div>
              )}

              <form
                ref={formRef}
                action={formAction}
                className="mt-6 flex flex-col gap-5"
                noValidate
              >
                {/* Full Name */}
                <div>
                  <label htmlFor="full_name" className="label">
                    Full Name{" "}
                    <span className="text-orayn-red" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    {...register("full_name")}
                    id="full_name"
                    name="full_name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    className={`input-field ${errors.full_name || state.errors?.full_name ? "input-error" : ""}`}
                    aria-describedby={
                      errors.full_name ? "full_name_error" : undefined
                    }
                    aria-invalid={!!errors.full_name}
                    aria-required="true"
                  />
                  {(errors.full_name || state.errors?.full_name) && (
                    <p
                      id="full_name_error"
                      role="alert"
                      className="mt-1.5 font-inter text-xs text-orayn-red"
                    >
                      {errors.full_name?.message ??
                        state.errors?.full_name?.[0]}
                    </p>
                  )}
                </div>

                {/* Business Name */}
                <div>
                  <label htmlFor="business_name" className="label">
                    Business Name{" "}
                    <span className="text-orayn-red" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    {...register("business_name")}
                    id="business_name"
                    name="business_name"
                    type="text"
                    placeholder="Your business or company name"
                    className={`input-field ${errors.business_name || state.errors?.business_name ? "input-error" : ""}`}
                    aria-describedby={
                      errors.business_name ? "business_name_error" : undefined
                    }
                    aria-invalid={!!errors.business_name}
                    aria-required="true"
                  />
                  {(errors.business_name || state.errors?.business_name) && (
                    <p
                      id="business_name_error"
                      role="alert"
                      className="mt-1.5 font-inter text-xs text-orayn-red"
                    >
                      {errors.business_name?.message ??
                        state.errors?.business_name?.[0]}
                    </p>
                  )}
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="label">
                      Phone{" "}
                      <span className="text-orayn-red" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      {...register("phone")}
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+234 800 000 0000"
                      className={`input-field ${errors.phone || state.errors?.phone ? "input-error" : ""}`}
                      aria-describedby={
                        errors.phone ? "phone_error" : undefined
                      }
                      aria-invalid={!!errors.phone}
                      aria-required="true"
                    />
                    {(errors.phone || state.errors?.phone) && (
                      <p
                        id="phone_error"
                        role="alert"
                        className="mt-1.5 font-inter text-xs text-orayn-red"
                      >
                        {errors.phone?.message ?? state.errors?.phone?.[0]}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="label">
                      Email{" "}
                      <span className="text-orayn-red" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      {...register("email")}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className={`input-field ${errors.email || state.errors?.email ? "input-error" : ""}`}
                      aria-describedby={
                        errors.email ? "email_error" : undefined
                      }
                      aria-invalid={!!errors.email}
                      aria-required="true"
                    />
                    {(errors.email || state.errors?.email) && (
                      <p
                        id="email_error"
                        role="alert"
                        className="mt-1.5 font-inter text-xs text-orayn-red"
                      >
                        {errors.email?.message ?? state.errors?.email?.[0]}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="label">
                    Message{" "}
                    <span className="text-orayn-red" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your business and what you are looking to build..."
                    className={`input-field resize-none ${errors.message || state.errors?.message ? "input-error" : ""}`}
                    aria-describedby={
                      errors.message ? "message_error" : undefined
                    }
                    aria-invalid={!!errors.message}
                    aria-required="true"
                  />
                  {(errors.message || state.errors?.message) && (
                    <p
                      id="message_error"
                      role="alert"
                      className="mt-1.5 font-inter text-xs text-orayn-red"
                    >
                      {errors.message?.message ?? state.errors?.message?.[0]}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="btn-primary w-full py-3.5 text-sm"
                  aria-busy={isPending}
                >
                  {isPending ? "Sending..." : "Send Message"}
                </button>

                <p className="font-inter text-xs text-orayn-gray text-center">
                  We respond within 24 hours. No spam, ever.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
