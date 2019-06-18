import React from 'react';
import './styles.css';
import FlowerQuantity from './flowerQuantity';

function chooseFlower (){
    return (
        <div className="choose-flower-block">
         
            
           <div className="choose-flower">
               <label>
                   <p>Цветок</p>
                   <select >
                       <option value="Роз">Роз</option>
                       <option value="Розы freedom 60 cm">Розы freedom 60 cm</option>
                       <option value="Розы freedom 40 cm">Розы freedom 40 cm</option>
                       <option value="Розы красные">Розы красные</option>
                   </select>
               </label>
           </div>

        
           <FlowerQuantity/>
        
            
        </div>
    )
}

export default chooseFlower;