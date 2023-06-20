import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Tours from './pages/tours/Tours';
import Hotel from './pages/hotel/Hotel';
import Infor from './pages/infor/Infor';
import Payment from './pages/payment/Payment';
import Test from './pages/test/Test';
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/infor" element={<Infor />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/test" element={<Test />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;
