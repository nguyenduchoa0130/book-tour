import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Login from './pages/home/login/Login'; 
function App() {
  return (
    <>
      <Header />
      <main>
      <Login/>
      </main>
      <Footer />
    </>
  );
}
export default App;

