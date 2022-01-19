// Styling
import './App.css';

// Components
import Header from './components/Header.js';
import SignSelection from './components/SignSelection.js';
import Footer from './components/Footer.js';

const App = () => {

  return (
    <div className="App">

      <div className="wrapper">

        <Header />

        <SignSelection />

        <Footer />

      </div>

    </div>
  );
}

export default App;
