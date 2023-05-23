import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Register from './pages/register/Register';
import Hotel from './pages/hotel/Hotel';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/hotel' element={<Hotel />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;

