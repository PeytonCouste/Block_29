// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import AllPlayers from "./components/allPlayers";

function App() {
 // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/players/:id element={<SinglePlayer />}" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;