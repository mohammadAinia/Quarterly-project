import './Type.css'

const Type = () => {
    return (
        <>
            <div class="container">
                <div class="title">Choose the account type</div>
                <div class="content">
                    <form action="#">
                    <div class="button">
                            <a href="/Register">Animal Owner</a>
                        </div>
                        <div class="button">
                            <a href="/Register">Veterinarian</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Type
