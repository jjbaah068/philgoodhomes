import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero({ videoSrc = null, imageSrc = "/hero-bg.jpg" }) {
    console.log("videoSrc received:", videoSrc);
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guests, setGuests] = useState("2");
    const navigate = useNavigate();

    const handleBook = () => {
        if (!checkIn || !checkOut) {
            alert("Please select your check-in and check-out dates.");
            return;
        }
        navigate(`/book?checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`);
    };

    return (
        <section className="relative h-screen min-h-[600px] overflow-hidden">

            {/* Background — video or image */}
            {videoSrc ? (
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
            ) : (
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${imageSrc})` }}
                />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/65" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">

                {/* Eyebrow */}
                <span className="inline-block bg-[#E8691A]/20 border border-[#E8691A]/50 text-[#F5A623] text-xs tracking-[2.5px] uppercase font-sans px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
                    East Legon Hills · Accra, Ghana
                </span>

                {/* Headline */}
                <h1 className="font-serif font-bold text-white leading-tight m-0 mb-2 max-w-3xl text-[clamp(2.2rem,6vw,4.5rem)]">
                    Stay Like<br />
                    <span className="text-[#F5A623] italic">You Own It.</span>
                </h1>

                {/* Subheading */}
                <p className="font-sans text-white/80 max-w-xl mt-4 mb-10 text-[clamp(1rem,2vw,1.15rem)] leading-relaxed">
                    Thoughtfully designed apartments in the heart of East Legon Hills —
                    where every detail is crafted for your comfort, style, and peace of mind.
                </p>

                {/* Booking Bar */}
                <div className="flex flex-col sm:flex-row items-center gap-3 bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-3 w-full max-w-3xl">

                    {/* Check-in */}
                    <div className="flex flex-col flex-1 w-full px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                        <label className="text-white/60 text-[10px] uppercase tracking-widest font-sans mb-1">
                            Check-in
                        </label>
                        <input
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            min={new Date().toISOString().split("T")[0]}
                            className="bg-transparent text-white text-sm font-medium border-none outline-none cursor-pointer font-sans"
                        />
                    </div>

                    <div className="hidden sm:block w-px h-10 bg-white/20" />

                    {/* Check-out */}
                    <div className="flex flex-col flex-1 w-full px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                        <label className="text-white/60 text-[10px] uppercase tracking-widest font-sans mb-1">
                            Check-out
                        </label>
                        <input
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            min={checkIn || new Date().toISOString().split("T")[0]}
                            className="bg-transparent text-white text-sm font-medium border-none outline-none cursor-pointer font-sans"
                        />
                    </div>

                    <div className="hidden sm:block w-px h-10 bg-white/20" />

                    {/* Guests */}
                    <div className="flex flex-col flex-1 w-full px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                        <label className="text-white/60 text-[10px] uppercase tracking-widest font-sans mb-1">
                            Guests
                        </label>
                        <select
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="bg-transparent text-white text-sm font-medium border-none outline-none cursor-pointer font-sans"
                        >
                            {[1, 2, 3, 4, 5, 6].map((n) => (
                                <option key={n} value={n} className="text-gray-800 bg-white">
                                    {n} {n === 1 ? "Guest" : "Guests"}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Book Button */}
                    <button
                        onClick={handleBook}
                        className="w-full sm:w-auto px-8 py-4 bg-[#E8691A] hover:bg-[#F5A623] active:scale-95 text-white font-semibold text-sm rounded-xl transition-all duration-200 whitespace-nowrap font-sans cursor-pointer border-none"
                    >
                        Book Now
                    </button>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap justify-center items-center gap-4 mt-8 text-white/60 text-xs font-sans">
                    <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-[#F5A623]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        4.9 Rating on Airbnb
                    </span>
                    <span className="text-white/30">·</span>
                    <span>Free Cancellation</span>
                    <span className="text-white/30">·</span>
                    <span>Instant Booking</span>
                    <span className="text-white/30">·</span>
                    <span>24/7 Support</span>
                </div>
            </div>
        </section>
    );
}