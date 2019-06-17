import React from 'react';
import './styles.css';
import prevArrow from '../../../assets/images/icons/left-arrow.png';
import nextArrow from '../../../assets/images/icons/right-arrow.png'

const VitrinaPagination = () => (
  <div className="vitrina-pagination">
    <ul className="pages-list">
      <li>
        <a href="#">
          <img src={prevArrow} alt="previous page"/>
        </a>
      </li>
      <li><a href="#"> 1</a></li>
      <li><a href="#"> 2</a></li>
      <li className = "active-page"><a href="#"> 3</a></li>
      <li><a href="#"> ...</a></li>
      <li><a href="#"> 56</a></li>
      <li>
        <a href="#">
          <img src={nextArrow} alt="next page"/>
        </a>
      </li>
    </ul>
  </div>
);

export default VitrinaPagination;
