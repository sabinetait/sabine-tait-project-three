// Icon

// Modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'
 
const Icon = () => {    

    return (
        <div>
            <a href="#header" sr-only="Top of page" className="arrow-up"><FontAwesomeIcon icon={faArrowCircleUp} /></a> 
        </div>
    )

}

export default Icon;