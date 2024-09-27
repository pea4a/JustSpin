import React, { useState } from "react";
import "./SlotMachine.css";

const SlotMachine = () => {
  const symbols = ["🍒", "🍋", "🍉", "⭐", "🦒"];
  const [reels, setReels] = useState(["", "", ""]);
  const [spinning, setSpinning] = useState(false);
  const [message, setMessage] = useState("");

  const spinReels = () => {
    setSpinning(true);
    setMessage(""); // Очищаем сообщение при новом вращении

    setTimeout(() => {
      const newReels = [
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
      ];
      setReels(newReels);
      setSpinning(false);
      checkResult(newReels);
    }, 3000); // Вращаем барабаны 3 секунды для эффекта
  };

  const checkResult = (newReels) => {
    // Генерируем случайное число от 1 до 10
    const winChance = Math.floor(Math.random() * 10) + 1;
    
    // Если выпало число 1, то это выигрыш, независимо от символов
    if (winChance === 1) {
      setMessage("Поздравляем! Вы выиграли!");
    } else {
      setMessage("Попробуйте снова!");
    }
  };

  return (
    <div>
      <h1>JustSpin</h1>
      <div className="slot-container">
        <div className={`reel ${spinning ? "spinning" : ""}`}>{reels[0]}</div>
        <div className={`reel ${spinning ? "spinning" : ""}`}>{reels[1]}</div>
        <div className={`reel ${spinning ? "spinning" : ""}`}>{reels[2]}</div>
      </div>
      <button onClick={spinReels} disabled={spinning}>
        {spinning ? "Вращается..." : "Крутить"}
      </button>
      <p>{message}</p>
    </div>
  );
};

export default SlotMachine;
