import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/sideBar';
import  {Route , Redirect } from 'react-router-dom';
import routs from './constants/sidebarNavigation';
import Header from './components/header';
import  MainNavigation from './components/mainNavigation';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main-container">
      <SideBar/>      
      <div className="main-container-root">
      <MainNavigation/>
      <Redirect to={routs[5].path}/>
        {
          routs.map(route => {
            return <Route path={route.path} component={route.component} exact />  
          })
        } 
        </div>   
      </div>
</div>
  );
}

export default App;
