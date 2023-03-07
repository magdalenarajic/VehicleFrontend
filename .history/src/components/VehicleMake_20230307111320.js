import React, { useEffect, Fragment } from "react";
import { observer, inject, Observer } from "mobx-react";
import makeStore from "../stores/makeStore";
import { Table } from "react-bootstrap";

const makeList = () => {

    useEffect(() => {
        makeStore.getData();
        
      }, []);

    return (
        <Observer>
        {() => ( 
          <Table>
             <thead>
                <tr>

                </tr>
             </thead>
          </Table>
        )}
        </Observer>
      )
};

export default makeList;