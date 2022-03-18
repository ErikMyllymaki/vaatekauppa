import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <p className='welcome'>Tervetuloa vaatekauppaan!</p>
          </div>
          <div className="col-8">
            <div className='ylaosat'>
              <img src={require('./images/ylaosatmuokattu.jpg')} />
            </div>
            <div className='alaosat'>
              <img src={require('./images/alaosatmuokattu.jpg')} />
            </div>
            <div className='kengat'>
              <img src={require('./images/kengatmuokattu.jpg')} />
            </div>
            <div className='asusteet'>
              <img src={require('./images/asusteetmuokattu.jpg')} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

      export default App;
