import React, {Component} from 'react';
import image from '../img/photo3.jpg';

export class Home extends Component{

    render(){
          return(
            
            <div style={{ backgroundImage:`url(${image})` ,
             backgroundSize:"contain", 
             backgroundRepeat:"no-repeat",
             flex: 1,
             // remove width and height to override fixed static size
             width: null,
             height: null,
            }}>
                <label  style={{backgroundColor: 'grey'}}> This is Home Page</label>
            </div>
          )
    }
}