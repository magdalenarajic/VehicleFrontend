
import React from "react";
import makeStore from "../stores/makeStore";

const VehicleMake = () => {
    return (
      <div>
      <table>
          <thead>
              <tr>
                <th> Id </th>
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
    );
};

export default VehicleMake;