import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "./../components/navbar";
import Footer from "./../components/footer";

// ── Slide images — update paths to match your actual studio photos ──
import slide1 from "../assets/images/slide1.jpeg";
import slide2 from "../assets/images/slide2.jpeg";
import slide3 from "../assets/images/kitchen.jpeg";
import slide4 from "../assets/images/waterheater.jpeg";

const SLIDES = [slide1, slide2, slide3, slide4];

const FEATURES = [
  {
    label: "High Speed WiFi",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
        <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" />
      </svg>
    ),
  },
  {
    label: "Air Conditioning",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
      </svg>
    ),
  },
  {
    label: "Private Bathroom",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
        <path d="M4 12h16M4 12V8a4 4 0 0 1 4-4h1M4 12v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
      </svg>
    ),
  },
  {
    label: "Fully Equipped Kitchen",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
        <path d="M3 11l19-9-9 19-2-8-8-2z" />
      </svg>
    ),
  },
  {
    label: "Water Heater",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2" />
      </svg>
    ),
  },
  {
    label: "Standby Generator",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    label: "24/7 Security",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Smart TV",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
];

const TOUR_SPOTS = [
  {
    label: "Living Area",
    description: "Stylish open-plan living space with premium furnishings and mood lighting.",
    image: slide1,
  },
  {
    label: "Bedroom",
    description: "Cosy sleeping area with a plush bed, blackout curtains, and ample storage.",
    image: slide2,
  },
  {
    label: "Kitchen",
    description: "Fully equipped modern kitchenette with gas cooker, microwave, and all cookware.",
    image: slide3,
  },
  {
    label: "Bathroom",
    description: "Pristine private bathroom with hot water, fresh towels, and toiletries provided.",
    image: slide4,
  },
];

