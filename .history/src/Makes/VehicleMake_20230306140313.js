import React, {useEffect} from 'react';
import { observer, inject } from 'mobx-react'

const VehicleMake = inject('makeStore')(
    observer(props => {
        const{makeStore} = props;
    
    useEffect(() => {
            makeStore.getData();
          }, []);

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
                    {this.makeStore.data.map(make => (
                        <tr key={make.id}>
                            <td>{make.name}</td>
                            <td>{make.abrv}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
     );
}))
export default VehicleMake;