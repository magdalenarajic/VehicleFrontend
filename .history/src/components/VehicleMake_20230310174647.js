import React, { useEffect, useState } from "react";
import { Observer } from "mobx-react";
import makeStore from "../stores/makeStore";
import { Container, Table, Col, Row } from "react-bootstrap";

const MakeList = () => {
  const [showForm, setShowForm] = useState(false);
  const handleShow = () => setShowForm(true);

  const [name, setName] = useState("");
  const [abrv, setAbrv] = useState("");

  const [editName, setEditName] = useState("");
  const [editAbrv, setEditAbrv] = useState("");
  const [editId, setEditId] = useState("");

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    makeStore.getData();
  }, []);


  const getSingleData = (id) => {
    handleShow();
    makeStore.getSingleData(id).then((result) => {
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
    makeStore.updateData(editName, editAbrv, editId);
    setEditName("");
    setEditAbrv("");
    setEditId("");
  };

  const deleteData = (id) => {
    makeStore.deleteData(id);
  };

  const saveData = () => {
    makeStore.createData(abrv, name);
    setName("");
    setAbrv("");
    window.location.reload(true);
  };

  const handleSort = () => {
    makeStore.sortData();
  };

  const handleGetData = () => {
    makeStore.getData();
  };

  const handleFilterData = () => {
    console.log(searchInput);
    makeStore.filterDataByName(searchInput);
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
                 <button className="btn" onClick={handleFilterData}>Search</button>
                </Col>
                <Table>
                  <thead>
                    <tr>
                      <th> Id </th>
                      <th> Name</th>
                      <th> Abrv</th>
                    </tr>
                  </thead>
                  <tbody>
                    {makeStore.vehicleData &&
                    makeStore.vehicleData.length > 0 ? (
                      makeStore.vehicleData.map((make, index) => {
                        return (
                          <tr key={index}>
                            <td>{make.Id}</td>
                            <td>{make.Name}</td>
                            <td>{make.Abrv}</td>
                            <td>
                              <button
                                className="delete-btn"
                                onClick={() => deleteData(make.Id)}
                              >
                                Delete
                              </button>
                              <button
                                className="edit-btn"
                                onClick={() => getSingleData(make.Id)}
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
              <Col sm={4}>
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
                <label> Update Vehicle Make</label>
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

export default MakeList;
