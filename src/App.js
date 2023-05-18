import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import React from "react";
import { BrowserRouter } from 'react-router-dom';

 
function App() {
  return (
    <>
      <Header />
      <main>
        <BrowserRouter>
        <Routes>
          <Route path='login' element = {<Login/>}/>
          <Route path='/home' element = {<Home/>}/>
        </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </>
  );
}
export default App;

