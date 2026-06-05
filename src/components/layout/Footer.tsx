export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-orayn-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span className="font-sora text-xl font-bold text-orayn-gold">
              ORAYN
            </span>
            <p className="mt-3 font-inter text-sm text-white/60 leading-relaxed max-w-xs">
              We build digital presence that wins clients. Custom websites, mobile apps, web applications, and automation systems — no templates, no shortcuts.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sora text-sm font-semibold text-white uppercase tracking-widest mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                'Website Design & Development',
                'Mobile App Development',
                'Web App & SaaS Engineering',
                'Automation & AI Agents',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="font-inter text-sm text-white/60 hover:text-orayn-gold transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sora text-sm font-semibold text-white uppercase tracking-widest mb-4">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '2348123121554'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter text-sm text-white/60 hover:text-orayn-gold transition-colors duration-200"
                >
                  WhatsApp: +234 812 312 1554
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="font-inter text-sm text-white/60 hover:text-orayn-gold transition-colors duration-200"
                >
                  Send a Message
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-white/40">
            &copy; {year} Orayn Digital Agency. All rights reserved.
          </p>
          <p className="font-inter text-xs text-white/40">
            Nigerian-founded. Built for global standards.
          </p>
        </div>
      </div>
    </footer>
  )
}
