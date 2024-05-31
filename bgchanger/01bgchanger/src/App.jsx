import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="h-screen w-ful duration-200"
      style={{ backgroundColor: color }}
    >
      <div className=" flex flex-wrap justify-center">
        <div className="button  flex flex-wrap justify-center gap-3 bg-white px-3 py-2 shadow-lg rounded-xl">
          <button
            onClick={() => setColor("red")}
            className="border border-black border-solid rounded-xl px-4 py-1 text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("black")}
            className="border border-black border-solid rounded-xl px-4 py-1 text-white shadow-lg"
            style={{ backgroundColor: "Black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("blue")}
            className="border border-black border-solid rounded-xl px-4 py-1 text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("#FFFF00")}
            className="border border-black border-solid rounded-xl px-4 py-1 text-white shadow-lg"
            style={{ backgroundColor: "#FFFF00" }}
          >
            yellow
          </button>
          <button
            onClick={() => setColor("green")}
            className="border border-black border-solid rounded-xl px-4 py-1 text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
