import './Search_animal.css'
import { Search } from '../../Componets/index'
import Search_data from '../../Data/Search_data'
const Search_animal = () => {
    const c = Search_data.map(i=>{
        return <Search title={i.title} placeholder={i.placeholder} value={i.value} href={i.href} a={i.a}/>
    })
    return (
        <>

            {c}

        </>
    )
}

export default Search_animal
