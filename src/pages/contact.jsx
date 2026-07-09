import { useState } from "react";
import Navbar from "./../components/navbar";
import Footer from "./../components/footer";

const CONTACT_METHODS = [
  {
    label: "WhatsApp",
    value: "+233 59 709 6207",
    subtext: "Fastest response — usually within minutes",
    href: "https://wa.me/233597096207",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
    color: "bg-[#E8691A]",
  },
  {
    label: "Phone",
    value: "+233 59 709 6207",
    subtext: "Available daily — 7am to 10pm",
    href: "tel:+233597096207",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    color: "bg-[#1a2a3a]",
  },
  {
    label: "Instagram",
    value: "@philgoodhomes",
    subtext: "Follow us for updates and availability",
    href: "https://instagram.com/philgoodhomes",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
    color: "bg-[#F5A623]",
  },
  {
    label: "TikTok",
    value: "@philgoodhomes",
    subtext: "Watch apartment tours and guest highlights",
    href: "https://tiktok.com/@philgoodhomes",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
      </svg>
    ),
    color: "bg-[#1a2a3a]",
  },
];

const FAQS = [
  {
    q: "What time is check-in and check-out?",
    a: "Check-in is from 2:00 PM and check-out is by 11:00 AM. Early check-in or late check-out may be available on request — just WhatsApp us in advance.",
  },
  {
    q: "Is airport pickup available?",
    a: "Yes! We can arrange airport pickup from Kotoka International Airport for an additional fee. Just send us your flight information, and we will take care of the rest, making your arrival as convenient and stress-free as possible.",
  },
  {
    q: "How do I make a booking?",
    a: "You can book directly through our website or via Airbnb. For direct bookings with no platform fees, use the Book Now button or WhatsApp us directly.",
  },
  {
    q: "Is the neighbourhood safe?",
    a: "Yes — East Legon Hills is a quiet, secure residential area with 24/7 security on the property and outdoor CCTV monitoring.",
  },
  {
    q: "Can I extend my stay?",
    a: "Absolutely. If the apartment is available, we're happy to extend your booking. Just let us know as early as possible so we can arrange it.",
  },
  {
    q: "Are utilities included in the price?",
    a: "Yes — electricity, water, WiFi, and generator backup are all included in your nightly rate. No hidden charges.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left bg-transparent border-none cursor-pointer group"
      >
        <span className={`font-sans font-semibold text-sm transition-colors duration-200 pr-6 ${open ? "text-[#E8691A]" : "text-[#1a1a1a] group-hover:text-[#E8691A]"}`}>
          {q}
        </span>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open ? "bg-[#E8691A] rotate-45" : "bg-gray-100"}`}>
          <svg viewBox="0 0 12 12" fill="none" stroke={open ? "white" : "#888"} strokeWidth="2" strokeLinecap="round" className="w-3 h-3">
            <path d="M6 2v8M2 6h8" />
          </svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 pb-5" : "max-h-0"}`}>
        <p className="font-sans text-gray-500 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", apartment: "", checkin: "", checkout: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.message) {
      alert("Please fill in your name, phone number, and message.");
      return;
    }

    // Build WhatsApp message from form
    const text = `Hello PhilGood Homes! 👋

*Name:* ${form.name}
*Phone:* ${form.phone}
*Apartment Interest:* ${form.apartment || "Not specified"}
*Check-in:* ${form.checkin || "Not specified"}
*Check-out:* ${form.checkout || "Not specified"}

*Message:*
${form.message}`;

    window.open(`https://wa.me/233597096207?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      {/* ── Page Hero ── */}
      <div className="bg-[#0f1e2e] pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-[#F5A623] text-xs tracking-[3px] uppercase font-sans font-semibold mb-3">
            Get In Touch
          </span>
          <h1 className="font-serif font-bold text-white text-[clamp(2.2rem,5vw,3.5rem)] leading-tight mb-4">
            We'd Love to <span className="text-[#F5A623] italic">Hear From You</span>
          </h1>
          <p className="font-sans text-white/60 text-base max-w-lg">
            Have a question about availability, pricing, or anything else? Reach out — we're friendly, responsive, and always happy to help.
          </p>
        </div>
      </div>

      <main className="bg-[#faf8f5] py-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* ── Top section — contact methods + form ── */}
          <div className="flex flex-col lg:flex-row gap-10 mb-20">

            {/* Left — contact methods */}
            <div className="lg:w-[42%] flex flex-col gap-4">
              <div className="mb-2">
                <span className="inline-block text-[#E8691A] text-xs tracking-[3px] uppercase font-sans font-semibold mb-2">
                  Reach Us Directly
                </span>
                <h2 className="font-serif font-bold text-[#1a1a1a] text-2xl">
                  Choose how you'd like to connect
                </h2>
              </div>

              {CONTACT_METHODS.map((method) => (
                
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#E8691A] hover:shadow-md no-underline transition-all duration-200 group"
                >
                  <div className={`w-12 h-12 rounded-xl ${method.color} flex items-center justify-center flex-shrink-0 text-white group-hover:scale-110 transition-transform duration-200`}>
                    {method.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-gray-400 mb-0.5">{method.label}</p>
                    <p className="font-serif font-bold text-[#1a1a1a] text-base group-hover:text-[#E8691A] transition-colors duration-200">{method.value}</p>
                    <p className="font-sans text-gray-400 text-xs mt-0.5">{method.subtext}</p>
                  </div>
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4 text-gray-300 group-hover:text-[#E8691A] transition-colors flex-shrink-0">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
              ))}

              {/* Location card */}
              <div className="flex items-start gap-4 bg-[#0f1e2e] rounded-2xl p-5 mt-1">
                <div className="w-12 h-12 rounded-xl bg-[#E8691A] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-white/30 mb-0.5">Our Location</p>
                  <p className="font-serif font-bold text-white text-base">East Legon Hills</p>
                  <p className="font-sans text-white/50 text-xs mt-0.5">Accra, Ghana </p>
                </div>
              </div>
            </div>

            {/* Right — enquiry form */}
            <div className="flex-1">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

                <div className="bg-[#0f1e2e] px-7 py-5">
                  <h3 className="font-serif font-bold text-white text-lg">Send an Enquiry</h3>
                  <p className="font-sans text-white/50 text-xs mt-1">We'll get back to you on WhatsApp within minutes.</p>
                </div>

                {submitted ? (
                  <div className="p-10 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#E8691A]/10 flex items-center justify-center mx-auto mb-4">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#E8691A" strokeWidth="2" strokeLinecap="round" className="w-7 h-7">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <h4 className="font-serif font-bold text-[#1a1a1a] text-xl mb-2">Message Sent!</h4>
                    <p className="font-sans text-gray-500 text-sm mb-6">Your enquiry has been opened in WhatsApp. We'll reply shortly.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 border border-gray-200 rounded-xl text-sm font-sans text-gray-500 hover:border-[#E8691A] hover:text-[#E8691A] transition-all cursor-pointer bg-white"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <div className="p-7 flex flex-col gap-5">

                    {/* Name + Phone */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1 flex flex-col gap-1.5">
                        <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400">Your Name *</label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="e.g. Kwame Asante"
                          className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-sans text-gray-700 outline-none focus:border-[#E8691A] transition-colors placeholder:text-gray-300"
                        />
                      </div>
                      <div className="flex-1 flex flex-col gap-1.5">
                        <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400">Phone / WhatsApp *</label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+233 ..."
                          className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-sans text-gray-700 outline-none focus:border-[#E8691A] transition-colors placeholder:text-gray-300"
                        />
                      </div>
                    </div>

                    {/* Apartment */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400">Apartment Interest</label>
                      <select
                        name="apartment"
                        value={form.apartment}
                        onChange={handleChange}
                        className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-sans text-gray-700 outline-none focus:border-[#E8691A] transition-colors"
                      >
                        <option value="">Select an apartment</option>
                        <option value="Studio Apartment ($40/night)">Studio Apartment — $40/night</option>
                        <option value="1-Bedroom Suite ($60/night)">1-Bedroom Suite — $60/night</option>
                        <option value="2-Bedroom Suite ($70/night)">2-Bedroom Suite — $70/night</option>
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </div>

                    {/* Dates */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1 flex flex-col gap-1.5">
                        <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400">Check-in Date</label>
                        <input
                          type="date"
                          name="checkin"
                          value={form.checkin}
                          onChange={handleChange}
                          min={new Date().toISOString().split("T")[0]}
                          className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-sans text-gray-700 outline-none focus:border-[#E8691A] transition-colors"
                        />
                      </div>
                      <div className="flex-1 flex flex-col gap-1.5">
                        <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400">Check-out Date</label>
                        <input
                          type="date"
                          name="checkout"
                          value={form.checkout}
                          onChange={handleChange}
                          min={form.checkin || new Date().toISOString().split("T")[0]}
                          className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-sans text-gray-700 outline-none focus:border-[#E8691A] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400">Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us what you need — questions about availability, pricing, or anything else..."
                        className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-sans text-gray-700 outline-none focus:border-[#E8691A] transition-colors resize-none placeholder:text-gray-300"
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="w-full py-4 bg-[#E8691A] hover:bg-[#F5A623] text-white font-semibold text-sm rounded-xl transition-colors duration-200 font-sans cursor-pointer border-none flex items-center justify-center gap-2"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                      </svg>
                      Send via WhatsApp
                    </button>

                    <p className="text-center font-sans text-gray-400 text-xs">
                      Tapping send will open WhatsApp with your message pre-filled.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ── FAQ Section ── */}
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-[38%]">
              <span className="inline-block text-[#E8691A] text-xs tracking-[3px] uppercase font-sans font-semibold mb-3">
                FAQ
              </span>
              <h2 className="font-serif font-bold text-[#1a1a1a] text-[clamp(1.8rem,3vw,2.4rem)] leading-tight mb-4">
                Questions we get asked a lot
              </h2>
              <p className="font-sans text-gray-500 text-sm leading-relaxed mb-6">
                Can't find what you're looking for? Send us a WhatsApp and we'll answer straight away.
              </p>


              <a
                href="https://wa.me/233597096207"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#E8691A] hover:bg-[#F5A623] text-white font-semibold text-sm rounded-xl no-underline transition-colors duration-200 font-sans"
              >
                Ask on WhatsApp
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>

            <div className="flex-1 bg-white rounded-2xl border border-gray-100 px-7 py-2">
              {FAQS.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}