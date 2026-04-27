import { Link } from "react-router-dom";
import Navbar from "./../components/navbar";
import Footer from "./../components/footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    content: [
      "When you make a booking or enquiry through PhilGood Homes, we collect personal information including your full name, phone number, email address, and travel dates.",
      "We also collect information about your preferred apartment type, number of guests, and any special requests you provide during the booking process.",
      "When you contact us via WhatsApp, we receive your WhatsApp number and any information you share in the conversation.",
      "We do not collect payment card details directly. Payment information for Mobile Money, Cash App, or Zelle transactions is processed through those respective platforms and is subject to their privacy policies.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "Your personal information is used solely to process and confirm your booking, communicate check-in details, and provide customer support during your stay.",
      "We may use your contact details to send booking confirmations and important updates about your reservation.",
      "We do not use your information for unsolicited marketing without your consent.",
      "We do not sell, rent, or share your personal information with third parties for commercial purposes.",
    ],
  },
  {
    title: "How We Store Your Information",
    content: [
      "Booking details and communication records are stored securely and accessed only by PhilGood Homes staff for the purpose of managing your reservation.",
      "We retain your information for as long as necessary to fulfill the purposes outlined in this policy, or as required by applicable law.",
      "You may request deletion of your personal data at any time by contacting us on WhatsApp at +233 59 709 6207.",
    ],
  },
  {
    title: "Cookies and Website Analytics",
    content: [
      "Our website may use basic analytics tools to understand how visitors interact with our pages. This data is anonymised and not linked to individual users.",
      "We do not use tracking cookies for advertising purposes.",
    ],
  },
  {
    title: "Third-Party Services",
    content: [
      "Our website may contain links to Airbnb, WhatsApp, Instagram, and TikTok. These platforms have their own privacy policies and we are not responsible for their practices.",
      "Payment platforms including MTN Mobile Money, Cash App, and Zelle operate independently and their use is governed by their own terms and privacy policies.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "You have the right to access the personal information we hold about you.",
      "You have the right to request correction of inaccurate information.",
      "You have the right to request deletion of your personal data.",
      "To exercise any of these rights, contact us via WhatsApp at +233 59 709 6207 or email Philgoodservices@gmail.com.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated effective date.",
      "Continued use of our website after changes are posted constitutes your acceptance of the revised policy.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have any questions about this Privacy Policy, please contact us:",
      "📱 WhatsApp: +233 59 709 6207",
      "📧 Email: Philgoodservices@gmail.com",
      "📍 Location: East Legon Hills, Accra, Ghana",
    ],
  },
];

export default function PrivacyPolicy() {
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
            Privacy <span className="text-[#F5A623] italic">Policy</span>
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
              At PhilGood Homes, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or make a booking with us. By using our services, you agree to the practices described in this policy.
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
              to="/termsofuse"
              className="flex items-center gap-2 text-sm font-sans font-semibold text-gray-400 hover:text-[#E8691A] no-underline transition-colors"
            >
              View Terms of Use →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}