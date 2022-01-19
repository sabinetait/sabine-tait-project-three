// Results

const Results = (props) => {
    return (
        <section className="results">
            <div className="user-horoscope-reading">
                <h3>{props.current_date}</h3>
                <p>{props.description}</p>
                <p>Compatible with: {props.compatibility}</p>
                <p>Colour: {props.color}</p>
                <p>Lucky number: {props.lucky_number}</p>
                <p>Lucky time: {props.lucky_time}</p>
                <p>How are you feeling? {props.mood}</p>
            </div>
        </section>
    )
}

export default Results;