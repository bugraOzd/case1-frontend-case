interface ButtonProps {
  text: string;
  color?: string;
  borderColor?: string;
  hoverColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  color = "#78350F",
  borderColor = "#78350F",
  hoverColor = "#FEF3C7",
}) => {
  return (
    <button
      className={`px-8 py-2 rounded-lg transition duration-200 ease-in-out`}
      style={{
        color: color,
        borderColor: borderColor,
        borderWidth: "2px",
        borderStyle: "solid",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
    >
      {text}
    </button>
  );
};

export default Button;
