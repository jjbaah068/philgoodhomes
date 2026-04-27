import { Link } from "react-router-dom";
import Navbar from "./../components/navbar";
import Footer from "./../components/footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing our website or making a booking with PhilGood Homes, you agree to be bound by these Terms of Use.",
      "If you do not agree with any part of these terms, please do not use our services.",
      "These terms apply to all visitors, guests, and anyone who accesses or uses PhilGood Homes services.",
    ],
  },
  {
    title: "Booking and Reservations",
    content: [
      "All bookings are subject to availability. A booking is only confirmed once PhilGood Homes has acknowledged receipt of your payment and sent a confirmation via WhatsApp.",
      "You must be at least 18 years of age to make a booking.",
      "The information you provide during booking must be accurate and complete. PhilGood Homes reserves the right to cancel a booking if false information is provided.",
      "Bookings are non-transferable. The person named on the booking must be present at check-in.",
    ],
  },
  {
    title: "Payment",
    content: [
      "Payment is required to confirm your booking. Accepted payment methods include MTN Mobile Money, Cash App, and Zelle.",
      "Prices are displayed in US Dollars (USD). For Mobile Money payments, the equivalent in Ghana Cedis (GHS) at the current exchange rate applies.",
      "PhilGood Homes is not responsible for transaction fees charged by your payment provider.",
      "Proof of payment must be sent via WhatsApp to complete your booking confirmation.",
    ],
  },
  {
    title: "Cancellation and Refund Policy",
    content: [
      "Cancellations made more than 48 hours before the check-in date are eligible for a full refund.",
      "Cancellations made within 48 hours of check-in are non-refundable.",
      "No-shows are non-refundable.",
      "To cancel a booking, contact PhilGood Homes via WhatsApp at +233 59 709 6207 as soon as possible.",
      "Refunds, where applicable, will be processed via the same payment method used for the original transaction within 5–7 business days.",
    ],
  },
  {
    title: "Check-in and Check-out",
    content: [
      "Standard check-in time is 2:00 PM. Standard check-out time is 11:00 AM.",
      "Early check-in or late check-out may be available upon request and is subject to availability. Additional charges may apply.",
      "Guests must present a valid government-issued ID at check-in.",
      "The exact apartment address will be shared via WhatsApp upon booking confirmation.",
    ],
  },
  {
    title: "Guest Conduct and Responsibilities",
    content: [
      "Guests are expected to treat the apartment and its contents with care and respect.",
      "Smoking is strictly prohibited inside the apartment.",
      "Unauthorised parties or events are not permitted on the premises.",
      "Noise must be kept at a reasonable level, especially between 10:00 PM and 7:00 AM, in respect of neighbours.",
      "Any damage caused to the apartment or its contents during your stay will be the guest's financial responsibility.",
      "PhilGood Homes reserves the right to request immediate departure without refund if these conduct rules are violated.",
    ],
  },
  {
    title: "Maximum Occupancy",
    content: [
      "Studio Apartment: maximum 2 guests.",
      "1-Bedroom Suite: maximum 3 guests.",
      "2-Bedroom Suite: maximum 5 guests.",
      "Exceeding the maximum occupancy without prior approval may result in immediate termination of your stay without refund.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "PhilGood Homes provides accommodation services in good faith and takes reasonable steps to ensure the safety and comfort of all guests.",
      "PhilGood Homes is not liable for any loss, theft, or damage to personal belongings during your stay.",
      "Guests are advised to take reasonable precautions with their valuables.",
      "PhilGood Homes is not responsible for any indirect or consequential losses arising from your use of our services.",
    ],
  },
  {
    title: "Amendments to These Terms",
    content: [
      "PhilGood Homes reserves the right to update these Terms of Use at any time.",
      "Updated terms will be posted on this page with a revised effective date.",
      "Continued use of our services after changes are posted constitutes acceptance of the revised terms.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These Terms of Use are governed by the laws of the Republic of Ghana.",
      "Any disputes arising from the use of our services shall be subject to the jurisdiction of the courts of Ghana.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have any questions about these Terms of Use, please contact us:",
      "📱 WhatsApp: +233 59 709 6207",
      "📧 Email: Philgoodservices@gmail.com",
      "📍 Location: East Legon Hills, Accra, Ghana",
    ],
  },
];

export default function TermsOfUse() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="bg-[#0f1e2e] pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-[#F5A623] text-xs tracking-[3px] uppercase font-sans font-semibold mb-3">
            Legal
          </span>
          <h1 className="font-serif font-bold text-white text-[clamp(2rem,5vw,3rem)] leading-tight mb-4">
            Terms <span className="text-[#F5A623] italic">of Use</span>
          </h1>
          <p className="font-sans text-white/50 text-sm">
            Effective date: January 1, 2025 · PhilGood Homes, East Legon Hills, Accra, Ghana
          </p>
        </div>
      </div>

      <main className="bg-[#faf8f5] py-16 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Intro */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 mb-8">
            <p className="font-sans text-gray-600 text-sm leading-relaxed">
              These Terms of Use govern your access to and use of the PhilGood Homes website and booking services. Please read them carefully before making a reservation. These terms exist to ensure a safe, comfortable, and enjoyable experience for all our guests.
            </p>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-6">
            {SECTIONS.map((section, i) => (
              <div key={section.title} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="flex items-center gap-4 px-7 py-5 border-b border-gray-50">
                  <div className="w-8 h-8 rounded-full bg-[#E8691A]/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif font-bold text-[#E8691A] text-sm">{i + 1}</span>
                  </div>
                  <h2 className="font-serif font-bold text-[#1a1a1a] text-lg">{section.title}</h2>
                </div>
                <div className="px-7 py-5 flex flex-col gap-3">
                  {section.content.map((para, j) => (
                    <p key={j} className="font-sans text-gray-500 text-sm leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Back link */}
          <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-sans font-semibold text-[#E8691A] hover:text-[#F5A623] no-underline transition-colors"
            >
              ← Back to Home
            </Link>
            <Link
              to="/privacypolicy"
              className="flex items-center gap-2 text-sm font-sans font-semibold text-gray-400 hover:text-[#E8691A] no-underline transition-colors"
            >
              View Privacy Policy →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}