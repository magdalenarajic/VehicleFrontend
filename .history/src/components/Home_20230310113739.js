import React, {Component} from 'react';
import image from '../img/photo3.jpg';

export class Home extends Component{

    render(){
          return(

            <div style={{ backgroundImage:`url(${image})` , backgroundSize:"cover", 
            height:600,width:1200}}>
                This is Home page.
            </div>
          )
    }
}