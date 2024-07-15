import { ShoppingCart } from "lucide-react";

const ItemCard = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="w-[24.4rem] border border-black rounded-xl shadow-light-xl">
      <img
        className="object-cover rounded-t-lg w-full h-[13rem]"
        src={imageSrc}
        alt="sneaker"
      />
      <div className="py-5 px-6 flex flex-col gap-3">
        <h4 className="text-xl font-bold">{title}</h4>

        <p className="text-xs">{description}</p>

        <button className="py-2 w-full border-2 border-white rounded-lg">
          <span className="flex gap-3 justify-center font-semibold">
            <ShoppingCart />
            Buy Now
          </span>
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
