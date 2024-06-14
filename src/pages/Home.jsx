import React from 'react';
import Chat from './components/index';
import './home.css';

const Home = () => {
  return ( 
   
    <div className="start">
       <h1 >Online Chat</h1>
       <div className="home">
      <div className="container">
       
        <Chat />
      </div>
    </div>
    </div>
  );
};

export default Home;
