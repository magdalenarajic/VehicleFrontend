import React, {Component} from 'react';
import image from '../img/photo3.jpg';

export class Home extends Component{

    render(){
          return(
            
            <div style={{ backgroundImage:`url(${image})` ,
             backgroundSize:"cover", 
             backgroundRepeat:"no-repeat",
             backgroundPosition: 'center',
            height:600,width:1100}}>
                <label  style={{backgroundColor: 'grey'}}> This is Home Page</label>
                <h3 className="m-3 d-flex justify-content-center">
        Vehicle App
      </h3>
            </div>
          )
    }
}