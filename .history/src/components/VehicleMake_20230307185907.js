import React, { useEffect} from "react";
import { Observer } from "mobx-react";
import makeStore from "../stores/makeStore";
import { Container, Table, Col } from "react-bootstrap";


const MakeList = () => {

  const [name] = " ";
  const [abrv] = " ";

    useEffect(() => {
        makeStore.getData();
        
      }, []);

    const deleteData = (id) => {
          makeStore.deleteData(id);
      };

    const saveData = (abrv,name) => {
        makeStore.deleteData(abrv,name);
      };
    

    return (
        <Observer>
        {() => ( 
          <><Container>
          <Container> 
          <Col> <label> Create new Vehicle Make</label></Col>
          </Container>
          <Container>
               <Col>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter Name"
                  value={name}
                 // onChange={(e) => setName(e.target.value)}
                ></input>
              </Col>
              <Col>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter Abrv"
                  value={abrv}
                //  onChange={(e) => setAbrv(e.target.value)}
                ></input>
              </Col>
              <Col> <button onClick={() => saveData(name,abrv)}>Save</button></Col>
              <Col> </Col>
          </Container>
          </Container>
          <br></br>
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
            </Table></>
        )}
        </Observer>
      )
};

export default MakeList;