import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Reserve from './components/Reserve';
import Footer from "./components/Footer";

function App() {
  return (
    <main className="container">
      <Header/>
      <Reserve/>
      <Menu/>
      <Reviews/>
      <About/>
      <Footer/>
    </main>
  );
}

export default App;
