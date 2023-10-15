import './Conversation_receive.css'
import avatar from '../../../Assert/Images/image.png'

const Conversation_receive = (props) => {
    return (
        <>
            <div class="chat__conversation-board__message-container">
                <div class="chat__conversation-board__message__person">
                    <div class="chat__conversation-board__message__person__avatar"><img src={avatar} alt="Monika Figi" /></div><span class="chat__conversation-board__message__person__nickname"></span>
                </div>
                <div class="chat__conversation-board__message__context">
                    <div class="chat__conversation-board__message__bubble"> <span>{props.receive}</span></div>
                </div>
            </div>
        </>
    )
}

export default Conversation_receive
