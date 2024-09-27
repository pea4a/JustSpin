import React, { useState } from "react";
import "./SlotMachine.css"; // Импортируем CSS для анимации

const SlotMachine = () => {
  const symbols = ["📕", "💼", "✏️", "🦒", "📎"];
  const [reels, setReels] = useState(["", "", ""]);
  const [spinning, setSpinning] = useState(false);
  const [message, setMessage] = useState("");

  const spinReels = () => {
    setSpinning(true);
    setMessage(""); // Очищаем сообщение при новом вращении

    // Через 1 секунду остановим вращение и установим новые значения
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
    if (newReels[0] === newReels[1] && newReels[1] === newReels[2]) {
      setMessage("ВІтаємо! Вы вииграли пробний урок!");
    } else {
      setMessage("Спробуй знову!");
    }
  };

  return (
    <div>
      <h1>Just Slot</h1>
      <div className="slot-container">
        <div className={`reel ${spinning ? "spinning" : ""}`}>{reels[0]}</div>
        <div className={`reel ${spinning ? "spinning" : ""}`}>{reels[1]}</div>
        <div className={`reel ${spinning ? "spinning" : ""}`}>{reels[2]}</div>
      </div>
      <button onClick={spinReels} disabled={spinning}>
        {spinning ? "крутиця..." : "Крутитись"}
      </button>
      <p>{message}</p>
    </div>
  );
};

export default SlotMachine;
