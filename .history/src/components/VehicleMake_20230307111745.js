import React, { useEffect } from "react";
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
             {makeStore.data && makeStore.data.length > 0 ? (
                makeStore.data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.abrv}</td>
                    </tr>
                  );
                })
              ) : (<br></br>)}
             </tbody>
          </Table>
        )}
        </Observer>
      )
};

export default MakeList;