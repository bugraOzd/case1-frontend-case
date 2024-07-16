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
      <div className="py-16 flex justify-around">
        {footerItems.map((item) => (
          <LinkList
            key={item.title}
            title={item.title}
            listItems={item.items}
          />
        ))}
        <div className="text-white flex flex-col justify-around">
          <div className="flex flex-col gap-5">
            <h6>Get the App</h6>
            <div className="flex flex-col gap-3">
              <button className="w-[284px] h-auto">
                <img src="src/assets/app-store.png" />
              </button>
              <button className="w-[284px] h-auto">
                <img src="src/assets/google-play.png" />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h6>Follow Us</h6>
            <div className="flex gap-5">
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

      <div className="py-16 px-10 text-sm text-white font-thin flex justify-between">
        <p>Collers @ 2023. All rights reserved.</p>
        <div className="flex gap-5">
          <a>Terms</a>
          <a>Privacy</a>
          <a>Contact</a>
          <a>
            <span className="flex gap-2">
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
