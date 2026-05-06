import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.jpeg"; // ← update path to match yours

const NAV_LINKS = [
  { label: "Home", to: "/" },
  {
    label: "Our Apartments",
    to: "/apartments/studio",
    dropdown: [
      { label: "Studio Suite", to: "/apartments/studio" },
      { label: "1-Bedroom", to: "/apartments/onebedroom" },
      { label: "2-Bedroom", to: "/apartments/twobedroom" },
    ],
  },
  { label: "Amenities", to: "/amenities" },
  { label: "Real Estate", to: "/realestate" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-3">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <img
            src={logo}
            alt="PhilGood Homes"
            className="h-12 w-auto object-contain"
          />
          <div className="leading-tight">
            <span
              className={`block font-serif font-bold text-lg transition-colors duration-300 ${scrolled ? "text-[#E8691A]" : "text-white"
                }`}
            >
              PhilGood
            </span>
            <span
              className={`block text-[10px] tracking-[2px] uppercase transition-colors duration-300 ${scrolled ? "text-[#F5A623]" : "text-[#F5A623]"
                }`}
            >
              Homes
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center list-none m-0 p-0 gap-1">
          {NAV_LINKS.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-1 px-3 py-2 text-sm font-medium no-underline border-b-2 transition-all duration-200 ${scrolled
                    ? isActive
                      ? "text-[#E8691A] border-[#E8691A]"
                      : "text-gray-700 border-transparent hover:text-[#E8691A]"
                    : isActive
                      ? "text-[#F5A623] border-[#F5A623]"
                      : "text-white/90 border-transparent hover:text-[#F5A623]"
                  }`
                }
              >
                {link.label}
                {link.dropdown && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M2 4l4 4 4-4" />
                  </svg>
                )}
              </NavLink>

              {/* Dropdown */}
              {link.dropdown && openDropdown === link.label && (
                <ul className="absolute top-full left-0 bg-white rounded-lg shadow-xl list-none m-0 py-2 min-w-44 border border-black/5 z-50">
                  {link.dropdown.map((item) => (
                    <li key={item.label}>
                      <NavLink
                        to={item.to}
                        className="block px-5 py-2.5 text-sm text-gray-700 no-underline hover:bg-orange-50 hover:text-[#E8691A] transition-colors duration-150"
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Book Now CTA */}
        <Link
          to="/book"
          className="hidden md:inline-block px-5 py-2.5 bg-[#E8691A] hover:bg-[#F5A623] text-white text-sm font-semibold rounded-md no-underline tracking-wide transition-colors duration-200 whitespace-nowrap"
        >
          Book Now
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center gap-1.5 p-1 bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 transition-colors duration-300 ${scrolled ? "bg-gray-700" : "bg-white"}`} />
          <span className={`block w-6 h-0.5 transition-colors duration-300 ${scrolled ? "bg-gray-700" : "bg-white"}`} />
          <span className={`block w-6 h-0.5 transition-colors duration-300 ${scrolled ? "bg-gray-700" : "bg-white"}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="border-b border-orange-50 last:border-0">
              {link.dropdown ? (
                <>
                  {/* Accordion toggle for links with dropdown */}
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className="w-full flex items-center justify-between py-3 text-sm font-medium text-gray-700 hover:text-[#E8691A] transition-colors bg-transparent border-none cursor-pointer text-left"
                  >
                    {link.label}
                    <svg
                      width="12" height="12" viewBox="0 0 12 12" fill="none"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      className={`transition-transform duration-300 ${openDropdown === link.label ? "rotate-180 text-[#E8691A]" : ""}`}
                    >
                      <path d="M2 4l4 4 4-4" />
                    </svg>
                  </button>

                  {/* Dropdown items */}
                  {openDropdown === link.label && (
                    <div className="pl-4 pb-2 flex flex-col gap-1">
                      {link.dropdown.map((item) => (
                        <NavLink
                          key={item.label}
                          to={item.to}
                          onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}
                          className="flex items-center gap-2 py-2 text-sm text-gray-500 hover:text-[#E8691A] no-underline transition-colors"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#E8691A] flex-shrink-0" />
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-sm font-medium text-gray-700 no-underline hover:text-[#E8691A] transition-colors"
                >
                  {link.label}
                </NavLink>
              )}
            </div>
          ))}

          <Link
            to="/book"
            className="mt-4 block text-center py-2.5 bg-[#E8691A] text-white text-sm font-semibold rounded-md no-underline"
            onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}