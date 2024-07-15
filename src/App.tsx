import "./App.css";
import Hero from "./components/Hero";
import { products } from "./shared/products";
import Navbar from "./components/Navbar";
import JoinUs from "./components/JoinUs";
import ItemCardList from "./components/ItemCardList";
import Carousel from "./components/Carousel";
import {
  Podcast,
  Rocket,
  Search,
  ShieldCheck,
  SlidersVertical,
  TvMinimal,
} from "lucide-react";

function App() {
  return (
    // <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <main>
      <Navbar />
      <Hero />
      <ItemCardList products={products} />
      <JoinUs />
      <Carousel />

      <section className="relative py-28 px-24">
        <h3 className="pb-8 font-bold text-4xl">Grow your collection</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="pt-16">
          {[
            { icon: Search, text: "Cras eget" },
            { icon: ShieldCheck, text: "Cras eget" },
            { icon: Rocket, text: "Dolor fringilla" },
            { icon: TvMinimal, text: "Amet, fringilla" },
            { icon: Podcast, text: "Amet nibh" },
            { icon: SlidersVertical, text: "Sed velit" },
          ].map((item, index) => (
            <button
              key={index}
              className="text-lg px-5 py-3 flex items-center text-gray-600 rounded-lg hover:shadow-lg"
            >
              <item.icon size={24} className="mr-3" />
              <span>{item.text}</span>
            </button>
          ))}
        </div>

        <svg
          className="absolute w-full inset-0 top-44 -z-10"
          width="1440"
          height="684"
          viewBox="0 0 1440 684"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M208 507.373C108.284 488.351 37 531.837 0 602.413V684H1440V3.58104C1397.38 -12.5779 1346.49 29.8525 1326.38 53.0877C1292.55 94.2772 1203.11 173.171 1115.99 159.23C1028.87 145.289 954.268 224.975 927.858 266.56C891.557 322.272 785.577 419.199 652.063 361.217C528 307.339 441.5 391.416 395.823 433.695C358.736 466.699 313.484 527.496 208 507.373Z"
            fill="#FDE68A"
          />
          <path
            d="M208 538.361C108.284 522.675 37 558.532 0 616.727V684H1440V122.953C1397.38 109.629 1346.49 144.615 1326.38 163.774C1292.55 197.737 1203.11 262.79 1115.99 251.295C1028.87 239.8 954.268 305.505 927.858 339.795C891.557 385.733 785.577 465.655 652.063 417.845C528 373.42 441.5 442.747 395.823 477.608C358.736 504.822 313.484 554.953 208 538.361Z"
            fill="#FEF3C7"
          />
          <path
            d="M208 587.94C108.284 577.594 37 601.245 0 639.628V684H1440V313.948C1397.38 305.159 1346.49 328.236 1326.38 340.872C1292.55 363.274 1203.11 406.181 1115.99 398.599C1028.87 391.017 954.268 434.355 927.858 456.971C891.557 487.271 785.577 539.985 652.063 508.451C528 479.149 441.5 524.876 395.823 547.869C358.736 565.819 313.484 598.884 208 587.94Z"
            fill="#78350F"
          />
        </svg>
      </section>
    </main>
  );
}

export default App;
