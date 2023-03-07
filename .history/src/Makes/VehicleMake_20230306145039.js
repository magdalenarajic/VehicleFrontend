
import { useEffect } from "react";
import makeStore from "../stores/makeStore";

const VehicleMake = () => {

    useEffect(() => {
        makeStore.getData();
      }, []);

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
              {this.props.makeStore.data.map(country => (
                  <tr key={country.id}>
                      <td>{country.Name}</td>
                      <td>{country.Abrv}</td>
                  </tr>
              ))}
          </tbody>
      </table>
  </div>
    );

};

export default VehicleMake;