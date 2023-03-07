import * as React from 'react';
import { observer, inject } from 'mobx-react';

class makeList extends React.Component {

    componentDidMount() {
        this.props.makeStore.getData();
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.makeStore.vehicleData.map(make => (
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

export default inject("makeStore")(observer(makeList));