import React from 'react';
import './styles.css';

function BouquetInfo({ data }) {
    return (
        <div className="bouqet-info-block">
            <div className="checkboxes">
                <div class="checkbox-btn-label ">
                    <label>
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <p>Доставка бесплатно</p>
                    </label>

                </div>
                <div class="checkbox-btn-label ">
                    <label>
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <p>Скидка</p>
                    </label>
                </div>
            </div>


            <div className="price-field form-label">
                <label>
                    <p>Стоимость </p>
                    <input type="text" placeholder="6000 руб." disabled />
                </label>
            </div>

            
        </div>
    )
}

export default BouquetInfo;