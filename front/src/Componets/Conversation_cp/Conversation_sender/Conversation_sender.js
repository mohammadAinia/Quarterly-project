import './Conversation_sender.css'
import avatar from '../../../Assert/Images/image.png'

const Conversation_sender = (props) => {
    return (
        <>
            <div class="chat__conversation-board__message-container reversed">
                <div class="chat__conversation-board__message__person">
                    <div class="chat__conversation-board__message__person__avatar"><img src={avatar} alt="Dennis Mikle" /></div><span class="chat__conversation-board__message__person__nickname"></span>
                </div>
                <div class="chat__conversation-board__message__context">
                    <div class="chat__conversation-board__message__bubble"> <span>{props.sender}</span></div>
                </div>
            </div>
        </>
    )
}

export default Conversation_sender
