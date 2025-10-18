import { useState } from "react";
import "./App.css";

function App() {
  const [gender, setGender] = useState(null);

  const handleClick = () => {
    const random = Math.floor(Math.random() * 10);
    setGender(random % 2 === 0 ? "kız" : "erkek");
  };

  const handleReset = () => {
    setGender(null);
  };

  const bgClass =
    gender === "kız"
      ? "bg-gradient-to-br from-pink-400 via-fuchsia-500 to-rose-500 text-white"
      : gender === "erkek"
      ? "bg-gradient-to-br from-blue-400 via-indigo-500 to-cyan-500 text-white"
      : "bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-800";

  return (
    <div
      className={`min-h-screen w-full grid place-items-center transition-all duration-700 ${bgClass}`}
    >
      <div className="w-[90%] max-w-[1600px] rounded-3xl bg-white/30 backdrop-blur-md shadow-2xl p-12 sm:p-16 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-extrabold mb-12 drop-shadow-lg">
          Cinsiyet Zarları 🎲
        </h1>

        {!gender ? (
          <button
            onClick={handleClick}
            className="text-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-4 px-12 rounded-3xl shadow-lg transition-all hover:scale-105"
          >
            Haydi Atalım
          </button>
        ) : (
          <>
            <div className="flex items-center justify-center w-full mb-10">
              <div
                className="animate-bounce font-extrabold drop-shadow-lg whitespace-nowrap text-center"
                style={{
                  fontSize: "clamp(1.5rem, 5vw, 4rem)",
                }}
              >
                {gender === "kız"
                  ? "💖 MİNİ SARE GELİYOR 💖"
                  : "💙 BURAK'IN VELİAHTI GELİYOR 💙"}
              </div>
            </div>

            <button
              onClick={handleReset}
              className="text-lg bg-white text-gray-800 font-bold py-3 px-8 rounded-2xl shadow-md hover:bg-gray-200 transition-all"
            >
              Bir daha denemek ister misin?
            </button>
          </>
        )}

        <footer className="mt-16 text-sm opacity-70">
          © 2025 — Serşah Sare ve Burak Can Heyal
        </footer>
      </div>
    </div>
  );
}

export default App;
