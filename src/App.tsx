import Footer from './components/Footer';
import Header from './components/Header';
import MainBlock from './components/MainBlock';
import './App.module.css';

function App() {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <MainBlock></MainBlock>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
