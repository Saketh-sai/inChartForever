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

class Sweety extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount(){
				
		ReactDOM.render(<Home/>,document.getElementById('mn'));
				
  }

  toggle() {
    console.log("Faf");
    this.setState({
      open: !this.state.open
    });
  }
  
  render() {
    const { open } = this.state;
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
        <a class="rt" href="#" onClick={this.toggle}>
        <img src={fb} alt="insta"  />
        </a>
        <a class="rt" href="#">About US</a>
      </div>

      <Modal open={open} toggle={this.toggle}>
      <ModalHeader>Header</ModalHeader>
      <ModalBody>👋 Hello there!</ModalBody>
    </Modal>
   

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