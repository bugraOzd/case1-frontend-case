import "./App.css";
import { products } from "./shared/data/products";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import JoinUs from "./components/JoinUs";
import ItemCardList from "./components/ItemCardList";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Collection from "./components/Collection";
import Map from "./components/Map";

function App() {
  return (
    <main className="overflow-hidden lg:overflow-visible">
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
