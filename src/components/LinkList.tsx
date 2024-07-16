const LinkList = ({
  title,
  listItems,
}: {
  title: string;
  listItems: string[];
}) => {
  return (
    <div className="text-white flex flex-col gap-5">
      <h6>{title}</h6>
      <ul>
        {listItems.map((item) => (
          <li className="mb-5 text-gray-300 font-thin hover:underline hover:cursor-pointer">
            <a>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkList;
