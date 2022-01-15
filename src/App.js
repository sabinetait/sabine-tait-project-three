import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Stars Align</h1>
      </header>

      <main>
        <div>
          <h2>Select your astrological sign for your daily horoscope</h2>

          <section className="astro-buttons">
            <button>Aries</button>
            <button>Taurus</button>
            <button>Gemini</button>
            <button>Cancer</button>
            <button>Leo</button>
            <button>Virgo</button>
            <button>Libra</button>
            <button>Scorpio</button>
            <button>Sagittarius</button>
            <button>Capricorn</button>
            <button>Aquarius</button>
            <button>Pisces</button>
          </section>

          <section className="user-horoscopeReading">
            <h2>Date:</h2>

            <div className="text-content">

              <div class="daily-reading">
                <p></p>
              </div>

              <div class="sign-characteristics">
                <p>Colour:</p>
                <p>Compatibility:</p>
                <p>Lucky number:</p>
                <p>Mood:</p>
                <p>Time to thrive:</p>
              </div>
              
            </div>
          </section>
      
        </div>
      </main>
      <footer>
        <p>Create at Juno College 2022</p>
      </footer>
    </div>
  );
}

export default App;
