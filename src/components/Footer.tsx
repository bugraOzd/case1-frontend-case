import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import LinkList from "./LinkList";
import { footerItems } from "../shared/footerItems";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A]">
      <div className="py-16 flex flex-col items-center text-center md:flex-row justify-around">
        {footerItems.map((item) => (
          <LinkList
            key={item.title}
            title={item.title}
            listItems={item.items}
          />
        ))}
        <div className="text-white flex flex-col items-center text-center sm:items-start justify-around gap-10 sm:gap-20">
          <div className="flex flex-col gap-5 items-center sm:items-start">
            <h6 className="text-lg font-semibold">Get the App</h6>
            <div className="flex flex-col gap-3">
              <button className="w-[284px] h-auto">
                <img src="src/assets/app-store.png" alt="App Store" />
              </button>
              <button className="w-[284px] h-auto">
                <img src="src/assets/google-play.png" alt="Google Play" />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center sm:items-start">
            <h6 className="text-lg font-semibold">Follow Us</h6>
            <div className="flex gap-5 justify-center sm:justify-start">
              <Youtube />
              <Facebook />
              <Twitter />
              <Instagram />
              <Linkedin />
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-600 mx-10" />

      <div className="py-8 px-4 sm:py-16 sm:px-10 text-sm text-white font-thin flex flex-col items-center md:flex-row md:justify-between">
        <p className="mb-4 md:mb-0">Collers @ 2023. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
          <a href="#contact">Contact</a>
          <a href="#language">
            <span className="flex gap-2 items-center">
              <Globe size={20} />
              EN
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
