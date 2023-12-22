import React,{useState} from "react"
import './App.css';
import {Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Selection from "./components/Selection";
import Seating from "./components/Seating";
import Payment from "./components/Payment";
function App() {

  return (
    <div className="App">
<Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/log' element={<Login/>}/>
      <Route path='/reg' element={<Register/>}/>
      <Route path='/sec' element={<Selection/>}/>
      <Route path='/seats' element={<Seating/>}/>
      <Route path='/pay' element={<Payment/>}/>
  </Routes>
    </div>
  );
}

export default App;
