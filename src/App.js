import React,{ useState } from 'react';

// ui component for page layout
import Header from "./components/shared/Header";
// import Sidebar from "./components/shared/Sidebar";
import Footer from "./components/shared/Footer";
 
 

function App( { children } ) {
  return (
      <div className="main-app">
        <Header /> 
          <div className="routerCompo">
             { children } 
          </div>
        <Footer /> 
      </div>
  );
}

export default App;
