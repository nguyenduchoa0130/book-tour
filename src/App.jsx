import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Register from './pages/register/Register';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;
