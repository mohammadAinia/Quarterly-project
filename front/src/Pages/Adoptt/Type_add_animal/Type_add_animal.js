import './Type_add_animal'

const Type_add_animal = () => {
    return (
        <>
            <div class="container">
                <div class="title">Choose how to add animal</div>
                <div class="content">
                    <form action="#">
                        <div class="button">
                            <a style={{ "width": "300px" }} href="/Chose_from_your_animal">Choose from my animals</a>
                        </div>
                        <div class="button">
                            <a href="/Add_Animal_to_adopt">Insert a new animal</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Type_add_animal
