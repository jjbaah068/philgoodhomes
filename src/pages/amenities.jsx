import Navbar from "./../components/navbar";
import Footer from "./../components/footer";

import wifi from "../assets/images/wifi1.jpg";
import waterheater from "../assets/images/waterheater.jpeg";
import kitchen from "../assets/images/kitchen.jpeg";
import aircondition from "../assets/images/aircondition1.jpeg";
import bathroom from "../assets/images/bathroom.jpg";
import generator from "../assets/images/generator.jpg";
import security from "../assets/images/security.jpg";

const AMENITIES = [
  {
    title: "High Speed WiFi",
    description: "Stay connected with complimentary fiber-optic internet throughout your stay. Whether you're working remotely or streaming, our fast broadband keeps you online without interruption.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" />
      </svg>
    ),
    image: wifi,
    span: "lg:col-span-2",
  },
  {
    title: "Water Heater",
    description: "Hot showers on demand — any time of day or night. No waiting, no cold surprises.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    image: waterheater,
    span: "",
  },
  {
    title: "Air Conditioning",
    description: "Every room is climate-controlled for your perfect comfort, no matter the weather outside.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
      </svg>
    ),
    image: aircondition,
    span: "",
  },
  {
    title: "Private Bathroom",
    description: "Your own en-suite bathroom — spotless, private, and fully stocked with fresh towels and toiletries.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M4 12h16M4 12V8a4 4 0 0 1 4-4h1M4 12v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
        <circle cx="9" cy="5" r="1" />
      </svg>
    ),
    image: bathroom,
    span: "",
  },
  {
    title: "Fully Equipped Kitchen",
    description: "Cook like home — gas cooker, microwave, fridge, premium cookware and everything you need to prepare a full meal.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M3 11l19-9-9 19-2-8-8-2z" />
      </svg>
    ),
    image: kitchen,
    span: "",
  },
  {
    title: "Standby Generator",
    description: "Never lose power — our seamless generator backup kicks in automatically so your stay is never interrupted.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    image: generator,
    span: "",
  },
  {
    title: "24/7 Security",
    description: "Round-the-clock security and outdoor CCTV monitoring so you can rest easy every single night.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    image: security,
    span: "sm:col-span-2 lg:col-span-1",
  },
];

export default function AmenitiesPage() {
  return (
    <>
      <Navbar />

      {/* ── Page Hero ── */}
      <div className="bg-[#0f1e2e] pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-[#F5A623] text-xs tracking-[3px] uppercase font-sans font-semibold mb-3">
            What's Included
          </span>
          <h1 className="font-serif font-bold text-white text-[clamp(2.2rem,5vw,3.5rem)] leading-tight mb-4 max-w-xl">
            Premium <span className="text-[#F5A623] italic">Amenities</span>
          </h1>
          <p className="font-sans text-white/60 text-base max-w-lg">
            Every amenity at PhilGood Homes is carefully chosen to make your stay feel like home — comfortable, convenient, and stress-free from day one.
          </p>

          {/* Quick amenity pills */}
          <div className="flex flex-wrap gap-2 mt-8">
            {AMENITIES.map((a) => (
              <span
                key={a.title}
                className="flex items-center gap-1.5 bg-white/10 border border-white/10 text-white/70 text-xs font-sans px-3 py-1.5 rounded-full"
              >
                <span className="text-[#F5A623] scale-75">{a.icon}</span>
                {a.title}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Amenities Grid ── */}
      <main className="bg-[#faf8f5] py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AMENITIES.map((amenity, index) => (
              <div
                key={amenity.title}
                className={`group relative rounded-2xl overflow-hidden min-h-[260px] cursor-default ${amenity.span}`}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-[#1a2a3a] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={amenity.image ? { backgroundImage: `url(${amenity.image})` } : {}}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 group-hover:from-black/90 transition-all duration-500" />

                {/* Hover orange wash */}
                <div className="absolute inset-0 bg-[#E8691A]/0 group-hover:bg-[#E8691A]/10 transition-all duration-500" />

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-end h-full p-7 min-h-[260px]">
                  <div className="text-[#F5A623] mb-3 opacity-90">
                    {amenity.icon}
                  </div>
                  <h3 className="font-serif font-bold text-white text-xl mb-2 group-hover:text-[#F5A623] transition-colors duration-300">
                    {amenity.title}
                  </h3>
                  <p className="font-sans text-white/65 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {amenity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── All Included Banner ── */}
          <div className="mt-16 bg-white rounded-2xl border border-gray-100 p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <span className="inline-block text-[#E8691A] text-xs tracking-[3px] uppercase font-sans font-semibold mb-2">
                No Hidden Costs
              </span>
              <h3 className="font-serif font-bold text-[#1a1a1a] text-2xl mb-2">
                Everything is included in your rate
              </h3>
              <p className="font-sans text-gray-500 text-sm max-w-lg">
                All seven amenities come standard with every booking — Studio, 1-Bedroom, or 2-Bedroom. No extra charges, no surprise fees at check-out.
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6">
                {AMENITIES.map((a) => (
                  <div key={a.title} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#E8691A]/15 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 12 12" fill="none" stroke="#E8691A" strokeWidth="2" strokeLinecap="round" className="w-2.5 h-2.5">
                        <path d="M2 6l3 3 5-5" />
                      </svg>
                    </div>
                    <span className="font-sans text-gray-600 text-sm">{a.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3 flex-shrink-0">
                
              <a
                href="/book"
                className="px-8 py-3.5 bg-[#E8691A] hover:bg-[#F5A623] text-white font-semibold text-sm rounded-xl no-underline transition-colors duration-200 font-sans text-center whitespace-nowrap"
              >
                Book Your Stay
              </a>

              <a
              
                href="https://wa.me/233597096207"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 border border-gray-200 hover:border-[#E8691A] text-gray-500 hover:text-[#E8691A] font-semibold text-sm rounded-xl no-underline transition-all duration-200 font-sans text-center whitespace-nowrap"
              >
                Ask a Question
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}