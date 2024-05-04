"use client";
import { useState, useEffect } from "react";
import ToggleButton from "./Components/ToggleButton";
import Input from "./Components/Input";
import { InputChangeProps, InputValueProps } from "./interfaces";
import { initialState, SECONDS } from "./config";

export default function Home() {
  const [inputValue, setInputValue] = useState(initialState);
  const [time, setTime] = useState(SECONDS.ZERO);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (timerRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timerRunning, time]);

  const handleInputChange = ({ type, value }: InputChangeProps) => {
    setInputValue((prev: InputValueProps) => ({ ...prev, [type]: value }));
  };

  const clearInputValues = () => {
    setInputValue(initialState);
    setTime(SECONDS.ZERO);
    setTimerRunning(false);
  };

  const handleToggle = (isActive: boolean) => {
    if (isActive) {
      setTime(inputValue.hot);
      setTimerRunning(true);
    } else {
      setTimerRunning(false);
    }
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
        countdown: {time}
      </div>
    </main>
  );
}
