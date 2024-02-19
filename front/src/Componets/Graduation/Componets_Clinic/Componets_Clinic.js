import './Componets_Clinic.css'
import line from '../../../Assert/Images/Line1.png'
import clinic from '../../../Assert/Images/clinic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faRightToBracket, faPaw, faStoreSlash, faCoins, faFaceSmileWink, faBolt,
    faClock, faArrowsRotate, faComments, faHandHoldingHeart, faHouseCircleCheck,faPlus,
    faUsers, faArrowRightArrowLeft, faPaperPlane, faLocationDot,faRightFromBracket,faBell,faHouse
} from '@fortawesome/free-solid-svg-icons'


const Componets_Clinic = (props) => {
    return (

        <>
            <div class="overlap-groupp">
                <div class="ellipsee"><img class="clinic" src={clinic} /></div>
                <div class="text-wrapperr">{props.name_clinic}</div>
                <img class="linee" src={line} />
                <div class="elementtt"><FontAwesomeIcon icon={faClock} /></div>
                <div class="elementt">{props.Working_hours}</div>
                <div class="elementttT"><FontAwesomeIcon icon={faLocationDot} /></div>
                <div class="divv">{props.location}</div>
                <div class="framee"><a class="text-wrapper-222" href='Specific_clinic'>View</a></div>
            </div>
        </>

    )
}

export default Componets_Clinic