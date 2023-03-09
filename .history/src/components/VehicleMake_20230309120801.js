import React, { useEffect, useState} from "react";
import { Observer } from "mobx-react";
import makeStore from "../stores/makeStore";
import { Container, Table, Col , Row} from "react-bootstrap";
import UpdateMake from "./UpdateMakeForm";


const MakeList = () => {
  
  const[show, setShow] = useState(false);

  const [name, setName] = useState("");
  const [abrv, setAbrv] = useState("");

  const handleShow = () => setShow(true);
  
  const[editName, setEditName] = useState("");
  const[editAbrv, setEditAbrv] = useState("");
  const[editId, setEditId] = useState("");
  
  const getSingleData = (id) => {
    handleShow();
    makeStore.getSingleData(id)
    .then((result) => {
      setEditName(result.singleData.Name);
      setEditAbrv(result.singleData.Abrv);
      setEditId(id);
    });
  };

  const updateData = () => {
    
  }

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
          <Col >
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
                          <button className="edit-btn" onClick={() => getSingleData(make.Id)} >
                            Edit
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (<tr><td>No data found</td></tr>)}
              </tbody>
            </Table>
            </Col>
            {showForm ? <UpdateMake /> : null }
            <Col md="auto">
              <br />
          <label> Create new Vehicle Make</label>
          <br />
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
            </Row>
            </Container>
            </>
        )}
        </Observer>
      )
};

export default MakeList;