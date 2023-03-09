import React, { useEffect, useState} from "react";
import { Observer } from "mobx-react";
import makeStore from "../stores/makeStore";
import { Container, Table, Col , Row} from "react-bootstrap";


const MakeList = () => {

  
  const [name, setName] = useState("");
  const [abrv, setAbrv] = useState("");
 
    useEffect(() => {
        makeStore.getData();
        
      }, []);

    const deleteData = (id) => {
          makeStore.deleteData(id);
      };

    const saveData = () => {
        makeStore.createData(abrv,name);
        setName(" ");
        setAbrv(" ");
        window.location.reload(true);
      };
    

    return (
        <Observer>
        {() => ( 
          <><Container>
            <Row>
              <Col xs lg="2">
          <label> Create new Vehicle Make</label>
               <input
                  type={"text"}
                  className="form-control"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Abrv"
                  value={abrv}
                  onChange={(e) => setAbrv(e.target.value)}
                ></input>
              <Col><button className="create-button" onClick={() => saveData()}>Save</button></Col>
          <br></br>
          </Col>
          <Col md="auto">
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
                        <td>
                          <button className="delete-btn" onClick={() => deleteData(make.Id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (<tr><td>No data found</td></tr>)}
              </tbody>
            </Table>
            </Col>
            </Row>
            </Container>
            </>
        )}
        </Observer>
      )
};

export default MakeList;