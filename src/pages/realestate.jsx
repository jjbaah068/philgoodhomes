import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "./../components/navbar";
import Footer from "./../components/footer";

// ── Media — update paths to match yours ──
import house1 from "../assets/images/house1.jpeg";
import house2 from "../assets/images/house2.jpeg";
import house3 from "../assets/images/house3.jpeg";
import house4 from "../assets/images/housebed1.jpeg";
import houseliv from "../assets/images/houseliv1.jpeg";
import housebath from "../assets/images/waterheater.jpeg";
import housekitchen from "../assets/images/kitchen.jpeg";
import houseVideo from "../assets/videos/house.mp4";

const PROPERTIES = [
    {
        id: 1,
        image: house1,
        label: "Executive Villa",
        location: "East Legon Hills, Accra",
        status: "For Sale",
        description:
            "A stunning executive villa with expansive living spaces, premium finishes, and a private garden — designed for those who live boldly.",
    },
    {
        id: 2,
        image: house2,
        label: "Modern Family Home",
        location: "East Legon Hills, Accra",
        // status: "For Sale",
        description:
            "Thoughtfully designed for family living — spacious bedrooms, a chef's kitchen, and a secure compound in one of Accra's most desirable addresses.",
    },
    {
        id: 3,
        image: house3,
        label: "Luxury Residence",
        location: "East Legon Hills, Accra",
        // status: "For Sale",
        description:
            "The pinnacle of residential luxury. Five bedrooms, four bathrooms, and architectural details that make a statement the moment you arrive.",
    },
    {
        id: 4,
        image: house4,
        label: "Modern Bedroom Villa",
        location: "East Legon Hills, Accra",
        // status: "For Sale",
        description:
            "A villa that redefines modern living with a focus on comfort and style. Featuring a spacious bedroom, en-suite bathroom, and an open-plan living area that seamlessly connects to the outdoors.",
    },
    {
        id: 5,
        image: houseliv,
        label: "Modern Living Villa",
        location: "East Legon Hills, Accra",
        // status: "For Sale",
        description:
            "Experience the perfect blend of modern design and comfortable living in this villa. With an expansive living area, state-of-the-art kitchen, and seamless indoor-outdoor flow, it's ideal for entertaining or relaxing in style.",
    },
    {
        id: 6,
        image: housebath,
        label: "Modern Bathroom Villa",
        location: "East Legon Hills, Accra",
        status: "",
        description:
            "Indulge in the ultimate bathroom experience with this villa's luxurious bathroom design. Featuring high-end fixtures, a spacious layout, and elegant finishes, it's a private oasis for relaxation and rejuvenation.",
    },
    {
        id: 7,
        image: housekitchen,
        label: "Modern Kitchen Villa",
        location: "East Legon Hills, Accra",
        status: "",
        description:
            "A chef's dream come true with this villa's state-of-the-art kitchen. Featuring premium appliances, ample counter space, and a layout designed for efficient meal preparation and entertaining.",
    }
];

const WHY_US = [
    {
        title: "Prime Location",
        desc: "All our properties sit within East Legon Hills — Accra's most secure, sought-after, and rapidly appreciating residential enclave.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-6 h-6">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
    },
    {
        title: "Trusted Developer",
        desc: "PhilGood Homes has built a reputation for quality and transparency — from short stays to full property ownership.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-6 h-6">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
    },
    {
        title: "Premium Finishes",
        desc: "Every home is delivered with high-end finishes, modern fittings, and construction standards that hold their value.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-6 h-6">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ),
    },
    {
        title: "Direct from Owner",
        desc: "No agents, no middlemen, no inflated fees. Deal directly with PhilGood Homes and get the best price on every property.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-6 h-6">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        ),
    },
];

