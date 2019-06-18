import React from 'react';
import './styles.css';
import ChooseFlower from './chooseFlower'


function BouquetData (){

 return (
     <div className="bouquet-data-block">
         <div className="form-label">
             <label>
                 <p>Название букета</p>
                 <input type="text" placeholder = "Радость"/>
             </label>
         </div>         
          <ChooseFlower/>
          <ChooseFlower/>
          <ChooseFlower/>
         <div className="add-btn">
             <button>+ Добавить цветок</button>
         </div>
         <div className="attach-photo-btn">
                <label >
                    <input type="file" name = "file"/>
                    <div className="attach-photo">
                    <p>Загрузить фото</p>
                    </div>
                    
                </label>
         </div>
     </div>
 )
}

export default BouquetData;