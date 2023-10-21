import './Choose_button.css'

const Choose_button = (props) => {
    return (
        <>
            <div class="container" style={{ "width": "400px" }}>
                <div class="title">{props.title}</div>
                <div class="content">
                    <form action="#">
                        <div class="button">
                            <a style={{ "width": "200px" }} href={props.href1}>{props.name1}</a>
                        </div>
                        <div class="button">
                            <a href={props.href2}>{props.name2}</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Choose_button
