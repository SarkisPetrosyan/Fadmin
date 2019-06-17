import React from 'react';
import './styles.css';
import { vitrinaTabs } from '../../../constants/globals';

const VitrinaTabs = ({
  tab,
  onTabChange,
}) => {
  return (
    <div className="vitrina-sub-navigation">
      <div 
        className={`navigation-item ${tab === vitrinaTabs.VITRINA && 'active-navigation-item'}`} 
        onClick={() => onTabChange(vitrinaTabs.VITRINA)}
      >
        <p>Витрина</p>
      </div>
      <div 
        className={`navigation-item ${tab === vitrinaTabs.VIRTUAL_VITRINA && 'active-navigation-item'}`} 
        onClick={() => onTabChange(vitrinaTabs.VIRTUAL_VITRINA)}
      >
        <p>Виртуальная витрина</p>
      </div>
      <div 
        className={`navigation-item ${tab === vitrinaTabs.NO_AMOUNT && 'active-navigation-item'}`} 
        onClick={() => onTabChange(vitrinaTabs.NO_AMOUNT)}
      >
        <p>Нет в наличии</p>
      </div>
      <div 
        className={`navigation-item ${tab === vitrinaTabs.PUBLICATIONS && 'active-navigation-item'}`} 
        onClick={() => onTabChange(vitrinaTabs.PUBLICATIONS)}
      >
        <p>Публикации</p>
      </div>
    </div>
  );
}

export default VitrinaTabs;
