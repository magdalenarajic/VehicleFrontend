import React, { useEffect, useState } from "react";
import { Observer } from "mobx-react";
import makeStore from "../stores/makeStore";
import {
  Container,
  Table,
  Col,
  Row,
  CloseButton,
  Pagination,
} from "react-bootstrap";

const MakeList = () => {
  const [showForm, setShowForm] = useState(false);
  const handleShow = () => setShowForm(true);

  const [error, setErrorForm] = useState(false);
  const handleError = () => setErrorForm(true);

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
    if (abrv === "" && name === "") {
      handleError();
    } else {
      makeStore.createData(abrv, name);
      setName("");
      setAbrv("");
      window.location.reload(true);
    }
  };

  const handleSort = () => {
    makeStore.sortData();
  };

  const handleGetData = () => {
    makeStore.getData();
  };

  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 4;

  const handlePagedData = (pageNumber, pageSize) => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber);
      makeStore.pageSortAndFilterData(pageNumber, pageSize, searchInput);
    }
  };

  const handleFilterData = () => {
    console.log(searchInput);
    makeStore.pageSortAndFilterData(pageNumber, pageSize, searchInput);
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
                                className="btn btn-dark"
                                onClick={() => deleteData(make.Id)}
                                style={{
                                  marginRight: "10px",
                                }}
                              >
                                Delete
                              </button>
                              <button
                                className="btn btn-dark"
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
                <Col>
                  <Pagination>
                    <Pagination.Item onClick={() => handleGetData()}>
                      All Makes
                    </Pagination.Item>
                    <Pagination.Item
                      value={pageNumber}
                      onClick={() => handlePagedData(pageNumber-1, pageSize)}
                    >
                      Previous
                    </Pagination.Item>
                    <Pagination.Item 
                      value={pageNumber}
                      onClick={() => handlePagedData(1, pageSize)}
                    >
                      {1}
                    </Pagination.Item>
                    <Pagination.Item
                      value={pageNumber}
                      onClick={() => handlePagedData(2, pageSize)}
                    >
                      {2}
                    </Pagination.Item>
                    <Pagination.Item
                      value={pageNumber}
                      onClick={() => handlePagedData(3, pageSize)}
                    >
                      {3}
                    </Pagination.Item>
                    <Pagination.Item
                      value={pageNumber}
                     >
                      ...
                    </Pagination.Item>
                    <Pagination.Item
                      value={pageNumber}
                      onClick={() => handlePagedData(pageNumber+1, 4)}
                    >
                      Next
                    </Pagination.Item>
                  </Pagination>
                </Col>
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
                <label> Create new Vehicle Make</label>
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

export default MakeList;