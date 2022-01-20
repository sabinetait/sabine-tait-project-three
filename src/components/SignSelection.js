// *** Sign Selection Component ***
// Create state items to hold data coming from the aztroAPI -> the user astrological selection (stretch: add user birthday input to select astrological sign, add user date selection)
// - horoscope
// - userSign
// The local method (signSelection) to get a data from the user's sign

// signSelection method will make the call to aztroAPI with or without user input
// - when successful, update the state (horoscope) with new data
// - if unsuccessful, display the error message

// A local method (handleClick) to handle the onClick event to update state (userSign) with user input

// Modules
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';

// Components
import Results from './Results.js';
 
const SignSelection = () => {
    // set user's astrological choice into state
    const [horoscope, setHoroscope] = useState([]);
    const [userChoice, setUserChoice] = useState('');

    // set user's choice of date into state
    const [date, setDate] = useState('');

    // set error into state
    const [error, setError] = useState('');

    // created a reference to the section that will display horoscope reading
    const readingRef = useRef();

    // event listener for click on user's astrological sign choice
    const handleClick = (event) => {
      setUserChoice(event.target.id);
      readingRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    // event listener for click on user's choice of date
    const handleDateChange = (event) => {
      setDate(event.target.id);
    }

    // API call to fetch data based on user's astrological choice
    useEffect( () => {
      // condition where API is only called with the user's choice (using method:POST as per API documentation, not sure why)
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
        })
        .catch((error) => {
          setError(error.message)
        });
      } 
    }, [userChoice])

    // API call to fetch data based on user's astrological choice & choice of date
    useEffect ( () => {
      // condition where API is only called with a date change (using method:POST as per API documentation, not sure why)
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
        }).catch ((error) => {
          setError(error.message);
        })
      }
    }, [userChoice, date])

    return (
      <main>

        <section className="sign-selection">
          
          <div>

            <h2>Select your astrological sign for your daily horoscope</h2>
            
            <div className="astro-buttons">
              
              <button id="aries" className="aries" onClick={ handleClick }>Aries<span>Mar 21 - Apr 20</span></button>
              <button id="taurus" className="taurus" onClick={ handleClick }>Taurus<span>Apr 21 - May 20</span></button>
              <button id="gemini" className="gemini" onClick={ handleClick }>Gemini<span>May 21 - June 21</span></button>
              <button id="cancer" className="cancer" onClick={ handleClick }>Cancer<span>Jun 22 - Jul 22</span></button>
              <button id="leo" className="leo" onClick={ handleClick }>Leo<span>Jul 23 - Aug 22</span></button>
              <button id="virgo" className="virgo" onClick={ handleClick }>Virgo<span>Aug 23 - Sep 22</span></button>
              <button id="libra" className="libra" onClick={ handleClick }>Libra<span>Sep 23 - Oct 22</span> </button>
              <button id="scorpio" className="scorpio" onClick={ handleClick }>Scorpio<span>Oct 23 - Nov 22</span></button>
              <button id="sagittarius" className="sagittarius" onClick={ handleClick }>Sagittarius<span>Nov 23 - Dec 21</span></button>
              <button id="capricorn" className="capricorn" onClick={ handleClick }>Capricorn<span>Dec 22 - Jan 19</span></button>
              <button id="aquarius" className="aquarius" onClick={ handleClick }>Aquarius<span>Jan 20 - Feb 18</span></button>
              <button id="pisces" className="pisces" onClick={ handleClick }>Pisces<span>Feb 19 - Mar 20</span></button>
              
            </div>

          </div>

        </section>
          

        <section className="horoscope-reading" ref={readingRef}>

          <div className="horoscope-reading-content">

            <h2><span className="lower">Y</span>ou<span className="upper">r</span> Re<span className="upper">a</span>ding</h2>

            <h3 className="error-message">{ error && <div>{ error }</div>}</h3>

            <div className="date-buttons">
              <button id="yesterday" className="yesterday" onClick={ handleDateChange }>Yesterday</button>
              <button id="today" className="today" onClick={ handleDateChange }>Today</button>
              <button id="tomorrow" className="tomorrow" onClick={ handleDateChange }>Tomorrow</button>
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
    
        </section>

      </main>

    )
}

export default SignSelection;