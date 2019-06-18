import React, { useState } from 'react';
import './styles.css';
import BouquetData from '../addBouquetModal/new/BouquetData';
import BouquetInfo from '../addBouquetModal/new/BouquetInfo';


function AddBouquetModal(props) {

    const [firstModal, setFirstModal ] = useState(true);
    const [secondtModal, setSecondModal ] = useState(false);
    
    const  toggleFirstModal = (state) => {
        setFirstModal(true);
        setSecondModal(false)
    }

    const  toggleSecondModal = (state) => {
        setFirstModal(false);
        setSecondModal(true);
    }

    const firstModalTab = firstModal ? <FirstModalTab /> : null;
    const secondModalTab = secondtModal ? <SecondModalTab /> : null;


    

    console.log(firstModal, secondtModal)

    return (
        <div className="add-bouquet-modal-block">
            <div className="add-bouquet-modal-container">
                <div className="title-block">
                    <h3>Добавить букет</h3>
                </div>
                <div>
                    <div className="modal-tab-navigation">

                   
                <div className="tab-new-btn active-tab-button ">
                    <button onClick={toggleFirstModal} >Новый</button>
                </div>
                <div className="tab-virtual-vitrina-btn">
                    <button onClick={toggleSecondModal}>Виртуальная витрина</button>
                </div>
                </div>
                </div> 
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-container">
                        {firstModalTab}
                        {secondModalTab}
                        <div className="footer-block">
                            <div className="buttons">
                                <div className="add-bouquet-modal-btn active-button">
                                    <button onClick={props.alertMessage}>Добавить</button>
                                </div>
                                <div className="cancle-bouquet-modal-btn">
                                    <button onClick={props.closeModal}>Отмена</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

function FirstModalTab() {
    return (
        <>
            <BouquetData />
            <BouquetInfo />
        </>
    )
}

function SecondModalTab() {
    return (
        <>
         <BouquetInfo />
        </>
    )
}

export default AddBouquetModal;
