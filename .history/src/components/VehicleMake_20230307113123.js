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
               {makeStore.data} 
             {makeStore.data && makeStore.data.length > 0 ? (
                makeStore.data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.Id}</td>
                      <td>{item.Name}</td>
                      <td>{item.Abrv}</td>
                    </tr>
                  );
                })
              ): ( <tr><td>Loadinggg</td></tr>)}
             </tbody>
          </Table>
        )}
        </Observer>
      )
};

export default MakeList;