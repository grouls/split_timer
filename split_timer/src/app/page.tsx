"use client";
import { useState } from "react";
import ToggleButton from "./Components/ToggleButton";
import Input from "./Components/Input";
import { InputChangeProps, InputValueProps } from "./interfaces";
import { initialState } from "./config";

export default function Home() {
  const [inputValue, setInputValue] = useState(initialState);

  const handleInputChange = ({ type, value }: InputChangeProps) => {
    setInputValue((prev: InputValueProps) => ({ ...prev, [type]: value }));
  };

  const clearInputValues = () => {
    setInputValue(initialState);
  };

  const handleToggle = (isActive: boolean) => {
    console.log("Toggle Active:", isActive);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <Input type="hot" handleChange={handleInputChange} />
        <Input type="cold" handleChange={handleInputChange} />
        <ToggleButton
          initialText={"start"}
          alternateText={"stop"}
          onToggle={handleToggle}
        />
        <button
          className="btn-primary clear"
          onClick={() => clearInputValues()}
        >
          Clear
        </button>
        hot:{inputValue.hot}
        cold:{inputValue.cold}
      </div>
    </main>
  );
}
