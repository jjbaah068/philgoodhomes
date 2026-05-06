import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./../components/navbar";
import Footer from "./../components/footer";

const APARTMENTS = [
  { label: "Studio Apartment", value: "studio", price: 40, guests: 2 },
  { label: "1-Bedroom Suite", value: "1bedroom", price: 60, guests: 3 },
  { label: "2-Bedroom Suite", value: "2bedroom", price: 70, guests: 4 },
];

const STEPS = ["Booking Details", "Review & Pay", "Confirm"];

function getNights(checkin, checkout) {
  if (!checkin || !checkout) return 0;
  const diff = new Date(checkout) - new Date(checkin);
  return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-GB", {
    weekday: "short", day: "numeric", month: "short", year: "numeric",
  });
}

// ── Step 1 — Booking Details ──────────────────────────────────
function StepDetails({ form, setForm, onNext }) {
  const apt = APARTMENTS.find((a) => a.value === form.apartment);
  const nights = getNights(form.checkin, form.checkout);
  const total = apt ? apt.price * nights : 0;

  const valid = form.name && form.phone && form.apartment &&
    form.checkin && form.checkout && nights > 0;

  return (
    <div className="flex flex-col lg:flex-row gap-8">

      {/* Form */}
      <div className="flex-1 bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="bg-[#0f1e2e] px-7 py-5">
          <h2 className="font-serif font-bold text-white text-lg">Your Details</h2>
          <p className="font-sans text-white/50 text-xs mt-1">Tell us about your stay</p>
        </div>

        <div className="p-7 flex flex-col gap-5">

          {/* Name + Phone */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 flex flex-col gap-1.5">
              <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400">Full Name *</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Kwame Asante"
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-sans text-gray-700 outline-none focus:border-[#E8691A] transition-colors placeholder:text-gray-300"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1.5">
              <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400">Phone / WhatsApp *</label>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+233 ..."
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-sans text-gray-700 outline-none focus:border-[#E8691A] transition-colors placeholder:text-gray-300"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400">Email Address</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="your@email.com"
              className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-sans text-gray-700 outline-none focus:border-[#E8691A] transition-colors placeholder:text-gray-300"
            />
          </div>

          {/* Apartment */}
          <div className="flex flex-col gap-1.5">
            <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400">Apartment *</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {APARTMENTS.map((a) => (
                <button
                  key={a.value}
                  onClick={() => setForm({ ...form, apartment: a.value })}
                  className={`p-4 rounded-xl border-2 text-left cursor-pointer transition-all duration-200 ${
                    form.apartment === a.value
                      ? "border-[#E8691A] bg-[#E8691A]/5"
                      : "border-gray-200 bg-white hover:border-[#E8691A]/50"
                  }`}
                >
                  <p className={`font-sans font-semibold text-sm ${form.apartment === a.value ? "text-[#E8691A]" : "text-gray-700"}`}>
                    {a.label}
                  </p>
                  <p className="font-serif font-bold text-[#1a1a1a] text-lg mt-1">${a.price}<span className="text-xs text-gray-400 font-sans font-normal">/night</span></p>
                  <p className="font-sans text-gray-400 text-xs mt-0.5">Up to {a.guests} guests</p>
                </button>
              ))}
            </div>
          </div>

          {/* Dates */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 flex flex-col gap-1.5">
              <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400">Check-in *</label>
              <input
                type="date"
                value={form.checkin}
                onChange={(e) => setForm({ ...form, checkin: e.target.value })}
                min={new Date().toISOString().split("T")[0]}
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-sans text-gray-700 outline-none focus:border-[#E8691A] transition-colors"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1.5">
              <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400">Check-out *</label>
              <input
                type="date"
                value={form.checkout}
                onChange={(e) => setForm({ ...form, checkout: e.target.value })}
                min={form.checkin || new Date().toISOString().split("T")[0]}
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-sans text-gray-700 outline-none focus:border-[#E8691A] transition-colors"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="flex flex-col gap-1.5">
            <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400">Number of Guests</label>
            <select
              value={form.guests}
              onChange={(e) => setForm({ ...form, guests: e.target.value })}
              className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-sans text-gray-700 outline-none focus:border-[#E8691A] transition-colors"
            >
              {[1,2,3,4].map((n) => (
                <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
              ))}
            </select>
          </div>

          {/* Special requests */}
          <div className="flex flex-col gap-1.5">
            <label className="font-sans text-[10px] uppercase tracking-widest text-gray-400">Special Requests</label>
            <textarea
              value={form.requests}
              onChange={(e) => setForm({ ...form, requests: e.target.value })}
              rows={3}
              placeholder="Early check-in, airport pickup, dietary needs..."
              className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-sans text-gray-700 outline-none focus:border-[#E8691A] transition-colors resize-none placeholder:text-gray-300"
            />
          </div>

          <button
            onClick={onNext}
            disabled={!valid}
            className={`w-full py-4 font-semibold text-sm rounded-xl transition-all duration-200 font-sans cursor-pointer border-none ${
              valid
                ? "bg-[#E8691A] hover:bg-[#F5A623] text-white"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            Continue to Review →
          </button>
        </div>
      </div>

      {/* Summary sidebar */}
      <div className="lg:w-72 flex-shrink-0">
        <div className="sticky top-24 bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="bg-[#0f1e2e] px-6 py-4">
            <p className="font-sans text-white/50 text-xs uppercase tracking-widest">Booking Summary</p>
          </div>
          <div className="p-6 flex flex-col gap-4">
            {apt ? (
              <>
                <div>
                  <p className="font-sans text-gray-400 text-xs uppercase tracking-widest mb-1">Apartment</p>
                  <p className="font-serif font-bold text-[#1a1a1a] text-base">{apt.label}</p>
                </div>
                {form.checkin && form.checkout && nights > 0 && (
                  <>
                    <div className="flex justify-between text-sm font-sans text-gray-500">
                      <span>Check-in</span>
                      <span className="font-medium text-[#1a1a1a]">{formatDate(form.checkin)}</span>
                    </div>
                    <div className="flex justify-between text-sm font-sans text-gray-500">
                      <span>Check-out</span>
                      <span className="font-medium text-[#1a1a1a]">{formatDate(form.checkout)}</span>
                    </div>
                    <div className="flex justify-between text-sm font-sans text-gray-500">
                      <span>Duration</span>
                      <span className="font-medium text-[#1a1a1a]">{nights} night{nights > 1 ? "s" : ""}</span>
                    </div>
                    <div className="flex justify-between text-sm font-sans text-gray-500 border-t border-gray-100 pt-3">
                      <span>${apt.price} × {nights} nights</span>
                      <span className="font-medium text-[#1a1a1a]">${total}</span>
                    </div>
                    <div className="flex justify-between font-sans font-bold text-[#1a1a1a] text-base border-t border-gray-100 pt-3">
                      <span>Total</span>
                      <span className="text-[#E8691A]">${total}</span>
                    </div>
                  </>
                )}
                {(!form.checkin || !form.checkout || nights === 0) && (
                  <p className="font-sans text-gray-400 text-sm">Select your dates to see the total.</p>
                )}
              </>
            ) : (
              <p className="font-sans text-gray-400 text-sm">Select an apartment to see pricing.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Step 2 — Review & Pay ─────────────────────────────────────
function StepPay({ form, onNext, onBack }) {
  const apt = APARTMENTS.find((a) => a.value === form.apartment);
  const nights = getNights(form.checkin, form.checkout);
  const total = apt ? apt.price * nights : 0;
  const [method, setMethod] = useState(null);
  const [copied, setCopied] = useState("");

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(""), 2000);
  };

  const PAYMENT_METHODS = [
    {
      id: "momo",
      label: "Mobile Money (MoMo)",
      subtext: "MTN Mobile Money — Ghana",
      badge: "Recommended",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
      details: [
        { label: "MoMo Number", value: "0597096207", copyKey: "momo_number" },
        { label: "Account Name", value: "Philip Ofori-Yentumi", copyKey: "momo_name" },
        { label: "Network", value: "MTN Mobile Money", copyKey: null },
      ],
      instructions: [
        "Dial *170# on your phone or open your MTN MoMo app",
        "Select 'Transfer Money' → 'MoMo User'",
        `Enter number: 0597096207`,
        `Enter amount: GHS equivalent of $${total}`,
        "Enter your PIN to confirm",
        "You'll receive an SMS confirmation from MTN",
        "Screenshot it and send to us on WhatsApp",
      ],
    },
    {
      id: "cashapp",
      label: "Cash App",
      subtext: "For US-based guests",
      badge: null,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      details: [
        { label: "Cash App Tag", value: "$DrPhilit", copyKey: "cashapp_tag" },
        { label: "Amount", value: `$${total}`, copyKey: null },
      ],
      instructions: [
        "Open your Cash App",
        `Search for $DrPhilit`,
        `Send $${total}`,
        `Add note: "PhilGood Homes booking — ${form.name}"`,
        "Screenshot the confirmation and send to us on WhatsApp",
      ],
    },
    {
      id: "zelle",
      label: "Zelle",
      subtext: "For US-based guests",
      badge: null,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9,22 9,12 15,12 15,22" />
        </svg>
      ),
      details: [
        { label: "Email", value: "Philgoodservices@gmail.com", copyKey: "zelle_email" },
        { label: "Phone", value: "+1 (513) 372-5758", copyKey: "zelle_phone" },
        { label: "Amount", value: `$${total}`, copyKey: null },
      ],
      instructions: [
        "Open your Zelle app or bank's Zelle feature",
        "Send to: Philgoodservices@gmail.com",
        "Or phone: +1 (513) 372-5758",
        `Amount: $${total}`,
        `Add note: "PhilGood Homes booking — ${form.name}"`,
        "Screenshot the confirmation and send to us on WhatsApp",
      ],
    },
  ];

  const selected = PAYMENT_METHODS.find((m) => m.id === method);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 flex flex-col gap-6">

        {/* Booking summary card */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="bg-[#0f1e2e] px-7 py-5 flex items-center justify-between">
            <div>
              <h2 className="font-serif font-bold text-white text-lg">Review Your Booking</h2>
              <p className="font-sans text-white/50 text-xs mt-1">Check everything looks right</p>
            </div>
            <button
              onClick={onBack}
              className="text-white/50 hover:text-white font-sans text-xs cursor-pointer bg-transparent border-none underline"
            >
              Edit
            </button>
          </div>
          <div className="p-7 grid grid-cols-2 sm:grid-cols-4 gap-5">
            {[
              { label: "Guest", value: form.name },
              { label: "Apartment", value: apt?.label },
              { label: "Check-in", value: formatDate(form.checkin) },
              { label: "Check-out", value: formatDate(form.checkout) },
              { label: "Nights", value: `${nights} night${nights > 1 ? "s" : ""}` },
              { label: "Guests", value: `${form.guests} guest${form.guests > 1 ? "s" : ""}` },
              { label: "Rate", value: `$${apt?.price}/night` },
              { label: "Total", value: `$${total}`, highlight: true },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-sans text-[10px] uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
                <p className={`font-serif font-bold text-base ${item.highlight ? "text-[#E8691A]" : "text-[#1a1a1a]"}`}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment method selector */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="bg-[#0f1e2e] px-7 py-5">
            <h2 className="font-serif font-bold text-white text-lg">Choose Payment Method</h2>
            <p className="font-sans text-white/50 text-xs mt-1">Select how you'd like to pay</p>
          </div>

          <div className="p-7 flex flex-col gap-4">
            {PAYMENT_METHODS.map((pm) => (
              <div key={pm.id}>
                <button
                  onClick={() => setMethod(method === pm.id ? null : pm.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 text-left ${
                    method === pm.id
                      ? "border-[#E8691A] bg-[#E8691A]/5"
                      : "border-gray-200 bg-white hover:border-[#E8691A]/40"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${method === pm.id ? "bg-[#E8691A] text-white" : "bg-gray-100 text-gray-500"}`}>
                    {pm.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className={`font-sans font-semibold text-sm ${method === pm.id ? "text-[#E8691A]" : "text-[#1a1a1a]"}`}>
                        {pm.label}
                      </p>
                      {pm.badge && (
                        <span className="bg-[#E8691A]/15 text-[#E8691A] text-[9px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full font-sans">
                          {pm.badge}
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-gray-400 text-xs mt-0.5">{pm.subtext}</p>
                  </div>
                  <svg
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ${method === pm.id ? "rotate-180 text-[#E8691A]" : "text-gray-300"}`}
                  >
                    <path d="M2 4l4 4 4-4" />
                  </svg>
                </button>

                {/* Expanded payment details */}
                {method === pm.id && selected && (
                  <div className="mt-3 rounded-xl border border-[#E8691A]/20 bg-[#faf8f5] overflow-hidden">

                    {/* Account details */}
                    <div className="p-5 border-b border-[#E8691A]/10">
                      <p className="font-sans text-[10px] uppercase tracking-widest text-gray-400 mb-3">Payment Details</p>
                      <div className="flex flex-col gap-3">
                        {selected.details.map((d) => (
                          <div key={d.label} className="flex items-center justify-between">
                            <div>
                              <p className="font-sans text-gray-400 text-xs">{d.label}</p>
                              <p className="font-sans font-semibold text-[#1a1a1a] text-sm">{d.value}</p>
                            </div>
                            {d.copyKey && (
                              <button
                                onClick={() => copyToClipboard(d.value, d.copyKey)}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-sans font-medium cursor-pointer border transition-all duration-200 ${
                                  copied === d.copyKey
                                    ? "bg-green-50 border-green-200 text-green-600"
                                    : "bg-white border-gray-200 text-gray-500 hover:border-[#E8691A] hover:text-[#E8691A]"
                                }`}
                              >
                                {copied === d.copyKey ? (
                                  <>
                                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3 h-3">
                                      <path d="M2 6l3 3 5-5" />
                                    </svg>
                                    Copied
                                  </>
                                ) : (
                                  <>
                                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-3 h-3">
                                      <rect x="3" y="3" width="7" height="7" rx="1" />
                                      <path d="M2 8V2h6" />
                                    </svg>
                                    Copy
                                  </>
                                )}
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Step by step instructions */}
                    <div className="p-5">
                      <p className="font-sans text-[10px] uppercase tracking-widest text-gray-400 mb-3">How to Pay</p>
                      <ol className="flex flex-col gap-2.5">
                        {selected.instructions.map((step, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-5 h-5 rounded-full bg-[#E8691A] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                              {i + 1}
                            </span>
                            <span className="font-sans text-gray-600 text-sm leading-relaxed">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onBack}
            className="px-6 py-3.5 border border-gray-200 hover:border-[#E8691A] text-gray-500 hover:text-[#E8691A] font-semibold text-sm rounded-xl transition-all duration-200 font-sans cursor-pointer bg-white"
          >
            ← Back
          </button>
          <button
            onClick={() => method && onNext(method)}
            disabled={!method}
            className={`flex-1 py-3.5 font-semibold text-sm rounded-xl transition-all duration-200 font-sans cursor-pointer border-none ${
              method
                ? "bg-[#E8691A] hover:bg-[#F5A623] text-white"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            I've Made the Payment →
          </button>
        </div>
      </div>

      {/* Summary sidebar */}
      <div className="lg:w-72 flex-shrink-0">
        <div className="sticky top-24 bg-[#0f1e2e] rounded-2xl overflow-hidden">
          <div className="px-6 py-5 border-b border-white/10">
            <p className="font-sans text-white/40 text-xs uppercase tracking-widest mb-1">Total Due</p>
            <p className="font-serif font-bold text-white text-4xl">${total}</p>
            <p className="font-sans text-white/40 text-xs mt-1">{nights} nights · {apt?.label}</p>
          </div>
          <div className="px-6 py-5 flex flex-col gap-3">
            <div className="flex items-start gap-2">
              <svg viewBox="0 0 16 16" fill="none" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4 flex-shrink-0 mt-0.5">
                <path d="M8 1l1.8 3.6L14 5.6l-3 2.9.7 4.1L8 10.5l-3.7 2.1.7-4.1-3-2.9 4.2-.6z" />
              </svg>
              <p className="font-sans text-white/60 text-xs">4.9 rated on Airbnb</p>
            </div>
            <div className="flex items-start gap-2">
              <svg viewBox="0 0 16 16" fill="none" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4 flex-shrink-0 mt-0.5">
                <path d="M8 14s-6-4-6-8a6 6 0 0 1 12 0c0 4-6 8-6 8z" />
              </svg>
              <p className="font-sans text-white/60 text-xs">East Legon Hills, Accra</p>
            </div>
            <div className="flex items-start gap-2">
              <svg viewBox="0 0 16 16" fill="none" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4 flex-shrink-0 mt-0.5">
                <path d="M2 8h12M8 2v12" />
              </svg>
              <p className="font-sans text-white/60 text-xs">Free cancellation available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Step 3 — Confirmation ─────────────────────────────────────
function StepConfirm({ form, paymentMethod }) {
  const apt = APARTMENTS.find((a) => a.value === form.apartment);
  const nights = getNights(form.checkin, form.checkout);
  const total = apt ? apt.price * nights : 0;

  const methodLabels = {
    momo: "MTN Mobile Money",
    cashapp: "Cash App",
    zelle: "Zelle",
  };

  const waMessage = `Hello PhilGood Homes! 👋 I've just made a payment for my booking.

*Booking Details:*
- Name: ${form.name}
- Phone: ${form.phone}
- Apartment: ${apt?.label}
- Check-in: ${formatDate(form.checkin)}
- Check-out: ${formatDate(form.checkout)}
- Nights: ${nights}
- Guests: ${form.guests}
- Total Paid: $${total}
- Payment Method: ${methodLabels[paymentMethod]}
${form.requests ? `• Special Requests: ${form.requests}` : ""}

Please confirm my booking. I'm attaching my payment screenshot. 🙏`;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">

        {/* Success header */}
        <div className="bg-[#0f1e2e] px-8 py-10 text-center">
          <div className="w-16 h-16 rounded-full bg-[#E8691A] flex items-center justify-center mx-auto mb-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" className="w-7 h-7">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h2 className="font-serif font-bold text-white text-2xl mb-2">Almost There!</h2>
          <p className="font-sans text-white/60 text-sm max-w-sm mx-auto">
            Your payment details have been submitted. Send your payment screenshot to confirm your booking.
          </p>
        </div>

        {/* Booking reference */}
        <div className="px-8 py-6 border-b border-gray-100">
          <div className="bg-[#faf8f5] rounded-xl p-5">
            <p className="font-sans text-[10px] uppercase tracking-widest text-gray-400 mb-4">Booking Summary</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Name", value: form.name },
                { label: "Apartment", value: apt?.label },
                { label: "Check-in", value: formatDate(form.checkin) },
                { label: "Check-out", value: formatDate(form.checkout) },
                { label: "Duration", value: `${nights} night${nights > 1 ? "s" : ""}` },
                { label: "Total", value: `$${total}`, highlight: true },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-sans text-gray-400 text-xs mb-0.5">{item.label}</p>
                  <p className={`font-sans font-semibold text-sm ${item.highlight ? "text-[#E8691A]" : "text-[#1a1a1a]"}`}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Next steps */}
        <div className="px-8 py-6 border-b border-gray-100">
          <p className="font-sans text-[10px] uppercase tracking-widest text-gray-400 mb-4">Next Steps</p>
          <div className="flex flex-col gap-4">
            {[
              {
                step: "1",
                title: "Send your payment screenshot",
                desc: "Take a screenshot of your payment confirmation (MTN SMS, Cash App, or Zelle receipt).",
              },
              {
                step: "2",
                title: "WhatsApp it to PhilGood Homes",
                desc: "Tap the button below — it opens WhatsApp with your booking details pre-filled. Just attach the screenshot.",
              },
              {
                step: "3",
                title: "Receive booking confirmation",
                desc: "PhilGood Homes will confirm your booking and send you check-in details via WhatsApp.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#E8691A] text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <p className="font-sans font-semibold text-[#1a1a1a] text-sm">{item.title}</p>
                  <p className="font-sans text-gray-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="px-8 py-6 flex flex-col gap-3">
            
          <a
            href={`https://wa.me/233597096207?text=${encodeURIComponent(waMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-[#E8691A] hover:bg-[#F5A623] text-white font-semibold text-sm rounded-xl no-underline transition-colors duration-200 font-sans flex items-center justify-center gap-2"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            Send Screenshot on WhatsApp
          </a>
          <Link
            to="/"
            className="w-full py-3 border border-gray-200 hover:border-[#E8691A] text-gray-500 hover:text-[#E8691A] font-semibold text-sm rounded-xl no-underline transition-all duration-200 font-sans text-center"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────
export default function Book() {
  const [step, setStep] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    apartment: "", checkin: "", checkout: "",
    guests: "2", requests: "",
  });

  const goNext = () => {
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePay = (method) => {
    setPaymentMethod(method);
    goNext();
  };

  return (
    <>
      <Navbar />

      {/* ── Page Hero ── */}
      <div className="bg-[#0f1e2e] pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-[#F5A623] text-xs tracking-[3px] uppercase font-sans font-semibold mb-3">
            Reservations
          </span>
          <h1 className="font-serif font-bold text-white text-[clamp(2.2rem,5vw,3.5rem)] leading-tight mb-6">
            Book Your <span className="text-[#F5A623] italic">Stay</span>
          </h1>

          {/* Step indicator */}
          <div className="flex items-center gap-0">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-sans transition-all duration-300 ${
                    i < step ? "bg-[#E8691A] text-white"
                    : i === step ? "bg-[#F5A623] text-white"
                    : "bg-white/10 text-white/40"
                  }`}>
                    {i < step ? (
                      <svg viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" className="w-3 h-3">
                        <path d="M2 6l3 3 5-5" />
                      </svg>
                    ) : i + 1}
                  </div>
                  <span className={`font-sans text-xs font-medium hidden sm:block ${
                    i === step ? "text-white" : "text-white/40"
                  }`}>
                    {s}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`w-8 sm:w-16 h-px mx-3 transition-all duration-300 ${i < step ? "bg-[#E8691A]" : "bg-white/15"}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <main className="bg-[#faf8f5] py-16 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {step === 0 && <StepDetails form={form} setForm={setForm} onNext={goNext} />}
          {step === 1 && <StepPay form={form} onNext={handlePay} onBack={goBack} />}
          {step === 2 && <StepConfirm form={form} paymentMethod={paymentMethod} />}
        </div>
      </main>

      <Footer />
    </>
  );
}