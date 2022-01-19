// Results

const Results = (props) => {
    return (
        <section className="results">
            <div className="user-horoscope-reading">
                <h3>{props.current_date}</h3>
                <p className="reading">{props.description}</p>
                <p><span>Compatible with:</span> {props.compatibility}</p>
                <p><span>Colour:</span> {props.color}</p>
                <p><span>Lucky number:</span> {props.lucky_number}</p>
                <p><span>Lucky time:</span> {props.lucky_time}</p>
                <p><span>Mood?</span> {props.mood}</p>
            </div>
        </section>
    )
}

export default Results;