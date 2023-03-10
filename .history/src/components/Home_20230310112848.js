import React, {Component} from 'react';
import image from '../img/photo1.jpg';

export class Home extends Component{

    render(){
          return(
            <div className="mt-5 d-flex justify-content-left" style={{ backgroundImage:`url(${image})` }}>
                This is Home page.
            </div>
          )
    }
}