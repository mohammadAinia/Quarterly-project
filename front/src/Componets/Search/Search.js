import './Search.css'
const Search = (props) => {

    return (
        <>
            <div className="container">
                <div className="title">{props.title}</div>
                <div className="content">
                    <form action="#">
                        <div className="user-details">
                            <div className="input-box">
                                <input style={{"width":"300px"}} type="text" placeholder={props.placeholder} required />
                            </div>
                        </div>
                        <div className="button">
                            <button>{props.value}</button>
                        </div>
                        <div className="button">
                            <a style={{"width":"150px"}} href={props.href}>{props.a}</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Search
