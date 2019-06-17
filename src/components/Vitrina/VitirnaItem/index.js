import React from 'react';
import VitrinaItemFilter from '../VitrinaItemFilter';
import './styles.css';
function VitrinaItem({ data }) {

    const { flowersData, filters, flowersProfit } = data;
    const filtersArray = Object.keys(filters);

    return (
        <div className="vitrinaItem-root">
            <div className="vitrinaItem-root-cnt">
        

                <div className="vitrinaItem-image-block">
                    <img src={data.imageUrl} alt={data.title} />
                </div>
                <div className="vitrinaItem-info-block">
                    <div className="vitrinaItem-info-left">
                        <div className="vitrinaItem-title">{data.title}</div>
                        <ul className="vitrinaItem-flowers-quantitiy-list">

                        {
                                    flowersData.map(flowerData => {
                                        return <li  key={flowerData.name}>{`${flowerData.name} - ${flowerData.count}`} </li>
                                    })
                                }
                        </ul>
                        <ul className="vitrinaItem-flowers-profity-list">
                        {
                                    flowersProfit.map(flowerProfit => {
                                        return <li  key={flowerProfit.title}>{`${flowerProfit.title} - ${flowerProfit.count}`} </li>
                                    })
                                }

                        </ul>
                        <div className="vitrinaItem-flower-price">
                            <p> Цена {data.price}</p>
                        </div>
                    </div>

                    <div className="vitrinaItem-info-right">
                        
                        {
                            filtersArray.map(filterItem => {
                                return <VitrinaItemFilter filter={filters[filterItem]} type={filterItem} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VitrinaItem;