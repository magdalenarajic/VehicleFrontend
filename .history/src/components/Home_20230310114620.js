import React, {Component} from 'react';
import image from '../img/photo3.jpg';

export class Home extends Component{

    render(){
          return(
            
            <div style={{ backgroundImage:`url(${image})` ,
             backgroundSize:"contain", 
             backgroundRepeat:"no-repeat",
            height:600,width:1000}}>
                <label  style={{backgroundColor: 'grey'}}> This is Home Page</label>
            </div>
          )
    }
}