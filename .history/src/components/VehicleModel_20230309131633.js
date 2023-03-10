import React, { useEffect, useState } from "react";
import { Observer } from "mobx-react";
import modelStore from "../stores/modelStore";
import { Container, Table, Col, Row } from "react-bootstrap";

const ModelList = () => {
  const [showForm, setShowForm] = useState(false);
  const handleShow = () => setShowForm(true);

  const [name, setName] = useState("");
  const [abrv, setAbrv] = useState("");
  const [makeId, setMakeId] = useState("");

  const [editName, setEditName] = useState("");
  const [editAbrv, setEditAbrv] = useState("");
  const [editMakeId, setEditMakeId] = useState("");
  const [editId, setEditId] = useState("");

  useEffect(() => {
    modelStore.getData();
  }, []);

  const getSingleData = (id) => {
    handleShow();
    modelStore.getSingleData(id).then((result) => {
      setEditName(result.data.Name);
      setEditAbrv(result.data.Abrv);
      setEditMakeId(result.data.MakeId);
      setEditId(result.data.Id);
    });
  };

  const updateData = () => {
    const data = {
      name: editName,
      abrv: editAbrv,
      makeId: editMakeId
    };
    const id = {
      Id: editId,
    };
    console.log(data,id);
    modelStore.updateData(editName, editAbrv, editMakeId, editId);
    setEditName("");
    setEditAbrv("");
    setEditMakeId("");
    setEditId("");
  };

  const deleteData = (id) => {
    modelStore.deleteData(id);
  };

  const saveData = () => {
    modelStore.createData(abrv, name);
    setName("");
    setAbrv("");
    setMakeId("");
    window.location.reload(true);
  };

  return (
    <Observer>
      {() => (
        <>
          <Container>
            <Row>
              <Col>
                <Table>
                  <thead>
                    <tr>
                      <th> Id </th>
                      <th> Name</th>
                      <th> Abrv</th>
                      <th> Make Id</th>
                    </tr>
                  </thead>
                  <tbody>
                    {modelStore.vehicleData &&
                    modelStore.vehicleData.length > 0 ? (
                      modelStore.vehicleData.map((model, index) => {
                        return (
                          <tr key={index}>
                            <td>{model.Id}</td>
                            <td>{model.Name}</td>
                            <td>{model.Abrv}</td>
                            <td> {model.MakeId} </td>
                            <td>
                              <button
                                className="delete-btn"
                                onClick={() => deleteData(model.Id)}
                              >
                                Delete
                              </button>
                              <button
                                className="edit-btn"
                                onClick={() => getSingleData(model.Id)}
                              >
                                Edit
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td>No data found</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </Col>
              <Col md="auto">
                <br />
                <label> Create new Vehicle Model</label>
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
                  <input
                  type={"text"}
                  className="form-control"
                  placeholder="Make Id"
                  value={makeId}
                  onChange={(e) => setMakeId(e.target.value)}
                ></input>
                <Col>
                  <button className="create-button" onClick={() => saveData()}>
                    Save
                  </button>
                </Col>
                <br></br>
              </Col>
            </Row>
            {showForm && (
              <Col>
                <br />
                <label> Update Vehicle Model</label>
                <br />
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Name"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                ></input>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Abrv"
                  value={editAbrv}
                  onChange={(e) => setEditAbrv(e.target.value)}
                ></input>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Make Id"
                  value={editAbrv}
                  onChange={(e) => setEditMakeId(e.target.value)}
                ></input>
                <Col>
                  <button className="create-button" onClick={() => updateData()}>
                    Save Changes
                  </button>
                </Col>
                <br></br>
              </Col>
            )}
          </Container>
        </>
      )}
    </Observer>
  );
};


export default ModelList;
