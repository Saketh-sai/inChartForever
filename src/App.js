import React from 'react';
import logo from './logo.svg';
import insta from './assets/insta.png';
import twitter from './assets/tw.png';
import fb from './assets/fb.png';
import easl from './assets/easel.png';
import canvas from './assets/canvas.png'
import './App.css';
import Home from './Homepage';
import ReactDOM from 'react-dom';
import {GiPaintBrush} from "react-icons/gi";
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
import "shards-ui/dist/css/shards.min.css";
import About from './about.js';

class Sweety extends React.Component {

  constructor(props) {
    super(props);
   
  }

  componentDidMount(){
				
		ReactDOM.render(<Home/>,document.getElementById('mn'));
				
  }

  showAbout(){
    ReactDOM.render(<About/>,document.getElementById('mn'));

  }
 
  
  render() {
   
    return ( 
      <div>
      
      <div class="social">
        <a class="inChart" href="#home">InChart_4ever <GiPaintBrush/></a>
        <a class="rt" href="#">
        <img src={insta} alt="insta" />
        </a>
        <a class="rt" href="#">
        <img src={twitter} alt="insta" />
        </a>
        <a class="rt" href="#">
        <img src={fb} alt="insta"  />
        </a>
        <a class="rt" href="#" onClick = { () => this.showAbout()}>About US</a>
      </div>

      <div id="mn">
     //The main page where componets gets rendered.
      </div>

      <div class="bot">
      <marquee>Sale! Sale! Sale! Sale! Sale! Sale! Sale! Sale! Sale! Sale!</marquee>
      </div>
      </div>


    );
  }
}

export default Sweety;