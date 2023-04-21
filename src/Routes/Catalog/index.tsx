import './styles.css';
import Header from "../../Components/Header";
import SearchBar from "../../Components/SearchBar";
import ProductCard from '../../Components/ProductCard';

export default function Catalog() {
    return(
        <>
            <Header/>
            <main>
                <section id="ct-catalog-section" className="">

                    <div>
                        <SearchBar/>
                    </div>

                    <div className="ct-card-container">
                        <ProductCard/>
                    </div>
                    
                </section>
                
            </main>
        
        </>
        
    )
}