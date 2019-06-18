import React from 'react';
import './styles.css';
import bouquetImg from '../../../../assets/images/flower1.png'

function searchFlowers () {
    return(
        <div className="serach-field form-label">
            <label>
            <p>Poisk po nazvaniun</p>
            <input type="text"/>
            </label>
            <div className="bouquets">
                <div className="bouquet">
                    <div className="bouquet-pic">
                        <img src={bouquetImg} alt="flower"/>
                    </div>
                    <div className="bouquet-name">
                        <p>Bouquet1</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default searchFlowers;