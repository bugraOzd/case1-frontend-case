interface CarouselItem {
  logo: any;
  company: string;
  text: string;
  avatar: string;
  author: string;
  role: string;
}

const CarouselItem = ({
  logo,
  company,
  text,
  avatar,
  author,
  role,
}: CarouselItem) => {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-lg p-6 flex flex-col justify-between h-[20rem] shadow-lg hover:shadow-2xl">
      <div>
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">{logo}</span>
          <h3 className="text-xl font-bold">{company}</h3>
        </div>
        <p className="text-gray-600 mb-4 text-lg">{text}</p>
      </div>
      <div className="flex items-center">
        <img
          src={avatar}
          alt={author}
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <p className="font-normal">{author}</p>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
