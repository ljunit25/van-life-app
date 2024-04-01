const Button = ({ children, color }) => {

  return (
    <div className="btn">
      <button className={color}>{children}</button>
    </div>
  );
};

export default Button;
