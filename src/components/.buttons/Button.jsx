import { useEffect, useState } from "react";

const Button = ({ text, onClick, color }) => {
  const [buttonColor, setButtonColor] = useState("button");

  useEffect(() => {
    setButtonColor(color);
  })

  return (
    <button type="button" className={`button ${buttonColor}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
