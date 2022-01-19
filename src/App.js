// Styling
import './App.css';

// Components
import Header from './components/Header.js';
import SignSelection from './components/SignSelection.js';
import Icon from './components/Icon';
import Footer from './components/Footer.js';

const App = () => {

  return (
    <div className="App">

      <div className="wrapper">

        <Header />

        <SignSelection />

        <Icon />

        <Footer />

      </div>

    </div>
  );
}

export default App;
