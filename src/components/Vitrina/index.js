import React, { useState } from 'react';
import './styles.css';
import fakeVitrinaData from '../../constants/fakeVitrinaData';
import VitrinaItem from './VitirnaItem';
import plusIcon from '../../assets/images/icons/plus-icon.png';
import sortIcon from '../../assets/images/icons/collection-sort.png';
import VitrinaHeader from './VitrinaHeader';
import VitrinaTabs from './VitrinaTabs';
import { vitrinaTabs } from '../../constants/globals';
import key from '../../assets/images/icons/vitrinal-icons/key-active.png';
import bouquet from '../../assets/images/icons/vitrinal-icons/bouquet-active.png';
import freeDelivery from '../../assets/images/icons/vitrinal-icons/free-delivery-active.png';
import percentage from '../../assets/images/icons/vitrinal-icons/percentage-active.png';
import VitrinaPagination from '../Vitrina/VitrinaPagination';
import topNavigationRouts from '../../constants/mainNavigation';
import { NavLink } from 'react-router-dom';

function Vitrina({ props }) {
    const [tab, onTabChange] = useState(vitrinaTabs.VITRINA);
    return (
        <div className="vitrina-container">
            <div className="vitrina-content">
                <VitrinaHeader />
                <div className="vitrina-sub-navigation-block">
                    <VitrinaTabs
                        tab={tab}
                        onTabChange={onTabChange}
                    />
                    <div className="add-bucket-btn">
                        <button>
                            <i><img src={plusIcon} alt="add" /></i><span>Добавить букет</span> </button>
                    </div>
                </div>
                <div className="vitrina-filters-block">
                    <div className="vitrina-filters-block-left">
                        <div className="info">
                            <p>В данном разделе предоствлены собранные и не собранные букеты, состав цветов которых присутвует в наличии.</p>
                        </div>
                        <div className="sort-by">
                            <p>Сортировать по:</p>
                            <div className="sort-by-collection">
                                <span>Собран</span>
                                <span><img src={sortIcon} alt="img" /></span>
                            </div>
                            <div className="sort-by-price">
                                <p>Цене</p>
                            </div>
                        </div>
                    </div>
                    <div className="vitrina-filters-block-right">
                        <div className="filters">
                            <div className="filter">
                                <div className="pink icon">
                                    <img src={key} alt="img" />
                                </div>
                                <div className="title">
                                    <p>Зарезервирован</p>
                                </div>
                            </div>
                            <div className="filter">
                                <div className="green icon">
                                    <img src={bouquet} alt="img" />
                                </div>
                                <div className="title">
                                    <p>Замена цветка</p>
                                </div>
                            </div>
                            <div className="filter">
                                <div className="purple icon">
                                    <img src={freeDelivery} alt="img" />
                                </div>
                                <div className="title">
                                    <p>Бесплатная доставка</p>
                                </div>
                            </div>
                            <div className="filter">
                                <div className="orange icon">
                                    <img src={percentage} alt="img" />
                                </div>
                                <div className="title">
                                    <p>Букет со скидкой</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vitrina-flowers-root">
                    {
                        fakeVitrinaData.map(flowerItem => {
                            return <VitrinaItem data={flowerItem} key={flowerItem.id} />
                        })
                    }
                </div>
            </div>
            <div className="vitrina-paginnation">
                <VitrinaPagination />
            </div>
        </div>
    )
}


export default Vitrina;

