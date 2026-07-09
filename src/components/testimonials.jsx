import { useState, useEffect } from "react";

const TESTIMONIALS = [
  {
    name: "Solomon",
    location: "College Park, GA",
    stay: "Studio Apartment · July 2025",
    rating: 5,
    text: "I had an amazing stay at Philgood Homes in Accra! From check-in to check-out, everything was smooth and professionally handled. The apartment was spotless, modern, and well-equipped with all the essentials I needed. The location was safe and convenient, with easy access to shops and main roads. What stood out most was the exceptional hospitality, I truly felt at home. Communication with the host was quick and helpful throughout my stay. I highly recommend Philgood Homes to anyone looking for comfort, peace of mind, and a touch of luxury in Accra. I'll definitely be coming back!",
    initials: "SO",
    color: "bg-[#E8691A]",
  },
  {
    name: "Gideon",
    location: "Chafford Hundred, United Kingdom",
    stay: "Studio Apartment · December 2025",
    rating: 5,
    text: "Great 3-week stay at Philgood Heights, New Legon Hills. Clean, comfortable, and very secure. Excellent host. Highly recommended.",
    initials: "GI",
    color: "bg-[#1a2a3a]",
  },
  {
    name: "Waveney",
    location: "Miami, FL",
    stay: "Studio Apartment · August 2025",
    rating: 5,
    text: "When in Ghana, Phil's place is home away from home for my family and friends. So attentive. Perfectly located.",
    initials: "WA",
    color: "bg-[#F5A623]",
  },
  {
    name: "Nene",
    location: "Accra, Ghana",
    stay: "1 Bedroom Apartment · October 2025",
    rating: 5,
    text: "My stay at the luxe loft was absolutely fantastic! The place was spotless, and the decor was so stylish and comfortable. Host was incredibly welcoming and responsive, always available to answer any questions I had. The location was perfect, close to everything I wanted to see and do. I especially loved how spacious it was and the well-equipped kitchen. Highly recommend this Airbnb — you won't be disappointed!",
    initials: "NE",
    color: "bg-[#E8691A]",
  },
  {
    name: "Ronny",
    location: "Accra, Ghana",
    stay: "Studio Apartment · January 2026",
    rating: 5,
    text: "The room was really clean, bathrooms kitchen and living room was very clean and spacious as well.",
    initials: "RO",
    color: "bg-[#1a2a3a]",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-[#F5A623]" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (index) => {
    if (index === active || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((active + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [active]);

  const current = TESTIMONIALS[active];
  const prev = TESTIMONIALS[(active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length];
  const next = TESTIMONIALS[(active + 1) % TESTIMONIALS.length];

  return (
    <section className="py-24 px-6 bg-[#faf8f5] overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#E8691A] text-xs tracking-[3px] uppercase font-sans font-semibold mb-3">
            Guest Reviews
          </span>
          <h2 className="font-serif font-bold text-[#1a1a1a] text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
            What Our Guests Say
          </h2>
          <p className="text-gray-500 font-sans text-base max-w-md mx-auto">
            Real experiences from real guests, we let them do the talking.
          </p>

          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <StarRating count={5} />
            <span className="font-serif font-bold text-[#1a1a1a] text-lg">4.9</span>
            <span className="text-gray-400 font-sans text-sm">· Rated on Airbnb</span>
          </div>
        </div>

        {/* Main testimonial card */}
        <div className="relative">

          {/* Large quote mark */}
          <div className="absolute -top-6 left-8 text-[#E8691A]/10 font-serif font-bold text-[160px] leading-none select-none pointer-events-none z-0">
            "
          </div>

          <div
            className={`relative z-10 bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100 max-w-3xl mx-auto transition-all duration-300 ${
              animating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            {/* Stars + stay tag */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <StarRating count={current.rating} />
              <span className="text-[10px] tracking-[2px] uppercase text-[#E8691A] font-sans font-semibold bg-[#E8691A]/10 px-3 py-1 rounded-full">
                {current.stay}
              </span>
            </div>

            {/* Review text */}
            <p className="font-sans text-gray-600 text-base lg:text-lg leading-relaxed mb-8 italic">
              "{current.text}"
            </p>

            {/* Reviewer */}
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full ${current.color} flex items-center justify-center flex-shrink-0`}>
                <span className="text-white font-serif font-bold text-sm">
                  {current.initials}
                </span>
              </div>
              <div>
                <p className="font-serif font-bold text-[#1a1a1a] text-base">{current.name}</p>
                <p className="font-sans text-gray-400 text-xs">{current.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dot navigation */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full border-none cursor-pointer transition-all duration-300 ${
                i === active
                  ? "w-8 h-2.5 bg-[#E8691A]"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-[#F5A623]"
              }`}
            />
          ))}
        </div>

        {/* Prev / Next reviewer previews */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => goTo((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white hover:border-[#E8691A] hover:text-[#E8691A] text-gray-400 text-xs font-sans transition-all duration-200 cursor-pointer"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M8 2L4 6l4 4" />
            </svg>
            {prev.name.split(" ")[0]}
          </button>

          <button
            onClick={() => goTo((active + 1) % TESTIMONIALS.length)}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white hover:border-[#E8691A] hover:text-[#E8691A] text-gray-400 text-xs font-sans transition-all duration-200 cursor-pointer"
          >
            {next.name.split(" ")[0]}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 2l4 4-4 4" />
            </svg>
          </button>
        </div>

        {/* Bottom strip — all reviewer avatars */}
        <div className="flex items-center justify-center gap-3 mt-10 flex-wrap">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              onClick={() => goTo(i)}
              title={t.name}
              className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center border-2 transition-all duration-200 cursor-pointer ${
                i === active
                  ? "border-[#E8691A] scale-110 shadow-md"
                  : "border-transparent opacity-50 hover:opacity-80"
              }`}
            >
              <span className="text-white font-serif font-bold text-xs">{t.initials}</span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}