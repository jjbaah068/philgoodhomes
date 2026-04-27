import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import slide1 from "../assets/images/slide1.jpeg";
import slide2 from "../assets/images/slide2.jpeg";
import slide3 from "../assets/images/kitchen.jpeg";
import slide4 from "../assets/images/waterheater.jpeg";

const APARTMENTS = [
    {
        badge: "Available Now",
        tag: "Studio Apartment",
        name: "PhilGood",
        highlight: "Executive Studio",
        description:
            "Experience the perfect blend of comfort and style in our Executive Studio. Thoughtfully designed with modern furnishings, mood lighting, a fully equipped kitchen, and premium finishes — your home, away from home.",
        type: "Studio",
        bathrooms: 1,
        price: 40,
        currency: "$",
        per: "night",
        slides: [slide1, slide2, slide3, slide4],
    },

];

function ApartmentSlideshow({ slides }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="relative w-full h-full overflow-hidden rounded-t-2xl lg:rounded-none lg:rounded-l-2xl">
            {/* Slides */}
            {slides.map((src, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"
                        }`}
                    style={{ backgroundImage: `url(${src})` }}
                />
            ))}

            {/* Badge */}
            <div className="absolute top-5 left-5 z-10">
                <span className="bg-[#E8691A] text-white text-[10px] font-semibold tracking-[2px] uppercase px-3 py-1.5 rounded-full font-sans">
                    Available Now
                </span>
            </div>

            {/* Dot indicators */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`rounded-full transition-all duration-300 border-none cursor-pointer ${i === current
                            ? "w-6 h-2 bg-[#F5A623]"
                            : "w-2 h-2 bg-white/50 hover:bg-white/80"
                            }`}
                    />
                ))}
            </div>

            {/* Prev / Next arrows */}
            <button
                onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
            >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M9 2L4 7l5 5" />
                </svg>
            </button>
            <button
                onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
            >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 2l5 5-5 5" />
                </svg>
            </button>
        </div>
    );
}

export default function FeaturedApartments() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-[#E8691A] text-xs tracking-[3px] uppercase font-sans font-semibold mb-3">
                        Our Spaces
                    </span>
                    <h2 className="font-serif font-bold text-[#1a1a1a] text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
                        Featured Apartment
                    </h2>
                    <p className="text-gray-500 font-sans text-base max-w-md mx-auto">
                        Carefully curated spaces designed for those who appreciate the finer things.
                    </p>
                </div>

                {/* Apartment Cards */}
                <div className="flex flex-col gap-8">
                    {APARTMENTS.map((apt, index) => (
                        <div
                            key={apt.name + apt.highlight}
                            className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                                } bg-[#faf8f5] rounded-2xl overflow-hidden min-h-[420px] shadow-sm`}
                        >
                            {/* Slideshow — left side */}
                            <div className="w-full lg:w-[55%] h-[300px] lg:h-[420px]">
                                <ApartmentSlideshow slides={apt.slides} />
                            </div>

                            {/* Info — right side */}
                            <div className="w-full lg:w-[45%] flex flex-col justify-center p-8 lg:p-12">
                                <p className="font-serif text-gray-400 text-sm mb-1">{apt.name}</p>
                                <h3 className="font-serif font-bold text-[#1a1a1a] text-[clamp(1.6rem,3vw,2.4rem)] leading-tight mb-4">
                                    <span className="text-[#E8691A] italic">{apt.highlight}</span>
                                </h3>

                                <p className="font-sans text-gray-500 text-sm leading-relaxed mb-8">
                                    {apt.description}
                                </p>

                                {/* Stats row */}
                                <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-100">
                                    {/* Type */}
                                    <div className="text-center">
                                        <div className="text-[#E8691A] mb-1">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 mx-auto">
                                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                                <polyline points="9,22 9,12 15,12 15,22" />
                                            </svg>
                                        </div>
                                        <p className="font-serif font-bold text-[#1a1a1a] text-lg">{apt.type}</p>
                                        <p className="text-gray-400 text-[10px] tracking-widest uppercase font-sans">Type</p>
                                    </div>

                                    <div className="w-px h-10 bg-gray-200" />

                                    {/* Bathrooms */}
                                    <div className="text-center">
                                        <div className="text-[#E8691A] mb-1">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 mx-auto">
                                                <path d="M4 12h16M4 12V8a4 4 0 0 1 4-4h1M4 12v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                                            </svg>
                                        </div>
                                        <p className="font-serif font-bold text-[#1a1a1a] text-lg">{apt.bathrooms}</p>
                                        <p className="text-gray-400 text-[10px] tracking-widest uppercase font-sans">Bathroom</p>
                                    </div>

                                    <div className="w-px h-10 bg-gray-200" />

                                    {/* Price */}
                                    <div className="text-center">
                                        <div className="text-[#E8691A] mb-1">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 mx-auto">
                                                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                            </svg>
                                        </div>
                                        <p className="font-serif font-bold text-[#1a1a1a] text-lg">
                                            {apt.currency}{apt.price}
                                            <span className="text-xs text-gray-400 font-sans font-normal ml-1">/{apt.per}</span>
                                        </p>
                                        <p className="text-gray-400 text-[10px] tracking-widest uppercase font-sans">Price</p>
                                    </div>
                                </div>

                                {/* CTAs */}
                                <div className="flex items-center gap-4">
                                    <Link
                                        to="/book"
                                        className="px-6 py-3 bg-[#E8691A] hover:bg-[#F5A623] text-white font-semibold text-sm rounded-xl no-underline transition-colors duration-200 font-sans"
                                    >
                                        Book Your Stay →
                                    </Link>
                                    <Link
                                        to="/apartments/studio"
                                        className="text-sm font-semibold text-[#1a1a1a] hover:text-[#E8691A] no-underline transition-colors duration-200 font-sans tracking-wide uppercase"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Explore All Suites Banner */}
                <div className="mt-16 bg-[#1a2a3a] rounded-2xl px-8 py-14 text-center">
                    <h3 className="font-serif font-bold text-white text-[clamp(1.6rem,3vw,2.4rem)] mb-3">
                        Explore Our Executive Suites
                    </h3>
                    <p className="font-sans text-white/60 text-base max-w-lg mx-auto mb-8">
                        From intimate studios to spacious apartments — discover the perfect space for your stay in East Legon Hills.
                    </p>
                    <Link
                        to="/apartments/studio"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#E8691A] hover:bg-[#F5A623] text-white font-semibold text-sm rounded-full no-underline transition-colors duration-200 font-sans tracking-wide"
                    >
                        VIEW ALL SUITES
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                    </Link>
                </div>

            </div>
        </section>
    );
}