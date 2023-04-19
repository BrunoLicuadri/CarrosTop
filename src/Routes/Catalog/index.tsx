import './styles.css';
import Header from "../../Components/Header";
import SearchBar from "../../Components/SearchBar";

export default function Catalog() {
    return(
        <>
            <Header/>
            <main>
                <section id="ct-catalog-section">

                    <div className="ct-search-container">
                        <SearchBar/>
                    </div>

                    <div>
                        Cards
                    </div>
                    
                </section>
                
            </main>
        
        </>
        
    )
}