import { useState } from "react";

function StarSelector({ value, onChange }) {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          className="bg-transparent border-none cursor-pointer p-0.5 transition-transform duration-150 hover:scale-110"
        >
          <svg
            viewBox="0 0 24 24"
            fill={(hovered || value) >= star ? "#F5A623" : "none"}
            stroke={(hovered || value) >= star ? "#F5A623" : "#d1d5db"}
            strokeWidth="1.5"
            className="w-8 h-8 transition-all duration-150"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </button>
      ))}
    </div>
  );
}

const STAR_LABELS = {
  1: "Poor",
  2: "Fair",
  3: "Good",
  4: "Great",
  5: "Excellent!",
};

export default function RatingWidget() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    apartment: "",
    rating: 0,
    review: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.rating || !form.review) {
      return;
    }

    const stars = "⭐".repeat(form.rating);
    const message = `Hello PhilGood Homes! 👋 I'd like to leave a review.

${stars} *${STAR_LABELS[form.rating]}* (${form.rating}/5)

*Name:* ${form.name}
*Apartment Stayed In:* ${form.apartment || "Not specified"}

*My Review:*
${form.review}

Thank you for a wonderful stay! 🙏`;

    window.open(
      `https://wa.me/233597096207?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setSubmitted(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", apartment: "", rating: 0, review: "" });
    }, 400);
  };

  const valid = form.name && form.rating > 0 && form.review;

  return (
    <>
      {/* ── Floating trigger button ── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

        {/* Tooltip label */}
        {!open && (
          <div className="bg-[#0f1e2e] text-white text-xs font-sans px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg animate-bounce">
            Rate your stay ⭐
          </div>
        )}

        <button
          onClick={() => setOpen(!open)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl border-2 cursor-pointer transition-all duration-300 ${
            open
              ? "bg-gray-700 border-gray-600 rotate-45"
              : "bg-[#E8691A] border-[#F5A623] hover:bg-[#F5A623]"
          }`}
        >
          {open ? (
            <svg viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" className="w-5 h-5">
              <path d="M2 2l12 12M14 2L2 14" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Slide-up panel ── */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm transition-all duration-400 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">

          {/* Header */}
          <div className="bg-[#0f1e2e] px-5 py-4 flex items-center justify-between">
            <div>
              <h3 className="font-serif font-bold text-white text-base">
                Rate Your Stay
              </h3>
              <p className="font-sans text-white/50 text-xs mt-0.5">
                Your feedback means the world to us
              </p>
            </div>
            <button
              onClick={handleClose}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer border-none transition-colors"
            >
              <svg viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" className="w-3 h-3">
                <path d="M2 2l8 8M10 2L2 10" />
              </svg>
            </button>
          </div>

          {submitted ? (
            /* ── Success state ── */
            <div className="p-7 text-center">
              <div className="w-14 h-14 rounded-full bg-[#E8691A]/10 flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="#E8691A" strokeWidth="2" strokeLinecap="round" className="w-6 h-6">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h4 className="font-serif font-bold text-[#1a1a1a] text-lg mb-2">
                Thank You! 🙏
              </h4>
              <p className="font-sans text-gray-500 text-sm mb-1">
                Your review has been sent to PhilGood Homes on WhatsApp.
              </p>
              <p className="font-sans text-gray-400 text-xs mb-6">
                We truly appreciate you taking the time.
              </p>
              <button
                onClick={handleClose}
                className="w-full py-2.5 border border-gray-200 hover:border-[#E8691A] text-gray-500 hover:text-[#E8691A] text-sm font-semibold rounded-xl cursor-pointer bg-white font-sans transition-all"
              >
                Close
              </button>
            </div>
          ) : (
            /* ── Form ── */
            <div className="p-5 flex flex-col gap-4">

              {/* Star rating */}
              <div>
                <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400 block mb-2">
                  Your Rating *
                </label>
                <StarSelector
                  value={form.rating}
                  onChange={(val) => setForm({ ...form, rating: val })}
                />
                {form.rating > 0 && (
                  <p className="font-sans text-[#E8691A] text-xs font-semibold mt-1">
                    {STAR_LABELS[form.rating]}
                  </p>
                )}
              </div>

              {/* Name */}
              <div className="flex flex-col gap-1">
                <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400">
                  Your Name *
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Kwame Asante"
                  className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-sans text-gray-700 outline-none focus:border-[#E8691A] transition-colors placeholder:text-gray-300"
                />
              </div>

              {/* Apartment */}
              <div className="flex flex-col gap-1">
                <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400">
                  Apartment Stayed In
                </label>
                <select
                  name="apartment"
                  value={form.apartment}
                  onChange={handleChange}
                  className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-sans text-gray-700 outline-none focus:border-[#E8691A] transition-colors"
                >
                  <option value="">Select apartment</option>
                  <option value="Studio Apartment">Studio Apartment</option>
                  <option value="1-Bedroom Suite">1-Bedroom Suite</option>
                  <option value="2-Bedroom Suite">2-Bedroom Suite</option>
                </select>
              </div>

              {/* Review */}
              <div className="flex flex-col gap-1">
                <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400">
                  Your Review *
                </label>
                <textarea
                  name="review"
                  value={form.review}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about your experience..."
                  className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-sans text-gray-700 outline-none focus:border-[#E8691A] transition-colors resize-none placeholder:text-gray-300"
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={!valid}
                className={`w-full py-3.5 font-semibold text-sm rounded-xl transition-all duration-200 font-sans cursor-pointer border-none flex items-center justify-center gap-2 ${
                  valid
                    ? "bg-[#E8691A] hover:bg-[#F5A623] text-white"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                Send Review on WhatsApp
              </button>

              <p className="text-center font-sans text-gray-400 text-[11px]">
                Opens WhatsApp with your review pre-filled
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}