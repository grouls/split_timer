import React, { useState } from "react";
import { ToggleButtonProps } from "../interfaces";

function ToggleButton({
  initialText,
  alternateText,
  onToggle,
}: ToggleButtonProps) {
  const [isActive, setIsActive] = useState(false);

  const toggleText = () => {
    setIsActive((current) => !current);
    onToggle(!isActive);
  };

  const buttonText = isActive ? alternateText : initialText;
  const className = isActive ? "btn-primary active" : "btn-primary inactive";

  return (
    <button onClick={toggleText} className={className} aria-pressed={isActive}>
      {buttonText}
    </button>
  );
}

export default ToggleButton;
