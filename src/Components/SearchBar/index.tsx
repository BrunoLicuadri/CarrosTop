import './styles.css';

export default function SearchBar() {
    return(
        <form className="ct-search-container">
                <input className="ct-search" type="text" placeholder="Digite sua busca"/>
                <button className="ct-search-btn" type="submit">Buscar</button>
        </form>

    )
}