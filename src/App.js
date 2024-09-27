import React, { useState } from "react";
import "./SlotMachine.css"; // Импортируем CSS для анимации

const SlotMachine = () => {
  const symbols = ["📕", "💼", "✏️", "🦒", "📎"];
  const [reels, setReels] = useState(["", "", ""]);
  const [spinning, setSpinning] = useState(false);
  const [message, setMessage] = useState("");
  const [won, setWon] = useState(false); // Добавим новое состояние для выигрыша

  const spinReels = () => {
    setSpinning(true);
    setMessage("");
    setWon(false); // Сбрасываем состояние выигрыша

    setTimeout(() => {
      const newReels = [
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
      ];
      setReels(newReels);
      setSpinning(false);
      checkResult(newReels);
    }, 3000);
  };

  const checkResult = (newReels) => {
    if (newReels[0] === newReels[1] && newReels[1] === newReels[2]) {
      setMessage("ВІтаємо! Вы вииграли пробний урок!");
      setWon(true); // Выставляем состояние выигрыша
    } else {
      setMessage("Спробуй знову!");
    }
  };

  return (
    <div>
      <h1>Just Spin</h1>
      <div className="slot-container">
        <div className={`reel ${spinning ? "spinning" : ""}`}>{reels[0]}</div>
        <div className={`reel ${spinning ? "spinning" : ""}`}>{reels[1]}</div>
        <div className={`reel ${spinning ? "spinning" : ""}`}>{reels[2]}</div>
      </div>
      <button onClick={spinReels} disabled={spinning}>
        {spinning ? "крутиця..." : "Крутитись"}
      </button>
      <p>{message}</p>

      {won && ( // Условный рендеринг изображения
        <div>
          <img src='https://i.postimg.cc/Lsvpmm3P/1.jpg' height='300px' width='300px' border='0' alt='1'/>
        </div>
      )}
    </div>
  );
};

export default SlotMachine;
