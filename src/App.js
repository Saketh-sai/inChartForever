import React from 'react';
import logo from './logo.svg';
import insta from './assets/insta.png';
import twitter from './assets/tw.png';
import fb from './assets/fb.png';
import easl from './assets/easel.png';
import './App.css';

class Sweety extends React.Component {

  render() {
    return ( 
      <div>
      
      <div class="social">
        <a class="inChart" href="#home">InChartForever</a>
        <a class="rt" href="#">
        <img src={insta} alt="insta" />
        </a>
        <a class="rt" href="#">
        <img src={twitter} alt="insta" />
        </a>
        <a class="rt" href="#">
        <img src={fb} alt="insta" />
        </a>
        <a class="rt" href="#">About US</a>
      </div>
      <div class="main">
      
      
      
      </div>
      <div class="bot">
      <marquee>Sale! Sale! Sale! Sale! Sale! Sale! Sale! Sale! Sale! Sale!</marquee>
      </div>

      </div>


    );
  }
}

export default Sweety;