import Footer from './components/Footer';
import Header from './components/Header';
import styles from './App.module.css';
import MainBlock from './components/MainBlock';

function App() {
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className={styles.main}>
        <MainBlock></MainBlock>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
