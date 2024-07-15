import { useState } from "react";
import SignUpButton from "./SignUpButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="pt-5 px-6 md:px-24 flex justify-between items-center text-col-primary">
      <div>
        <span className="font-bold text-3xl">Collers</span>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <div
        className={`md:flex gap-5 ${menuOpen ? "block" : "hidden"} md:block`}
      >
        <button className="block md:inline-block">Products</button>
        <button className="block md:inline-block">Solutions</button>
        <button className="block md:inline-block">Pricing</button>
        <button className="block md:inline-block">Resources</button>
        <button className="block md:inline-block">Log In</button>
        <SignUpButton className="block md:inline-block" />
      </div>
    </nav>
  );
};

export default Navbar;
