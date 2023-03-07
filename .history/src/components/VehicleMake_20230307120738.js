import React, { useEffect} from "react";
import { Observer } from "mobx-react";
import makeStore from "../stores/makeStore";
import { Table } from "react-bootstrap";

const MakeList = () => {

    useEffect(() => {
        makeStore.getData();
        
      }, []);

    return (
        <Observer>
        {() => ( 
          <Table>
             <thead>
                <tr>
                       <th> Id </th>
                       <th> Name</th>
                       <th> Abrv</th>
                </tr>
             </thead>
             <tbody> 
             {makeStore.vehicleData && makeStore.vehicleData.length > 0 ? (
                makeStore.vehicleData.map((make, index) => {
                  return (
                    <tr key={index}>
                      <td>{make.Id}</td>
                      <td>{make.Name}</td>
                      <td>{make.Abrv}</td>
                    </tr>
                  );
                })
              ): ( <tr><td>No data found</td></tr>)}
             </tbody>
          </Table>
        )}
        </Observer>
      )
};

export default MakeList;