import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpeg"; // ← update to match your logo path

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  // { label: "Our Apartments", to: "/apartments" },
  { label: "Amenities", to: "/amenities" },
  { label: "Real Estate", to: "/realestate" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const APARTMENT_LINKS = [
  { label: "Studio Apartment", to: "/apartments/studio" },
  { label: "1-Bedroom Suite", to: "/apartments/onebedroom" },
  { label: "2-Bedroom Suite", to: "/apartments/twobedroom" },
];

const SOCIALS = [
  {
    label: "Instagram",
    handle: "@philgoodhomes",
    to: "https://instagram.com/philgoodhomes",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    handle: "@philgoodhomes",
    to: "https://tiktok.com/@philgoodhomes",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    handle: "+233 59 709 6207",
    to: "https://wa.me/233597096207",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f1e2e] text-white">

      {/* Top CTA band */}
      <div className="bg-[#E8691A] px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif font-bold text-white text-2xl mb-1">
              Ready for your next stay?
            </h3>
            <p className="font-sans text-white/80 text-sm">
              Book directly and get the best rate — no platform fees.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              to="/book"
              className="px-6 py-3 bg-white text-[#E8691A] font-semibold text-sm rounded-xl no-underline hover:bg-[#faf8f5] transition-colors duration-200 font-sans whitespace-nowrap"
            >
              Book Now
            </Link>
            <a
              href="https://wa.me/233597096207"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold text-sm rounded-xl no-underline transition-colors duration-200 font-sans whitespace-nowrap border border-white/30"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand column */}
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-2.5 no-underline mb-5">
            <img
              src={logo}
              alt="PhilGood Homes"
              className="h-10 w-auto object-contain"
            />
            <div className="leading-tight">
              <span className="block font-serif font-bold text-white text-base">PhilGood</span>
              <span className="block text-[10px] tracking-[2px] uppercase text-[#F5A623]">Homes</span>
            </div>
          </Link>
          <p className="font-sans text-white/50 text-sm leading-relaxed mb-6">
            Your home, away from home. Premium short-stay apartments in East Legon Hills, Accra.
          </p>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.to}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/40 hover:text-[#F5A623] no-underline transition-colors duration-200 group"
              >
                <span className="text-white/30 group-hover:text-[#F5A623] transition-colors duration-200">
                  {s.icon}
                </span>
                <span className="font-sans text-xs">{s.handle}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif font-bold text-white text-sm tracking-wide mb-5 uppercase">
            Quick Links
          </h4>
          <ul className="list-none m-0 p-0 flex flex-col gap-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="font-sans text-white/50 text-sm hover:text-[#F5A623] no-underline transition-colors duration-200 flex items-center gap-1.5 group"
                >
                  <span className="w-3 h-px bg-white/20 group-hover:bg-[#F5A623] group-hover:w-4 transition-all duration-200 block" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Apartments */}
        <div>
          <h4 className="font-serif font-bold text-white text-sm tracking-wide mb-5 uppercase">
            Our Apartments
          </h4>
          <ul className="list-none m-0 p-0 flex flex-col gap-3">
            {APARTMENT_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="font-sans text-white/50 text-sm hover:text-[#F5A623] no-underline transition-colors duration-200 flex items-center gap-1.5 group"
                >
                  <span className="w-3 h-px bg-white/20 group-hover:bg-[#F5A623] group-hover:w-4 transition-all duration-200 block" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif font-bold text-white text-sm tracking-wide mb-5 uppercase">
            Get In Touch
          </h4>
          <div className="flex flex-col gap-4">

            {/* Phone */}
            <a
              href="tel:+233597096207"
              className="flex items-start gap-3 no-underline group"
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#E8691A]/20 flex items-center justify-center flex-shrink-0 transition-colors duration-200 mt-0.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-3.5 h-3.5 text-[#F5A623]">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <p className="font-sans text-[10px] text-white/30 uppercase tracking-widest mb-0.5">Call / WhatsApp</p>
                <p className="font-sans text-white/60 text-sm group-hover:text-[#F5A623] transition-colors duration-200">+233 59 709 6207</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-3.5 h-3.5 text-[#F5A623]">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="font-sans text-[10px] text-white/30 uppercase tracking-widest mb-0.5">Location</p>
                <p className="font-sans text-white/60 text-sm">East Legon Hills,<br />Accra, Ghana</p>
              </div>
            </div>

            {/* Airbnb */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#F5A623]">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5c1.245 0 2.25 1.343 2.25 3S13.245 10.5 12 10.5s-2.25-1.343-2.25-3S10.755 4.5 12 4.5zM18 18.75H6v-.75c0-2.25 2.686-4.125 6-4.125s6 1.875 6 4.125v.75z" />
                </svg>
              </div>
              <div>
                <p className="font-sans text-[10px] text-white/30 uppercase tracking-widest mb-0.5">Also on</p>
                <p className="font-sans text-white/60 text-sm">Airbnb · 4.9 ⭐ Rating</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-6 py-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-white/25 text-xs">
            © {currentYear} PhilGood Homes. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacypolicy" className="font-sans text-white/25 hover:text-white/50 text-xs no-underline transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/10">·</span>
            <Link to="/termsofuse" className="font-sans text-white/25 hover:text-white/50 text-xs no-underline transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}