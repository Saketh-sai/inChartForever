import React from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
  } from "shards-react";
  import { FormInput } from "shards-react";
  import {FcAddressBook} from "react-icons/fc";
  import {GrGift} from "react-icons/gr";
  import { FormCheckbox } from "shards-react";
  import "shards-ui/dist/css/shards.min.css";
  import {IoMdPricetags} from "react-icons/io";
  import {FcOk} from "react-icons/fc";
  import {FcCancel} from "react-icons/fc";
  import { Tooltip } from "shards-react";
  import ReactDOM from 'react-dom';
  import Home from './Homepage';
  import toast from 'toasted-notes';
import 'toasted-notes/src/styles.css';
  


export default class ModalBuy extends React.Component {
  constructor(props) {
    super(props);
    

    this.name = this.props.name;
    this.img = this.props.image;
    this.price = this.props.price; 

    this.toggle = this.toggle.bind(this);
    this.togglec = this.togglec.bind(this);

    this.state = { open: false };
    this.state = { cancel: false };


  }


  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  togglec() {
    this.setState({
      cancel: !this.state.cancel
    });
  }

  close(){
    ReactDOM.render(<Home/>,document.getElementById('mn'));
  }

  submit(){
             
    toast.notify(<h6 class="green">Your Order has been sucessfully placed !!</h6>,{position:'top-right'});
    setTimeout(() => {
                                      
        ReactDOM.render(<Home/>,document.getElementById('mn'));
      }, 2000);
        
   
  }
  
  render() {
   
    return (
      <div class="buymdl" id="container">

      <Card style={{ maxWidth: "500px" }} className="cardbuy">
      <CardHeader>{this.name}</CardHeader>     
      <CardBody>
      <p><FormInput size="sm" placeholder="Address line 1" className="mb-2" /></p>
      <p><FormInput size="sm" placeholder="Address line 2" className="mb-2" /></p>
            
      <FormCheckbox      
      small
      checked={this.state.checked}
      onChange={this.handleChange}>
        Show LOVE with beautiful packing <GrGift/>
        </FormCheckbox>

        <CardTitle className="price">Total :{this.price} <IoMdPricetags/></CardTitle>
                  
      </CardBody>
      <CardFooter>
      
      <FcOk className="setsvg" id="ok" onClick={() => this.submit()}/>
      <FcCancel  className="setsvg" id="cancel" onClick= {() => this.close()}/>
      <Tooltip
          open={this.state.open}
          target="#ok"
          toggle={this.toggle}
        > Submit  
        </Tooltip>

        <Tooltip
          open={this.state.cancel}
          target="#cancel"
          toggle={this.togglec}
        > Cancel
        </Tooltip>
        <div id="prog"></div>
        </CardFooter>
    </Card>
      </div>
    );
  }
}
