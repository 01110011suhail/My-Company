import assets from "../assets/assets";
import { Link } from "react-router-dom";
import { Menu, Search, TicketPlus, X } from "lucide-react";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser, UserButton, useClerk } from "@clerk/clerk-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  const linkClass =
    "relative overflow-hidden h-6 group inline-block";

  const spanBase =
    "block transition-transform duration-300";

  const spanHover =
    "block absolute top-full left-0 transition-transform duration-300";

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5">
      
      <Link to={"/"} className="max-md:flex-1">
        <img src={assets.logo} alt="" className="w-36 h-auto" />
      </Link>

      {/* NAV LINKS */}
      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 ${
          isMenuOpen ? "max-md:w-full" : "max-md:w-0"
        }`}
      >
        <X
          className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        {[
          { to: "/", label: "Home" },
          { to: "/movies", label: "Movies" },
          { to: "/theatres", label: "Theatres" },
          { to: "/releases", label: "Releases" },
          { to: "/favorites", label: "Favorites" },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={() => {
              scrollTo(0, 0);
              setIsMenuOpen(false);
            }}
            className={linkClass}
          >
            <span className={`${spanBase} group-hover:-translate-y-full`}>
              {item.label}
            </span>
            <span className={`${spanHover} group-hover:translate-y-[-100%]`}>
              {item.label}
            </span>
          </Link>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-8">
        <Search className="max-md:hidden w-6 h-6 cursor-pointer" />

        {!user ? (
          <button
            onClick={openSignIn}
            className="px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull font-medium rounded-full transition cursor-pointer"
          >
            LogIn
          </button>
        ) : (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<TicketPlus width={15} />}
                onClick={() => navigate("/my-bookings")}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
      </div>

      <Menu
        className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
    </div>
  );
};

export default Navbar;