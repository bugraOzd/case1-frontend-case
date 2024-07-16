const Button = ({
  text,
  color = "#78350F",
  hoverColor = "#FEF3C7",
  ...props
}: {
  text?: string;
  color?: string;
  hoverColor?: string;
}) => {
  return (
    <button
      {...props}
      className={`border-2 text-[${color}] border-[${color}] rounded-lg px-8 py-2 hover:bg-[${hoverColor}]`}
    >
      {text}
    </button>
  );
};

export default Button;