// ── Slideshow ─────────────────────────────────────────────────
function HeroSlideshow({ slides }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, [slides.length]);

  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setCurrent((p) => (p + 1) % slides.length);

  return (
    <div className="relative w-full h-full">
      {slides.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M9 2L4 7l5 5" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M5 2l5 5-5 5" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full border-none cursor-pointer transition-all duration-300 ${
              i === current ? "w-7 h-2 bg-[#F5A623]" : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-5 right-5 z-10 bg-black/40 backdrop-blur-sm text-white text-xs font-sans px-3 py-1 rounded-full">
        {current + 1} / {slides.length}
      </div>
    </div>
  );
}

// ── Apartment Tour ────────────────────────────────────────────
function ApartmentTour({ spots }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
      {/* Tab list */}
      <div className="flex flex-row lg:flex-col bg-[#0f1e2e] lg:w-56 overflow-x-auto lg:overflow-visible">
        {spots.map((spot, i) => (
          <button
            key={spot.label}
            onClick={() => setActive(i)}
            className={`shrink-0 lg:shrink text-left px-5 py-4 font-sans text-sm font-medium border-none cursor-pointer transition-all duration-200 ${
              i === active
                ? "bg-[#E8691A] text-white"
                : "text-white/50 hover:text-white hover:bg-white/5"
            }`}
          >
            <span className={`block text-[10px] uppercase tracking-widest mb-0.5 ${i === active ? "text-white/70" : "text-white/30"}`}>
              0{i + 1}
            </span>
            {spot.label}
          </button>
        ))}
      </div>

      {/* Image panel */}
      <div className="flex-1 relative h-[260px] lg:h-[400px]">
        {spots.map((spot, i) => (
          <div
            key={spot.label}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${spot.image})` }}
          />
        ))}
        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-10">
          <p className="font-serif font-bold text-white text-lg mb-1">
            {spots[active].label}
          </p>
          <p className="font-sans text-white/70 text-sm">
            {spots[active].description}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────
export default function Studio() {
  const tourRef = useRef(null);

  const scrollToTour = () => {
    tourRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />

      {/* ── Hero Slideshow ── */}
      <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <HeroSlideshow slides={SLIDES} />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-[1]" />
        {/* Hero text */}
        <div className="absolute bottom-0 left-0 right-0 z-[2] max-w-6xl mx-auto px-6 pb-10">
          <span className="inline-block bg-[#E8691A] text-white text-[10px] font-semibold tracking-[2px] uppercase px-3 py-1.5 rounded-full font-sans mb-3">
            Studio Apartment
          </span>
          <h1 className="font-serif font-bold text-white text-[clamp(2rem,5vw,3.5rem)] leading-tight">
            PhilGood <span className="text-[#F5A623] italic">Executive Studio</span>
          </h1>
          <p className="font-sans text-white/70 text-sm mt-2">
            East Legon Hills · Accra, Ghana
          </p>
        </div>
      </div>

      {/* ── Main Content ── */}
      <main className="bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Left — details */}
            <div className="flex-1">

              {/* Description */}
              <div className="mb-10">
                <span className="inline-block text-[#E8691A] text-xs tracking-[3px] uppercase font-sans font-semibold mb-3">
                  About This Space
                </span>
                <h2 className="font-serif font-bold text-[#1a1a1a] text-2xl mb-4">
                  Your Home, Away From Home
                </h2>
                <p className="font-sans text-gray-500 text-sm leading-relaxed mb-4">
                  Our Executive Studio is thoughtfully designed for the modern traveller who refuses to compromise on comfort. Whether you're in Accra for business or leisure, this space gives you everything you need — and nothing you don't.
                </p>
                <p className="font-sans text-gray-500 text-sm leading-relaxed">
                  From the fully equipped kitchen to the premium bedding and high-speed WiFi, every detail has been carefully considered to make your stay feel like home. Located in the quiet, secure neighbourhood of East Legon Hills — just minutes from major landmarks and business districts.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { label: "Type", value: "Studio" },
                  { label: "Guests", value: "1 – 2" },
                  { label: "Bathroom", value: "1 Private" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl p-4 text-center border border-gray-100">
                    <p className="font-serif font-bold text-[#1a1a1a] text-lg">{stat.value}</p>
                    <p className="font-sans text-gray-400 text-[10px] uppercase tracking-widest mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Features grid */}
              <div className="mb-10">
                <h3 className="font-serif font-bold text-[#1a1a1a] text-lg mb-5">
                  What's Included
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {FEATURES.map((f) => (
                    <div
                      key={f.label}
                      className="flex flex-col items-center gap-2 bg-white rounded-xl p-4 border border-gray-100 text-center"
                    >
                      <span className="text-[#E8691A]">{f.icon}</span>
                      <span className="font-sans text-gray-600 text-xs leading-tight">{f.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tour CTA */}
              <button
                onClick={scrollToTour}
                className="flex items-center gap-2 text-sm font-semibold text-[#E8691A] hover:text-[#F5A623] font-sans transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
                </svg>
                Take a tour of this apartment
              </button>
            </div>

            {/* Right — booking card */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="sticky top-24 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

                {/* Price header */}
                <div className="bg-[#0f1e2e] px-6 py-5">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif font-bold text-white text-3xl">$40</span>
                    <span className="font-sans text-white/50 text-sm">/ night</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <svg className="w-3.5 h-3.5 text-[#F5A623]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-sans text-white/60 text-xs">4.9 · Airbnb Superhost</span>
                  </div>
                </div>

                {/* Booking form */}
                <div className="p-6 flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400">Check-in</label>
                    <input
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-sans text-gray-700 outline-none focus:border-[#E8691A] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400">Check-out</label>
                    <input
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-sans text-gray-700 outline-none focus:border-[#E8691A] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400">Guests</label>
                    <select className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-sans text-gray-700 outline-none focus:border-[#E8691A] transition-colors">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                    </select>
                  </div>

                  <Link
                    to="/book"
                    className="mt-1 block text-center py-3.5 bg-[#E8691A] hover:bg-[#F5A623] text-white font-semibold text-sm rounded-xl no-underline transition-colors duration-200 font-sans"
                  >
                    Book This Studio
                  </Link>

                  <a
                    href="https://wa.me/233597096207"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-3 border border-gray-200 hover:border-[#E8691A] text-gray-500 hover:text-[#E8691A] font-semibold text-sm rounded-xl no-underline transition-all duration-200 font-sans"
                  >
                    Enquire on WhatsApp
                  </a>

                  <p className="text-center font-sans text-gray-400 text-xs">
                    Free cancellation · No platform fees
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Apartment Tour Section ── */}
        <div ref={tourRef} className="max-w-6xl mx-auto px-6 pb-20">
          <div className="text-center mb-10">
            <span className="inline-block text-[#E8691A] text-xs tracking-[3px] uppercase font-sans font-semibold mb-3">
              Explore The Space
            </span>
            <h2 className="font-serif font-bold text-[#1a1a1a] text-[clamp(1.8rem,3vw,2.5rem)] leading-tight">
              Tour The Apartment
            </h2>
          </div>
          <ApartmentTour spots={TOUR_SPOTS} />
        </div>

      </main>

      <Footer />
    </>
  );
}