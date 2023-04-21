import './styles.css';
import carImg from '../../assets/images/car.png';

export default function ProductCard() {
    return (
        <>

            <div className="ct-product-img">
                <img className="ct-car-img" src={carImg} alt="Car Image" />
            </div>
            <div className="ct-product-name">
                <h2>Audi Supra TT</h2>
            </div>
            <div className="ct-product-description">
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</h3>
            </div>
            <div className="ct-product-buy-button">
                <button type="submit">Comprar</button>
            </div>


        </>
    );
}