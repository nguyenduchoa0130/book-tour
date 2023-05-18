import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Register from './pages/register/Register';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;

