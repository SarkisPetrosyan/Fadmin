import React from 'react';
import './styles.css';

function BouquetInfo({data}) {
    // const {flowersProfit} = data;
    return (
        <div className="bouqet-info-block">
            <div className="checkboxes">
                <div class="checkbox-btn-label ">
                    <label>
                        <input type="checkbox" checked="" />
                        <span class="checkmark"></span>
                        <p>Доставка бесплатно</p>

                    </label>

                </div>
                <div class="checkbox-btn-label ">
                    <label>
                        <input type="checkbox" checked="" />
                        <span class="checkmark"></span>
                        <p>Скидка</p>
                    </label>
                </div>
            </div>
            <div className="price-field form-label">
                <label>
                    <p>Стоимость </p>
                    <input type="text" placeholder = "6000 руб." disabled/>
                </label>
            </div>
            {/* <ul className="vitrinaItem-flowers-profity-list">
                        {
                                    flowersProfit.map(flowerProfit => {
                                        return <li  key={flowerProfit.title}>{`${flowerProfit.title} - ${flowerProfit.count}`} </li>
                                    })
                                }

                        </ul> */}
            </div>

            )
        }
        
export default BouquetInfo;