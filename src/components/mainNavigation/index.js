import React from 'react';
import './styles.css';
import mainNavigationRouts from '../../constants/mainNavigation';
import { NavLink } from 'react-router-dom';

function MainNavigation({data, ...props}) {
    return(
        <div className="main-navigation">
            {
                mainNavigationRouts.map(mainNavigationRoute => {
                    return <NavLink activeClassName="active-page" to={mainNavigationRoute.path}>
                        <div className="nav-item-container">
                            <div className="main-nav-name">{mainNavigationRoute.name}</div>
                        </div>
                    </NavLink>
                })
            }
        </div>
    );
}

export default MainNavigation;