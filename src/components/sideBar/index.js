import React from 'react';
import './styles.css';
import routs from '../../constants/sidebarNavigation';
import { NavLink } from 'react-router-dom';

function SideBar({data, ...props}) {
    return(
        <div className="sidebar-container">
            {
                routs.map(route => {
                    
                    return <NavLink activeClassName="active-tab" to={route.path}>
                        <div className="sidebar-item-container">

                            <div className={`sidebar-item sidebar-item-icon ${route.imageClassName}`} />
                            <div className="tab-name">{route.name}</div>
                        </div>
                    </NavLink>
                })
            }
        </div>
    );
}

export default SideBar;