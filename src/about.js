import React from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
  } from "shards-react";
 
  import "shards-ui/dist/css/shards.min.css";
  import {FcUndo} from "react-icons/fc";
  import ReactDOM from 'react-dom';
  import Home from './Homepage';
import 'toasted-notes/src/styles.css';
import sweety from './assets/sweety.jpg';
import {FcApproval} from "react-icons/fc";

  


export default class About extends React.Component {

  close(){
    
    ReactDOM.render(<Home/>,document.getElementById('mn'));
  }

  
  render() {
   
    return (
      <div class="buymdl" id="container">

      <Card style={{ maxWidth: "500px" }} className="cardbuy">
      <CardHeader>"inChart_4ever <FcApproval/> </CardHeader>     
      <CardBody>
        <CardImg src={sweety} className="swtImg" />
        <CardTitle className="price"> Sweety </CardTitle>
        <p>Details to be added</p>   
        <p>Details to be added</p>                                    
      </CardBody>
      <CardFooter>
      
      <FcUndo className="setsvg" id="ok" onClick={() => this.close()}/>
      
       
        </CardFooter>
    </Card>
      </div>
    );
  }
}
