import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Hotel from './pages/hotel/Hotel';
import Tours from './pages/tours/Tours';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/tours' element={<Tours />} />
          <Route path='/hotel' element={<Hotel />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;

