// Results

const Results = (props) => {
    return (
        <div className="user-horoscopeReading">
            <p>{props.description}</p>
            <p>{props.compatibility}</p>
            <p>{props.color}</p>
            <p>{props.lucky_number}</p>
            <p>{props.lucky_time}</p>
            <p>{props.mood}</p>
        </div>
    )
}

export default Results;