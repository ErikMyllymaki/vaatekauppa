import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            TEKSTIÄ
          </div>
          <div className="col">
            <div id='alaosat'></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

      export default App;
