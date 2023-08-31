import './Type.css'

const Type = () => {
    return (
        <>
            <div class="container">
                <div class="title">Choose the account type</div>
                <div class="content">
                    <form action="#">
                    <div class="button">
                            <a href="/Register_owner">Animal Owner</a>
                        </div>
                        <div class="button">
                            <a href="/Register_veterinarian">Veterinarian</a>
                        </div>
                        <div class="buttonn">
                            <a href="/Back">Back</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Type
