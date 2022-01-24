// Stars Align App

// *** Sign Selection Component ***
// Create state items to hold data coming from the aztroAPI -> the user astrological selection (stretch: add user birthday input to select astrological sign, add user date selection)
// - horoscope
// - userSign
// The local method (signSelection) to get a data from the user's sign

// signSelection method will make the call to aztroAPI with or without user input
// - when successful, update the state (horoscope) with new data
// - if unsuccessful, display the error message

// A local method (handleClick) to handle the onClick event to update state (userSign) with user input

// *** Result Component ***
// Create a component to display data from the aztroAPI
// This component will get data (horoscope) passed in as props
// Render out horoscope and other data for each astrological sign

// Render the application
// - header
// - buttons for user input/click to on astrologocal sign
// - use the imported Result component
// - arrow up icon to return to top of page
// - footer


// Styling
import './App.css';

// Components
import Header from './components/Header.js';
import SignSelection from './components/SignSelection.js';
import Footer from './components/Footer.js';
import Icon from './components/Icon.js';

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
