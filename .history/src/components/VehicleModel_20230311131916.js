import React, { useEffect, useState } from "react";
import { Observer } from "mobx-react";
import modelStore from "../stores/modelStore";
import { Container, Table, Col, Row, CloseButton, Form } from "react-bootstrap";
import makeStore from "../stores/makeStore";

const ModelList = () => {
  const [showForm, setShowForm] = useState(false);
  const handleShow = () => setShowForm(true);

  const [error, setErrorForm] = useState(false);
  const handleError = () => setErrorForm(true);

  const [name, setName] = useState("");
  const [abrv, setAbrv] = useState("");
  const [makeId, setMakeId] = useState("");

  const [editName, setEditName] = useState("");
  const [editAbrv, setEditAbrv] = useState("");
  const [editId, setEditId] = useState("");

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    modelStore.getData();
    makeStore.getData();
  }, []);

  const getSingleData = (id) => {
    handleShow();
    modelStore.getSingleData(id).then((result) => {
      setEditName(result.data.Name);
      setEditAbrv(result.data.Abrv);
      setEditId(result.data.Id);
    });
  };

  const updateData = () => {
    const data = {
      name: editName,
      abrv: editAbrv,
    };
    const id = {
      Id: editId,
    };
    console.log(data, id);
    modelStore.updateData(editName, editAbrv, editId);
    setEditName("");
    setEditAbrv("");
    setEditId("");
  };

  const deleteData = (id) => {
    modelStore.deleteData(id);
  };

  const saveData = () => {
    if (abrv === "" && name === "" && makeId === "") {
      handleError();
    } else {
      modelStore.createData(abrv, name, makeId);
      console.log(abrv,name,makeId);
      setName("");
      setAbrv("");
      setMakeId("");
    }
  };

  const handleSort = () => {
    modelStore.sortData();
  };

  const handleGetData = () => {
    modelStore.getData();
  };

  const handleFilterData = () => {
    console.log(searchInput);
    modelStore.filterDataByName(searchInput);
    setSearchInput("");
  };

  return (
    <Observer>
      {() => (
        <>
          <Container>
            <Row>
              <Col sm={8}>
                <Col>
                  {" "}
                  <br />
                  <button
                    variant="outline-dark"
                    className="btn "
                    onClick={() => handleSort()}
                  >
                    Sort by Name Ascending
                  </button>
                  <button
                    variant="outline-dark"
                    className="btn"
                    onClick={() => handleGetData()}
                  >
                    Sort by Id Ascending
                  </button>
                </Col>
                <Col>
                  <br />
                  <input
                    type={"text"}
                    placeholder="Search here"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                  <button className="btn" onClick={handleFilterData}>
                    Search
                  </button>
                </Col>
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
                                className="btn btn-dark"
                                onClick={() => deleteData(model.Id)}
                                style={{
                                  marginRight: "10px",
                                }}
                              >
                                Delete
                              </button>
                              <button
                                className="btn btn-dark"
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
              <Col
                sm={4}
                style={{
                  height: "95%",
                  border: "1px solid black",
                  alignSelf: "center",
                  padding: "20px",
                  marginTop: "90px",
                }}
              >
                <br />
                <label> Create new Vehicle Model</label>
                <br />
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                ></input>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Abrv"
                  value={abrv}
                  onChange={(e) => setAbrv(e.target.value)}
                  required
                ></input>
                
                <Form.Select type={"text"} className="form-control">
                  <option>Select Make</option>
                  {makeStore.vehicleData && makeStore.vehicleData.length > 0 ? (
                    makeStore.vehicleData.map((make) => {
                      return (
                        <option 
                       value={make.Id} key={make.Id} onChange={(e) => console.log(e.target.value)} >
                          {make.Id} {make.Name}
                        </option>
                      );
                    })
                  ) : (
                    <option> No Makes</option>
                  )}
                </Form.Select>
                <Col>
                  <button
                    className="create-button"
                    onClick={() => saveData()}
                    style={{
                      marginTop: "10px",
                    }}
                  >
                    Save
                  </button>
                </Col>
                {error && (
                  <Col>
                    <label> Please enter name and abrv!</label>
                  </Col>
                )}
                <br></br>
              </Col>
            </Row>
            {showForm && (
              <Col
                style={{
                  height: "95%",
                  border: "1px solid black",
                  alignSelf: "center",
                  padding: "20px",
                }}
              >
                <Col>
                  <CloseButton
                    style={{ float: "right" }}
                    variant="dark"
                    onClick={() => setShowForm(false)}
                  />
                  <br />
                </Col>
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
                <Col>
                  <button
                    className="create-button"
                    style={{
                      marginTop: "10px",
                    }}
                    onClick={() => updateData()}
                  >
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
