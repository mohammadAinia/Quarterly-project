import './Notification.css'

const Notification = (props) => {

    return (
        <>


            <label>
                <input type="checkbox" class="alertCheckbox" autocomplete="off" />
                <div class="alert warning">
                    <span class="alertClose">X</span>
                    <span class="alertText"> Notification : <br class="clear" /></span>
                </div>
            </label>

        </>
    )
}

export default Notification
