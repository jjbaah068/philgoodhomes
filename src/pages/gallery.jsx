import { useState } from "react";
import Navbar from "./../components/navbar";
import Footer from "./../components/footer";

// ── Images — update paths to match yours ──
import slide1 from "../assets/images/slide1.jpeg";
import slide2 from "../assets/images/slide2.jpeg";
import kitchen from "../assets/images/kitchen.jpeg";
import waterheater from "../assets/images/waterheater.jpeg";
import twokitchen from "../assets/images/twokitchen.png";
import aircondition from "../assets/images/aircondition.jpg";
import bathroom from "../assets/images/bathroom.jpg";
import two from "../assets/images/two.png";
import twoliving from "../assets/images/twoliving.png";
import herobg from "../assets/videos/hero.mp4";

const CATEGORIES = ["All", "Living Spaces", "Kitchen", "Bathroom", "Bedroom"];

const GALLERY_ITEMS = [
    { type: "image", src: slide1, category: "Living Spaces", caption: "Open-plan living area", featured: true },
    { type: "image", src: slide2, category: "Bedroom", caption: "Premium bedroom suite" },
    { type: "image", src: kitchen, category: "Kitchen", caption: "Fully equipped kitchen" },
    { type: "image", src: bathroom, category: "Bathroom", caption: "Private en-suite bathroom" },
    { type: "image", src: aircondition, category: "Living Spaces", caption: "Climate-controlled rooms" },
    { type: "image", src: waterheater, category: "Bathroom", caption: "Hot water on demand" },
    { type: "image", src: twokitchen, category: "Kitchen", caption: "Two-person kitchen" },
    { type: "image", src: two, category: "Living Spaces", caption: "One person living space" },
    { type: "image", src: twoliving, category: "Living Spaces", caption: "Two-person living space" },
    { type: "video", src: herobg, category: "Living Spaces", caption: "PhilGood Homes — East Legon Hills", featured: true },
];

