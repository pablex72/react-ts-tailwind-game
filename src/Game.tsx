import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'

function Game() {
  return (
    <div className="h-full p-8 text-slate-800 bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="text-center text-5xl mb-4 font-display text-white">
        Tic Tac Toe Game
      </h1>
      <div>
        <div>Board Goes Here</div>
        <div>Scores go here</div>
      </div>
    </div>
  );
}

export default Game;
