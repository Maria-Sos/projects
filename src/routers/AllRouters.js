import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/mainPage/Home";
import MemoryGame from "../pages/memory-game/MemoryGame";
import NoPage from "../pages/NoPage";

const AllRouters = () => {
  return (
	<div>
	  <Routes>
		<Route path="/" element={<Home />} />
		<Route path="/memory-game" element={<MemoryGame />} />
		{/*<Route path="/kanban" element={<Kanban />} />*/}
		{/*<Route path="/tic-tac-toe" element={<TicTacToe />} />*/}
		<Route path="*" element={<NoPage />} />
	  </Routes>
	</div>
  );
};

export default AllRouters;
