import wifi from "../assets/images/wifi1.jpg";
import waterheater from "../assets/images/waterheater.jpeg";
import kitchen from "../assets/images/kitchen.jpeg";
import aircondition from "../assets/images/aircondition1.jpeg";
import bathroom from "../assets/images/slide14.jpeg";
import generator from "../assets/images/generator1.jpeg";
import security from "../assets/images/security.jpg";








const AMENITIES = [
    {
        title: "High Speed WiFi",
        description: "Stay connected with complimentary fiber-optic internet throughout your stay.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" />
            </svg>
        ),
        image: wifi,
        span: "col-span-1 row-span-1",
    },
    {
        title: "Water Heater",
        description: "Hot showers on demand — any time of day or night.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                <path d="M12 6v6l4 2" />
            </svg>
        ),
        image: waterheater,
        span: "col-span-1 row-span-1",
    },
    {
        title: "Air Conditioned",
        description: "Every room climate-controlled for your perfect comfort.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
            </svg>
        ),
        image: aircondition,
        span: "col-span-1 row-span-1",
    },
    {
        title: "Private Bathroom",
        description: "Your own en-suite bathroom — spotless, private, and fully stocked.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <path d="M4 12h16M4 12V8a4 4 0 0 1 4-4h1M4 12v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                <circle cx="9" cy="5" r="1" />
            </svg>
        ),
        image: bathroom,
        span: "col-span-1 row-span-1",
    },
    {
        title: "Fully Equipped Kitchen",
        description: "Cook like home — premium appliances, cookware, and everything you need.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <path d="M3 11l19-9-9 19-2-8-8-2z" />
            </svg>
        ),
        image: kitchen,
        span: "col-span-1 row-span-1",
    },
    {
        title: "Standby Generator",
        description: "Never lose power — seamless generator backup keeps everything running.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
        image: generator,
        span: "col-span-1 row-span-1",
    },
    {
        title: "24/7 Security",
        description: "Round-the-clock security so you can rest easy every night.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        image: security,
        span: "col-span-1 row-span-1",
    },
];

export default function Amenities() {
    return (
        <section className="py-24 px-6 bg-[#faf8f5]">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-[#E8691A] text-xs tracking-[3px] uppercase font-sans font-semibold mb-3">
                        What's Included
                    </span>
                    <h2 className="font-serif font-bold text-[#1a1a1a] text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
                        Premium Amenities
                    </h2>
                    <p className="text-gray-500 font-sans text-base max-w-md mx-auto">
                        Everything you need for a comfortable, stress-free stay — all included.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {AMENITIES.map((amenity, index) => (
                        <div
                            key={amenity.title}
                            className={`group relative rounded-2xl overflow-hidden min-h-[220px] cursor-pointer
                ${index === 0 ? "lg:col-span-2" : ""}
                ${index === 6 ? "sm:col-span-2 lg:col-span-1" : ""}
              `}
                        >
                            {/* Dark base background (shown when no image) */}
                            <div
                                className="absolute inset-0 bg-[#1a2a3a] bg-cover bg-center"
                                style={amenity.image ? { backgroundImage: `url(${amenity.image})` } : {}}
                            />

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-500" />

                            {/* Hover color wash */}
                            <div className="absolute inset-0 bg-[#E8691A]/0 group-hover:bg-[#E8691A]/10 transition-all duration-500" />

                            {/* Content */}
                            <div className="relative z-10 flex flex-col justify-end h-full p-6 min-h-[220px]">
                                {/* Icon */}
                                <div className="text-[#F5A623] mb-3 opacity-90">
                                    {amenity.icon}
                                </div>

                                {/* Title */}
                                <h3 className="font-serif font-bold text-white text-xl mb-1.5 group-hover:text-[#F5A623] transition-colors duration-300">
                                    {amenity.title}
                                </h3>

                                {/* Description */}
                                <p className="font-sans text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                                    {amenity.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-14">
                    <p className="text-gray-400 font-sans text-sm mb-5">
                        All amenities included — no hidden charges.
                    </p>
                    <a
                        href="/amenities"
                        className="inline-block px-8 py-3.5 bg-[#E8691A] hover:bg-[#F5A623] text-white font-semibold text-sm rounded-xl transition-colors duration-200 no-underline"
                    >
                        See full Amenities
                    </a>
                </div>

            </div>

        </section>
    );
}