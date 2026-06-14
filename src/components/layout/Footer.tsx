const FOOTER_LINKS = {
  Services: [
    { label: "Website Development", href: "#services" },
    { label: "Mobile App Development", href: "#services" },
    { label: "SaaS & Web Apps", href: "#services" },
    { label: "n8n Automation", href: "#services" },
  ],
  Company: [
    { label: "Our Work", href: "#work" },
    { label: "Pricing", href: "#pricing" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  Contact: [
    {
      label: "temidaniel124@gmail.com",
      href: "mailto:temidaniel124@gmail.com",
    },
    { label: "+234 9124595511", href: "https://wa.me/2349124595511" },
    { label: "Lagos, Nigeria", href: null },
  ],
} as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-orayn-darker border-t border-white/[0.06]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-14">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 border-2 border-orayn-gold rounded-sm flex items-center justify-center">
                <span className="font-sora text-xs font-bold text-orayn-gold">
                  O
                </span>
              </div>
              <span className="font-sora text-sm font-bold text-white tracking-[0.18em] uppercase">
                ORAYN
              </span>
            </div>

            <p className="font-inter text-sm text-white/40 leading-relaxed max-w-xs">
              Production-grade digital products for Nigerian businesses. Custom
              code. No templates. International standard.
            </p>

            {/* Stack tags */}
            <div className="flex flex-wrap gap-1.5">
              {["Next.js", "TypeScript", "Supabase", "React Native"].map(
                (t) => (
                  <span
                    key={t}
                    className="font-mono text-[9px] text-white/25 border border-white/[0.08] rounded-sm px-2 py-0.5"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>

            {/* Gold rule */}
            <div
              className="w-8 h-px bg-orayn-gold/40 mt-1"
              aria-hidden="true"
            />
            <p className="font-inter text-xs text-white/25 leading-relaxed">
              Nigerian-founded.
              <br />
              Operating since 2024.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group} className="flex flex-col gap-4">
              <h3 className="font-inter text-[10px] uppercase tracking-[0.18em] text-white/30 font-semibold">
                {group}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="font-inter text-sm text-white/45 hover:text-white transition-colors duration-200 focus:outline-none focus:text-orayn-gold"
                      >
                        {label}
                      </a>
                    ) : (
                      <span className="font-inter text-sm text-white/30">
                        {label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-white/20">
            &copy; {year} Orayn Digital Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-inter text-xs text-white/15">
              Built by Orayn — on Orayn
            </span>
            <div className="flex items-center gap-1.5">
              <div
                className="w-1.5 h-1.5 rounded-full bg-orayn-gold/60 pulse-gold"
                aria-hidden="true"
              />
              <span className="font-mono text-[9px] text-orayn-gold/50">
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
