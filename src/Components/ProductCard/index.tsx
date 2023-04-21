import './styles.css';
import ProductBuyButton from '../ProductBuyButton';
import ProductDescription from '../ProductDescription/AudiSupraTT';
import AudiSupraTT from '../ProductName/AudiSupraTT';
import AudiSupraTTimg from '../ProductImage/AudiSupratTTimg';

export default function ProductCard() {
    return (
        <>
            <div className="ct-card">
                <AudiSupraTTimg/>
                <AudiSupraTT/>
                <ProductDescription/>
                <ProductBuyButton/>
            </div>

        </>
    );
}