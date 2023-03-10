import React, {Component} from 'react';
import image from '../img/photo1.jpg';

export class Home extends Component{

    render(){
          return(
            <div style={{ backgroundImage:`url(${image})` , backgroundSize: "cover"}}>
                This is Home page.
            </div>
          )
    }
}