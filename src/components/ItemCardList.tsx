import ItemCard from "./ItemCard";

const ItemCardList = ({ products }: { products: any[] }) => {
  return (
    <section className="bg-[#0F172A] text-white py-14 px-24">
      <div className="flex justify-between items-center lg:flex-row flex-col">
        <h3 className="font-bold text-4xl">The best of the best</h3>
        <button className="border-2 border-white rounded-lg px-8 py-2">
          Sign up now
        </button>
      </div>

      <div className="py-14 flex justify-between flex-wrap gap-10 lg:flex-nowrap">
        {products.map((item) => (
          <ItemCard key={item.imageSrc} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ItemCardList;
