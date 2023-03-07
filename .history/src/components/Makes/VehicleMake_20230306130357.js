import * as React from 'react';
import {observer,inject} from 'mobx-react'

class VehicleMake extends React.Component{
    
    componentDidMount() {
      this.props.VehicleMakeStore.getData();
    }
    render(){
          return(
            <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Abrv</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.VehicleMakeStore.data.map(make => (
                        <tr key={make.id}>
                            <td>{make.name}</td>
                            <td>{make.abrv}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
            
          )
    }
}

export default inject("VehicleMakesStore")(observer(VehicleMake));