// ── Lightbox ──────────────────────────────────────────────────
function Lightbox({ items, startIndex, onClose }) {
    const [current, setCurrent] = useState(startIndex);

    const prev = (e) => {
        e.stopPropagation();
        setCurrent((p) => (p - 1 + items.length) % items.length);
    };
    const next = (e) => {
        e.stopPropagation();
        setCurrent((p) => (p + 1) % items.length);
    };

    const item = items[current];

    return (
        <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={onClose}
        >
            {/* Close */}
            <button
                onClick={onClose}
                className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center cursor-pointer transition-all"
            >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M2 2l12 12M14 2L2 14" />
                </svg>
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-5 bg-white/10 backdrop-blur-sm text-white text-xs font-sans px-3 py-1.5 rounded-full">
                {current + 1} / {items.length}
            </div>

            {/* Media */}
            <div
                className="relative max-w-5xl w-full mx-6 rounded-2xl overflow-hidden"
                style={{ marginBottom: "80px" }}
                onClick={(e) => e.stopPropagation()}
            >
                {item.type === "video" ? (
                    <video
                        src={item.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                        className="w-full max-h-[75vh] object-contain rounded-2xl"
                    />
                ) : (
                    <img
                        src={item.src}
                        alt={item.caption}
                        className="w-full max-h-[75vh] object-contain rounded-2xl"
                    />
                )}

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                    <p className="font-serif text-white font-bold text-lg">{item.caption}</p>
                    <p className="font-sans text-white/50 text-xs mt-0.5 uppercase tracking-widest">{item.category}</p>
                </div>
            </div>

            {/* Prev / Next */}
            <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center cursor-pointer transition-all"
            >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M10 3L5 8l5 5" />
                </svg>
            </button>
            <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center cursor-pointer transition-all"
            >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M6 3l5 5-5 5" />
                </svg>
            </button>

            {/* Thumbnail strip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-lg px-4 pb-1">
                {items.map((it, i) => (
                    <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                        className={`flex-shrink-0 w-14 h-10 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${i === current ? "border-[#F5A623] opacity-100" : "border-transparent opacity-40 hover:opacity-70"
                            }`}
                    >
                        {it.type === "video" ? (
                            <div className="w-full h-full bg-[#1a2a3a] flex items-center justify-center">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#F5A623]">
                                    <polygon points="5,3 19,12 5,21" />
                                </svg>
                            </div>
                        ) : (
                            <img src={it.src} alt="" className="w-full h-full object-cover" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}

// ── Main Page ─────────────────────────────────────────────────
export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const filtered = activeCategory === "All"
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

    const openLightbox = (index) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    return (
        <>
            <Navbar />

            {/* ── Page Hero ── */}
            <div className="bg-[#0f1e2e] pt-32 pb-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <span className="inline-block text-[#F5A623] text-xs tracking-[3px] uppercase font-sans font-semibold mb-3">
                        Visual Tour
                    </span>
                    <h1 className="font-serif font-bold text-white text-[clamp(2.2rem,5vw,3.5rem)] leading-tight mb-4">
                        Inside <span className="text-[#F5A623] italic">PhilGood Homes</span>
                    </h1>
                    <p className="font-sans text-white/60 text-base max-w-lg">
                        Take a look around — every corner of our apartments is designed to make you feel right at home.
                    </p>
                </div>
            </div>

            <main className="bg-[#faf8f5] py-16 px-6">
                <div className="max-w-6xl mx-auto">

                    {/* ── Category Filter ── */}
                    <div className="flex items-center gap-2 flex-wrap mb-10">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-sans font-medium border transition-all duration-200 cursor-pointer ${activeCategory === cat
                                    ? "bg-[#E8691A] border-[#E8691A] text-white"
                                    : "bg-white border-gray-200 text-gray-500 hover:border-[#E8691A] hover:text-[#E8691A]"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                        <span className="ml-auto font-sans text-gray-400 text-sm">
                            {filtered.length} {filtered.length === 1 ? "item" : "items"}
                        </span>
                    </div>

                    {/* ── Masonry-style Grid ── */}
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                        {filtered.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => openLightbox(
                                    // find real index in full array for lightbox to work correctly
                                    GALLERY_ITEMS.findIndex((g) => g.src === item.src && g.caption === item.caption)
                                )}
                                className="group relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer"
                                style={{ aspectRatio: item.featured ? "16/9" : index % 3 === 0 ? "4/5" : "4/3" }}
                            >
                                {/* Media */}
                                {item.type === "video" ? (
                                    <video
                                        src={item.src}
                                        muted
                                        loop
                                        playsInline
                                        autoPlay
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <img
                                        src={item.src}
                                        alt={item.caption}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                )}

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400" />

                                {/* Video badge */}
                                {item.type === "video" && (
                                    <div className="absolute top-3 left-3 bg-[#E8691A] text-white text-[10px] font-semibold tracking-[1.5px] uppercase px-2.5 py-1 rounded-full font-sans flex items-center gap-1.5">
                                        <svg viewBox="0 0 12 12" fill="currentColor" className="w-2.5 h-2.5">
                                            <polygon points="2,1 10,6 2,11" />
                                        </svg>
                                        Video
                                    </div>
                                )}

                                {/* Expand icon */}
                                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <svg viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" className="w-3.5 h-3.5">
                                        <path d="M5 2H2v3M11 2h3v3M5 14H2v-3M11 14h3v-3" />
                                    </svg>
                                </div>

                                {/* Caption on hover */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <p className="font-serif font-bold text-white text-sm">{item.caption}</p>
                                    <p className="font-sans text-white/60 text-[10px] uppercase tracking-widest mt-0.5">{item.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ── Book CTA ── */}
                    <div className="mt-20 bg-[#0f1e2e] rounded-2xl px-8 py-14 text-center">
                        <span className="inline-block text-[#F5A623] text-xs tracking-[3px] uppercase font-sans font-semibold mb-3">
                            Like What You See?
                        </span>
                        <h3 className="font-serif font-bold text-white text-[clamp(1.6rem,3vw,2.4rem)] mb-3">
                            Come Experience It In Person
                        </h3>
                        <p className="font-sans text-white/50 text-sm max-w-md mx-auto mb-8">
                            Photos tell part of the story — staying here tells the rest. Book your dates and make PhilGood Homes your home in Accra.
                        </p>
                    </div>

                </div>
            </main>

            {/* ── Lightbox ── */}
            {lightboxIndex !== null && (
                <Lightbox
                    items={GALLERY_ITEMS}
                    startIndex={lightboxIndex}
                    onClose={closeLightbox}
                />
            )}

            <Footer />
        </>
    );
}