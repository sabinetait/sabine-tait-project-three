// Sign Selection
import axios from 'axios';
import Results from './Results.js';
import { useState } from 'react';
 
const SignSelection = () => {

    const [horoscope, setHoroscope] = useState([]);
    const [userChoice, setUserChoice] = useState('');

    const handleClick = (event) => {
        // console.log(event.target.id);
        setUserChoice(event.target.id);
        console.log(userChoice);

        axios({
          url: 'https://aztro.sameerkumar.website',
          method: 'POST',
          dataResponse: 'json',
          params: {
            sign: userChoice,
            day: 'today',
          }
        }).then( (response) => {
          console.log(response.data);
          setHoroscope(response.data);
          
        });

    }

    return (
        <div>
            <h2>Select your astrological sign for your daily horoscope</h2>

            <div className="astro-buttons">
                <button id="aries" onClick={ handleClick }>Aries</button>
                <button id="taurus" onClick={ handleClick }>Taurus</button>
                <button id="gemini" onClick={ handleClick }>Gemini</button>
                <button id="cancer" onClick={ handleClick }>Cancer</button>
                <button id="leo" onClick={ handleClick }>Leo</button> 
                <button id="virgo" onClick={ handleClick }>Virgo</button>
                <button id="libra" onClick={ handleClick }>Libra</button>
                <button id="scorpio" onClick={ handleClick }>Scorpio</button>
                <button id="sagittarius" onClick={ handleClick }>Sagittarius</button>
                <button id="capricorn" onClick={ handleClick }>Capricorn</button>
                <button id="aquarius" onClick={ handleClick }>Aquarius</button>
                <button id="pisces" onClick={ handleClick }>Pisces</button>
            </div>


            <Results
                description={horoscope.description}
                compatibility={horoscope.compatibility}
                color={horoscope.color}
                lucky_number={horoscope.lucky_number}
                lucky_time={horoscope.lucky_time}
                mood={horoscope.mood}
            />
        </div>

    )
}

export default SignSelection;