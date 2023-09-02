import './Search.css'

const Search = () => {
    return (
        <>
            <div class="container">
                <div class="title">Search Animals</div>
                <div class="content">
                    <form action="#">
                        <div class="user-details">
                            <div class="input-box">
                                {/* <span class="details">Email</span> */}
                                <input style={{"width":"300px"}} type="text" placeholder="Enter name animal" required />
                            </div>
                        </div>
                        <div class="button">
                            <input type="submit" value="Search" />
                        </div>
                        <div class="button">
                            <a style={{"width":"150px"}} href="/Animal">Back</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Search
