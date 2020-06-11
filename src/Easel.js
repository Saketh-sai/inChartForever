import React from 'react';
import data from './Data/easel.json';
import cnvpaints from './Data/crafts.json';
import { Button } from "shards-react";
import "shards-ui/dist/css/shards.min.css";
import ReactDOM from 'react-dom';
import Home from './Homepage';
import {FcRating} from "react-icons/fc";
import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
} from "shards-react";
import ModelBuy from './modal';
import ModalBuy from './modal';




class Easelcomp extends React.Component{

    constructor(props){
        super(props);
        if(this.props.type == "easel"){
             this.Arts = data.objcts;
        } 
        else{
            this.Arts = cnvpaints.objcts;
        }
        
    }

    load(name , img , price) {
       
       ReactDOM.render(<ModalBuy name={name} image = {img} price = {price}/>,document.getElementById('mn'));
      }
   
    close = () => {
        ReactDOM.render(<Home/>,document.getElementById('mn'));
    }
    render(){
       
        return (
            <div class="loadEasels">
            <div class="back"> <Button size="sm" outline pill theme="info" onClick={this.close} className="lt">
                Back
            </Button></div>

        
              {
               
                   this.Arts.map(s => (
                    <div class="cards">
                    <Card style={{ maxWidth: "200px" }} >
                    <CardHeader>{s["Name"]}</CardHeader>                    
                    <CardImg src={s["img-url"]} className="cardImg" />
                    <CardBody className="cardBody">
                      <CardTitle>Price : {s["price"]}</CardTitle>
                     {
                        s.rating.map( () => (
                            <span>  <FcRating/></span> 
                           ) 
                           )
                      }
                      <p ><Button outline pill block theme="success" size ="sm" className="buynow" onClick = {()=> this.load(s["Name"],s["img-url"],s["price"])}>
                      Buy Now
                      </Button></p>  
                      
                     
        
                    
                    </CardBody>
                  </Card>
                    </div>
                   ))
               
              }
            </div>
          );
    }
}
export default Easelcomp;