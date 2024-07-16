import ItemCard from "./ItemCard";
import Button from "./Button";

const ItemCardList = ({ products }: { products: any[] }) => {
  return (
    <section className="relative bg-[#0F172A] text-white py-14 px-24">
      <div className="flex justify-between items-center lg:flex-row flex-col text-center">
        <h3 className="font-bold text-4xl">The best of the best</h3>
        <Button
          text="Sign up now"
          color="fffff"
          borderColor="fffff"
          hoverColor="#1e2c4f"
        />
      </div>

      <div className="relative flex justify-center items-center">
        <svg
          className="absolute z-10"
          width="1358"
          height="527"
          viewBox="0 0 1358 527"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <rect
            opacity="0.75"
            x="1126"
            y="64"
            width="232"
            height="232"
            rx="50"
            fill="#15803D"
          />
          <rect
            opacity="0.75"
            x="1017"
            y="325"
            width="202"
            height="202"
            rx="30"
            fill="#A21CAF"
          />
          <rect
            opacity="0.75"
            x="756"
            y="325"
            width="130"
            height="130"
            rx="30"
            fill="#B45309"
          />
          <rect
            opacity="0.75"
            x="457"
            width="161"
            height="161"
            rx="50"
            fill="#0369A1"
          />
          <rect
            opacity="0.75"
            y="207"
            width="271"
            height="271"
            rx="50"
            fill="#BE185D"
          />
        </svg>

        <div className="py-14 flex justify-between flex-wrap gap-10 lg:flex-nowrap z-20">
          {products.map((item) => (
            <ItemCard key={item.imageSrc} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItemCardList;
