import { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((isOpen) => !isOpen);
  };

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="font-bold text-3xl text-col-primary">Collers</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {["Products", "Solutions", "Pricing", "Resources", "Log In"].map(
                (item) => (
                  <button
                    key={item}
                    className="text-col-primary hover:bg-col-hover px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                  >
                    {item}
                  </button>
                )
              )}
              <Button text="Sign up now" />
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-col-primary hover:text-white hover:bg-col-hover focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${menuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${menuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${menuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {["Products", "Solutions", "Pricing", "Resources", "Log In"].map(
            (item) => (
              <button
                key={item}
                className="text-col-primary hover:bg-col-hover block px-3 py-2 rounded-md text-base font-medium w-full text-left transition duration-150 ease-in-out"
              >
                {item}
              </button>
            )
          )}
          <div className="mt-4">
            <Button text="Sign up now" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
