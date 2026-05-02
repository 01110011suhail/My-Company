import assets from "../assets/assets";
import { Menu, Search, TicketPlus, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useUser, UserButton, useClerk } from "@clerk/clerk-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { openSignIn } = useClerk();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) =>
        document.getElementById(item.id)
      );

      sections.forEach((section) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = "relative overflow-hidden h-6 group inline-block";

  const spanBase = "block transition-transform duration-300";

  const spanHover =
    "block absolute top-full left-0 transition-transform duration-300";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "team", label: "Leadership" },
  { id: "testimonials", label: "Client Stories" },
  { id: "faq", label: "FAQ" },
];

  const textColor = scrolled ? "text-black" : "text-white";

  return (
    <div
      className={`fixed top-0 left-0 z-[9999] w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      {/* LOGO */}
      <a href="#home" className="max-md:flex-1">
        <img src={assets.logon} alt="logo" className="w-36 h-auto" />
      </a>

      {/* NAV LINKS */}
      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 md:px-8 py-3 max-md:h-screen md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 ${
          isMenuOpen ? "max-md:w-full" : "max-md:w-0"
        } ${textColor}`}
      >
        {/* CLOSE BUTTON */}
        <X
          className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        />

        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => {
              setIsMenuOpen(false);
              setActiveSection(item.id);
            }}
            className={`${linkClass} ${
              activeSection === item.id ? "font-semibold" : ""
            }`}
          >
            <span
              className={`${spanBase} group-hover:-translate-y-full ${
                activeSection === item.id ? "-translate-y-full" : ""
              }`}
            >
              {item.label}
            </span>
            <span
              className={`${spanHover} group-hover:-translate-y-full ${
                activeSection === item.id ? "-translate-y-full" : ""
              }`}
            >
              {item.label}
            </span>
          </a>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className={`flex items-center gap-8 ${textColor}`}>
        <Search className="max-md:hidden w-6 h-6 cursor-pointer" />

        {!user ? (
          <button
            onClick={openSignIn}
            className="px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull font-medium rounded-full transition cursor-pointer text-white"
          >
            Connect
          </button>
        ) : (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="Engagements"
                labelIcon={<TicketPlus width={15} />}
                onClick={() => alert("Implement bookings section")}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
      </div>

      {/* MENU ICON */}
      <Menu
        className={`max-md:ml-4 md:hidden w-8 h-8 cursor-pointer ${textColor}`}
        onClick={() => setIsMenuOpen(true)}
      />
    </div>
  );
};

export default Navbar;