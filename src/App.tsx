import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import NavBar from './components/navBar/navBar';
import Album from './pages/album/album';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Favorias from './pages/favoritas/favorita';
import Perfil from './pages/perfil/perfil';


function App() {
  return (
    <main className="">
      <Routes>
        <Route path="/home" element={<Header />} />
        <Route path="/album/:id" element={<Header />} />
        <Route path="/favoritas" element={<Header />} />
        <Route path="/perfil" element={<Header />} />
      </Routes>
      <Routes>
        <Route path="/home" element={<NavBar />} />
        <Route path="/album/:id" element={<NavBar />} />
        <Route path="/favoritas" element={<NavBar />} />
        <Route path="/perfil" element={<NavBar />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/album/:id" element={<Album />} />
        <Route path="/favoritas" element={<Favorias />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </main>
      
  );
}

export default App;
