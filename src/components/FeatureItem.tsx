const FeatureItem = ({
  Icon,
  title,
  description,
}: {
  Icon: any;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center md:items-start md:justify-center">
      <div className="relative mb-4">
        <Icon className="w-8 h-8 text-brown-600" />
        <div
          className="absolute -top-2 -right-2 w-8 h-8 rounded-full opacity-50"
          style={{
            backgroundColor:
              title === "Nibh viverra"
                ? "#90CAF9"
                : title === "Cursus amet"
                ? "#A5D6A7"
                : "#CE93D8",
          }}
        ></div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 text-center lg:text-start">
        {description}
      </p>
    </div>
  );
};

export default FeatureItem;
