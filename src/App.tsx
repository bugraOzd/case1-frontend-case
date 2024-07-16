import "./App.css";
import Hero from "./components/Hero";
import { products } from "./shared/products";
import Navbar from "./components/Navbar";
import JoinUs from "./components/JoinUs";
import ItemCardList from "./components/ItemCardList";
import Carousel from "./components/Carousel";

import Footer from "./components/Footer";
import Collection from "./components/Collection";
import Map from "./components/Map";

function App() {
  return (
    // <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <main>
      <Navbar />
      <Hero />
      <ItemCardList products={products} />
      <JoinUs />
      <Carousel />
      <Collection />
      <Map />
      <Footer />
    </main>
  );
}

export default App;
