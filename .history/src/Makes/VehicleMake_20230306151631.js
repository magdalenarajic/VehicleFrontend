
import React, { useEffect } from "react";
import makeStore from "../stores/makeStore";
import { Observer } from "mobx-react";

const VehicleMake = () => {

    useEffect(() => {
        makeStore.getData();
      }, []);

    return (
        <Observer>
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
              {makeStore.data.map(make => (
                  <tr key={make.id}>
                      <td>{make.name}</td>
                      <td>{make.abrv}</td>
                  </tr>
              ))}
          </tbody>
      </table>
  </div>
  </Observer>
    );

};

export default VehicleMake;