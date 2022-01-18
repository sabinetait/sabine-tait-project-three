// Sign Selection
import axios from 'axios';
import { useEffect, useState } from 'react';

import Results from './Results.js';
 
const SignSelection = () => {
    // set user's astrological choice into state
    const [horoscope, setHoroscope] = useState([]);
    const [userChoice, setUserChoice] = useState('');

    // set user's choice of date into state
    const [date, setDate] = useState('');

    // event listener for click on user's astrological sign choice
    const handleClick = (event) => {
      setUserChoice(event.target.id);
    }

    // event listener for click on user's choice of date
    const handleDateChange = (event) => {
      setDate(event.target.id);
    }

    // API call to fetch data based on user's astrological choice
    useEffect( () => {
      // condition where API is only called with the user's choice
      if (userChoice !== '') {
        axios({
          url: 'https://aztro.sameerkumar.website',
          method: 'POST',
          dataResponse: 'json',
          params: {
            sign: userChoice,
            day: 'today',
          }
        }).then( (response) => {
          setHoroscope(response.data);
        });
      } 
    }, [userChoice])

    // API call to fetch data based on user's astrological choice & choice of date
    useEffect ( () => {
      // condition where API is only called with a date
      if (date !== '') {
        axios({
          url: 'https://aztro.sameerkumar.website',
          method: 'POST',
          dataResponse: 'json',
          params: {
            sign: userChoice,
            day: date,
          }
        }).then( (response) => {
          setHoroscope(response.data);
        });
      }
    }, [date])

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

            <div className="date-buttons">
              <button id="yesterday" onClick={ handleDateChange }>Yesterday</button>
              <button id="today" onClick={ handleDateChange }>Today</button>
              <button id="tomorrow" onClick={ handleDateChange }>Tomorrow</button>
            </div>

            <Results
                current_date={horoscope.current_date}
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