// ── Property Card ─────────────────────────────────────────────
function PropertyCard({ property, index, onClick }) {
    return (
        <div
            onClick={() => onClick(property)}
            className={`group relative cursor-pointer overflow-hidden rounded-2xl ${index === 0 ? "lg:col-span-2 lg:row-span-2 h-[320px] lg:h-auto" : "h-[280px]"
                }`}
        >
            {/* Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${property.image})` }}
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            {/* Orange wash on hover */}
            <div className="absolute inset-0 bg-[#E8691A]/0 group-hover:bg-[#E8691A]/15 transition-all duration-500" />

            {/* Status badge */}
            {property.status && (
                <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#E8691A] text-white text-[10px] font-semibold tracking-[2px] uppercase px-3 py-1.5 rounded-full font-sans">
                        {property.status}
                    </span>
                </div>
            )}

            {/* Expand icon */}
            <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <svg viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4">
                    <path d="M5 2H2v3M11 2h3v3M5 14H2v-3M11 14h3v-3" />
                </svg>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <p className="font-sans text-white/60 text-xs uppercase tracking-widest mb-1">{property.location}</p>
                <h3 className="font-serif font-bold text-white text-xl mb-3 group-hover:text-[#F5A623] transition-colors duration-300">
                    {property.label}
                </h3>

                {/* Stats */}
                <div className="flex items-center gap-4 flex-wrap">
                    <span className="flex items-center gap-1.5 text-white/70 text-xs font-sans">
                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-3.5 h-3.5">
                            <path d="M2 7V14M14 7V14M1 14h14M4 7V5a4 4 0 0 1 8 0v2M1 7h14" />
                        </svg>
                        {property.beds} Beds
                    </span>
                    <span className="flex items-center gap-1.5 text-white/70 text-xs font-sans">
                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-3.5 h-3.5">
                            <path d="M2 8h12M2 8V5a2 2 0 0 1 2-2h1M2 8v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8" />
                        </svg>
                        {property.baths} Baths
                    </span>
                    <span className="flex items-center gap-1.5 text-white/70 text-xs font-sans">
                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-3.5 h-3.5">
                            <rect x="1" y="1" width="14" height="14" rx="1" />
                        </svg>
                        {property.size}
                    </span>
                </div>

                {/* View details — slides up on hover */}
                <div className="mt-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-flex items-center gap-1.5 text-[#F5A623] text-xs font-semibold font-sans">
                        View Property
                        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3 h-3">
                            <path d="M2 6h8M6 2l4 4-4 4" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
}

// ── Property Modal ────────────────────────────────────────────
function PropertyModal({ property, onClose }) {
    if (!property) return null;

    const waMessage = `Hello PhilGood Homes! 👋

I'm interested in the *${property.label}* property for sale.

📍 ${property.location}
🛏 ${property.beds} Bedrooms · 🚿 ${property.baths} Bathrooms · 📐 ${property.size}

Could you please share more details including the asking price? Thank you!`;

    return (
        <div
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Image */}
                <div className="relative h-64 sm:h-80">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${property.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center cursor-pointer transition-all hover:bg-white/30"
                    >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M2 2l10 10M12 2L2 12" />
                        </svg>
                    </button>
                    <div className="absolute bottom-4 left-5">
                        <span className="bg-[#E8691A] text-white text-[10px] font-semibold tracking-[2px] uppercase px-3 py-1.5 rounded-full font-sans">
                            {property.status}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-7">
                    <p className="font-sans text-gray-400 text-xs uppercase tracking-widest mb-1">{property.location}</p>
                    <h2 className="font-serif font-bold text-[#1a1a1a] text-2xl mb-4">{property.label}</h2>
                    <p className="font-sans text-gray-500 text-sm leading-relaxed mb-6">{property.description}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-7">
                        {[
                            { label: "Bedrooms", value: property.beds },
                            { label: "Bathrooms", value: property.baths },
                            { label: "Size", value: property.size },
                        ].map((s) => (
                            <div key={s.label} className="bg-[#faf8f5] rounded-xl p-4 text-center border border-gray-100">
                                <p className="font-serif font-bold text-[#1a1a1a] text-lg">{s.value}</p>
                                <p className="font-sans text-gray-400 text-[10px] uppercase tracking-widest mt-0.5">{s.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a
                            href={`https://wa.me/15133725758?text=${encodeURIComponent(waMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-3.5 bg-[#E8691A] hover:bg-[#F5A623] text-white font-semibold text-sm rounded-xl no-underline transition-colors duration-200 font-sans text-center flex items-center justify-center gap-2"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                            </svg>
                            Enquire on WhatsApp
                        </a>
                        <button
                            onClick={onClose}
                            className="flex-1 py-3.5 border border-gray-200 hover:border-[#E8691A] text-gray-500 hover:text-[#E8691A] font-semibold text-sm rounded-xl transition-all duration-200 font-sans cursor-pointer bg-white"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ── Main Page ─────────────────────────────────────────────────
export default function RealEstate() {
    const [selectedProperty, setSelectedProperty] = useState(null);
    const videoRef = useRef(null);

    return (
        <>
            <Navbar />

            {/* ── Cinematic Video Hero ── */}
            <div className="relative h-screen min-h-[600px] overflow-hidden">
                <video
                    ref={videoRef}
                    src={houseVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Multi-layer overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Hero content — left aligned */}
                <div className="relative z-10 h-full flex flex-col justify-center px-6 max-w-6xl mx-auto">
                    <div className="max-w-xl">
                        {/* <span className="inline-block bg-[#E8691A]/20 border border-[#E8691A]/50 text-[#F5A623] text-xs tracking-[2.5px] uppercase font-sans px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              Real Estate · East Legon Hills
            </span> */}
                        <h1 className="font-serif font-bold text-white text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] mb-6">
                            Own a Piece of our <span className="text-[#F5A623] italic">Real Estate Housing</span>
                        </h1>
                        <p className="font-sans text-white/70 text-base leading-relaxed mb-10 max-w-md">
                            Premium houses and villas for sale in Accra's most sought-after neighbourhood. Built to last, designed to impress.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* <a
                href="#properties"
                className="px-7 py-4 bg-[#E8691A] hover:bg-[#F5A623] text-white font-semibold text-sm rounded-xl no-underline transition-colors duration-200 font-sans text-center"
              >
                View Properties
              </a> */}

                            <a
                                href="https://wa.me/15133725758"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-7 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-white font-semibold text-sm rounded-xl no-underline transition-all duration-200 font-sans text-center"
                            >
                                Talk to Us
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
                    <span className="font-sans text-white/40 text-xs uppercase tracking-widest">Scroll</span>
                    <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
                </div>
            </div>

            <main className="bg-[#faf8f5]">

                {/* ── Stats strip ── */}
                <div className="bg-[#0f1e2e] px-6 py-8">
                    <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                        {[
                            { value: "East Legon Hills", label: "Prime Location" },
                            { value: "100%", label: "Direct from Owner" },
                            { value: "5★", label: "Trusted Developer" },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <p className="font-serif font-bold text-[#F5A623] text-2xl mb-1">{stat.value}</p>
                                <p className="font-sans text-white/50 text-xs uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Properties Grid ── */}
                <div id="properties" className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-14">
                            <span className="inline-block text-[#E8691A] text-xs tracking-[3px] uppercase font-sans font-semibold mb-3">
                                Available Now
                            </span>
                            <h2 className="font-serif font-bold text-[#1a1a1a] text-[clamp(2rem,4vw,3rem)] leading-tight mb-4">
                                Featured Properties
                            </h2>
                            <p className="text-gray-500 font-sans text-base max-w-md mx-auto">
                                Click any property to see details and enquire directly — no agent fees, no delays.
                            </p>
                        </div>

                        {/* Asymmetric grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:auto-rows-[280px]">
                            {PROPERTIES.map((property, index) => (
                                <PropertyCard
                                    key={property.id}
                                    property={property}
                                    index={index}
                                    onClick={setSelectedProperty}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Why PhilGood Real Estate ── */}
                <div className="bg-white py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">

                            {/* Left text */}
                            <div className="lg:w-[42%]">
                                <span className="inline-block text-[#E8691A] text-xs tracking-[3px] uppercase font-sans font-semibold mb-3">
                                    Why Choose Us
                                </span>
                                <h2 className="font-serif font-bold text-[#1a1a1a] text-[clamp(1.8rem,3.5vw,2.8rem)] leading-tight mb-5">
                                    Real estate you can trust, from a name you already know
                                </h2>
                                <p className="font-sans text-gray-500 text-sm leading-relaxed mb-8">
                                    PhilGood Homes started with premium short-stay apartments — now we're bringing that same standard of quality and care to residential real estate. Every property we sell is one we're proud to put our name on.
                                </p>
                                <a
                                    href="https://wa.me/15133725758"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#E8691A] hover:bg-[#F5A623] text-white font-semibold text-sm rounded-xl no-underline transition-colors duration-200 font-sans"
                                >
                                    Start a Conversation
                                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5">
                                        <path d="M3 8h10M9 4l4 4-4 4" />
                                    </svg>
                                </a>
                            </div>

                            {/* Right grid */}
                            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {WHY_US.map((item) => (
                                    <div
                                        key={item.title}
                                        className="bg-[#faf8f5] rounded-2xl p-6 border border-gray-100 hover:border-[#E8691A]/30 hover:shadow-md transition-all duration-300 group"
                                    >
                                        <div className="w-11 h-11 rounded-xl bg-[#E8691A]/10 group-hover:bg-[#E8691A] flex items-center justify-center mb-4 transition-colors duration-300 text-[#E8691A] group-hover:text-white">
                                            {item.icon}
                                        </div>
                                        <h3 className="font-serif font-bold text-[#1a1a1a] text-base mb-2">{item.title}</h3>
                                        <p className="font-sans text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Final CTA ── */}
                <div className="relative py-24 px-6 overflow-hidden">
                    {/* Background video */}
                    <video
                        src={houseVideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#0f1e2e]/88" />

                    <div className="relative z-10 max-w-3xl mx-auto text-center">
                        <span className="inline-block text-[#F5A623] text-xs tracking-[3px] uppercase font-sans font-semibold mb-4">
                            Ready to Buy?
                        </span>
                        <h2 className="font-serif font-bold text-white text-[clamp(1.8rem,4vw,3rem)] leading-tight mb-5">
                            Find Your Home in <span className="text-[#F5A623] italic">East Legon Hills</span>
                        </h2>
                        <p className="font-sans text-white/60 text-base max-w-lg mx-auto mb-10">
                            Reach out on WhatsApp and we'll walk you through everything — pricing, site visits, documentation, and more. No pressure, just honest conversations.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://wa.me/15133725758?text=Hello%20PhilGood%20Homes!%20I'm%20interested%20in%20your%20real%20estate%20properties%20for%20sale%20in%20East%20Legon%20Hills.%20Could%20you%20please%20share%20more%20details%3F"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-[#E8691A] hover:bg-[#F5A623] text-white font-semibold text-sm rounded-xl no-underline transition-colors duration-200 font-sans flex items-center gap-2"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                                </svg>
                                WhatsApp Us Now
                            </a>
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm rounded-xl no-underline transition-all duration-200 font-sans"
                            >
                                Visit Contact Page
                            </Link>
                        </div>
                    </div>
                </div>

            </main>

            {/* ── Property Modal ── */}
            {selectedProperty && (
                <PropertyModal
                    property={selectedProperty}
                    onClose={() => setSelectedProperty(null)}
                />
            )}

            <Footer />
        </>
    );
}