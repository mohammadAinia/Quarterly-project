import './Search.css'
const Search = (props) => {

    return (
        <>
            <div class="container">
                <div class="title">{props.title}</div>
                <div class="content">
                    <form action="#">
                        <div class="user-details">
                            <div class="input-box">
                                {/* <span class="details">Email</span> */}
                                <input style={{"width":"300px"}} type="text" placeholder={props.placeholder} required />
                            </div>
                        </div>
                        <div class="button">
                            <input type="submit" value={props.value} />
                        </div>
                        <div class="button">
                            <a style={{"width":"150px"}} href={props.href}>{props.a}</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Search
