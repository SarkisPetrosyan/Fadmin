import React from 'react';
import './styles.css';

const VitrinaHeader = () => (
  <div className="vitrina-header">
    <div className="title">
      <p>Витрина</p>
    </div>

    <div className="vitrina-header-info">
      <p>Новых за неделю: <span>4</span> </p>
      <p>Всего: <span>264</span></p>
    </div>
  </div>
);

export default VitrinaHeader;
