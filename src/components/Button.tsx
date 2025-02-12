type ButtonProps = {
  onClick: () => void;
};

const Button = ({ onClick }: ButtonProps) => {
  return <div className="button" onClick={onClick}><p>=</p></div>;
};

export default Button;
