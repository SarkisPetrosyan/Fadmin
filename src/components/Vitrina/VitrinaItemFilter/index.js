import React from 'react';
import "./styles.css";
import key from '../../../assets/images/icons/vitrinal-icons/key.png';
import activeKey from '../../../assets/images/icons/vitrinal-icons/key-active.png';
import bouquet from '../../../assets/images/icons/vitrinal-icons/bouquet.png';
import bouquetActive from '../../../assets/images/icons/vitrinal-icons/bouquet-active.png';
import delivery from '../../../assets/images/icons/vitrinal-icons/free-delivery.png';
import activeDelivery from '../../../assets/images/icons/vitrinal-icons/free-delivery-active.png';
import percentage from '../../../assets/images/icons/vitrinal-icons/percentage.png';
import percentageActive from '../../../assets/images/icons/vitrinal-icons/percentage-active.png';

function VitrinaItemFilter({ filter, type }) {
    const renderClass = type => {
        switch (type) {
            case "isReserved":
                return {
                    className: "pink",
                    image: filter ? activeKey : key,
                };
            case 'isChangeEnabled':
                return {
                    className:"green",
                    image: filter ? bouquetActive : bouquet,
                }
            case 'isFreeDeliveryenabled':
                return {
                    className:'purple',
                    image: filter ? activeDelivery : delivery,
                };
            case 'isUnderSale':
                return {
                    className:"orange",
                    image: filter ? percentageActive : percentage,
                }
            default:
                return {
                   
                   
                };
        }
    }
    const { className, image } = renderClass(type);
    return (
        <div className={filter ? className : '' }>
            <img src={image} alt={type} />
        </div>
    )
}

export default VitrinaItemFilter;