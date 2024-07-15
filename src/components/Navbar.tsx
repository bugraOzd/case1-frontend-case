import SignUpButton from "./SignUpButton";

const Navbar = () => {
  return (
    <nav className="pt-5 px-24 flex justify-between items-center text-col-primary">
      <div>
        <span className="font-bold text-3xl">Collers</span>
      </div>

      <div className="flex gap-5">
        <button>Products</button>
        <button>Solutions</button>
        <button>Pricing</button>
        <button>Resources</button>
        <button>Log In</button>
        <SignUpButton />
      </div>
    </nav>
  );
};

export default Navbar;
