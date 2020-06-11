import React from 'react';
import easl from './assets/easel.png';
import canvas from './assets/canvas.png'
import Easlcomp from './Easel';
import ReactDOM from 'react-dom';
import loader from './assets/loader2.gif';
import $ from 'jquery';
import toast from 'toasted-notes';
import 'toasted-notes/src/styles.css';
import {FaTruckLoading} from "react-icons/fa";

class Home extends React.Component{
    
    constructor(){
        super();
        // this.state={ 
        //     isloader : false
        // }
    }
    loadEasl(value) {
        if(value=="easel"){
            toast.notify(<h6 class="green">Your Easels are Loading...... <FaTruckLoading/></h6>,{position:'top-right'});
        }else{
            toast.notify(<h6 class="green">Your Paintings are Loading...... <FaTruckLoading/></h6>,{position:'top-right'});
        }
        
        setTimeout(() => {
                                      
              ReactDOM.render(<Easlcomp type={value}/>,document.getElementById('mn'));
            }, 3000);
      
      }  

    render(){
        return(
            <div id="mn">
      <div class="main lft">
      <img src={easl} alt="insta"  onClick = {()=> this.loadEasl("easel")}/>            
      </div>
      <div class="main rgt">
      <img src={canvas} alt="insta" onClick = {()=> this.loadEasl("canvas")}/>            
      </div>

      </div>

     
        );

       
    }
}
export default Home;