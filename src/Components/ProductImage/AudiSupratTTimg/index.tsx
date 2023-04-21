import './styles.css';
import carImg from '../../../../assets/images/car.png';

export default function AudiSupraTTimg() {
    return (
        <div>
            <img className="ct-car-img" src={carImg} alt="Car Image" />
        </div>
    );
}