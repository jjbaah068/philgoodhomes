import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const QUICK_LINKS = [
  { label: "Home", to: "/", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  )},
  { label: "Our Apartments", to: "/apartments/studio", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  )},
  { label: "Gallery", to: "/gallery", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21,15 16,10 5,21" />
    </svg>
  )},
  { label: "Contact", to: "/contact", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )},
  { label: "Book Now", to: "/book", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  )},
];

export default function NotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#0f1e2e] flex flex-col items-center justify-center px-6 relative overflow-hidden">

      {/* Background decorative circles */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#E8691A]/5 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#E8691A]/5 translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-white/5 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">

        {/* 404 number */}
        <div className="relative mb-6">
          <p className="font-serif font-bold text-[#E8691A]/10 text-[200px] leading-none select-none pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
            404
          </p>
          <div className="relative z-10 pt-8">
            <div className="w-20 h-20 rounded-2xl bg-[#E8691A]/15 border border-[#E8691A]/30 flex items-center justify-center mx-auto mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="#E8691A" strokeWidth="1.5" strokeLinecap="round" className="w-9 h-9">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
            </div>
          </div>
        </div>

        {/* Text */}
        <span className="inline-block text-[#F5A623] text-xs tracking-[3px] uppercase font-sans font-semibold mb-4">
          Page Not Found
        </span>
        <h1 className="font-serif font-bold text-white text-[clamp(1.8rem,4vw,3rem)] leading-tight mb-4">
          Looks like this room <br />
          <span className="text-[#F5A623] italic">doesn't exist</span>
        </h1>
        <p className="font-sans text-white/50 text-base max-w-md mx-auto mb-3">
          The page you're looking for may have been moved, renamed, or never existed. Let's get you back somewhere comfortable.
        </p>

        {/* Countdown */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="w-8 h-8 rounded-full border-2 border-[#E8691A]/40 flex items-center justify-center">
            <span className="font-serif font-bold text-[#F5A623] text-sm">{countdown}</span>
          </div>
          <p className="font-sans text-white/30 text-xs">
            Redirecting you home in {countdown} second{countdown !== 1 ? "s" : ""}...
          </p>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <Link
            to="/"
            className="px-7 py-3.5 bg-[#E8691A] hover:bg-[#F5A623] text-white font-semibold text-sm rounded-xl no-underline transition-colors duration-200 font-sans flex items-center gap-2"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
            Back to Home
          </Link>
          <Link
            to="/book"
            className="px-7 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm rounded-xl no-underline transition-all duration-200 font-sans"
          >
            Book a Stay
          </Link>
        </div>

        {/* Quick links */}
        <div className="border-t border-white/10 pt-10">
          <p className="font-sans text-white/30 text-xs uppercase tracking-widest mb-5">
            Or go somewhere else
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#E8691A]/50 text-white/60 hover:text-white text-sm font-sans rounded-xl no-underline transition-all duration-200"
              >
                <span className="text-[#F5A623]">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom branding */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <p className="font-sans text-white/20 text-xs text-center">
          PhilGood Homes · East Legon Hills, Accra
        </p>
      </div>

    </div>
  );
}