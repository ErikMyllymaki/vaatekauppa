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
            <div className='ylaosat'>
              <img src={require('./images/ylaosat.jpg')} />
            </div>
            <div className='alaosat'>
              <img src={require('./images/alaosat.jpg')} />
            </div>
            <div className='kengat'>
              <img src={require('./images/kengat.jpg')} />
            </div>
            <div className='asusteet'>
              <img src={require('./images/asusteet.jpg')} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

      export default App;
