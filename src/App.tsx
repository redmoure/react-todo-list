import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import styles from './App.module.css';

function App() {
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className={styles.main}>
        <Main></Main>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
