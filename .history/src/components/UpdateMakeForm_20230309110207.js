import React, { useEffect, useState} from "react";
import { Observer } from "mobx-react";
import makeStore from "../stores/makeStore";
import { Container, Table, Col , Row} from "react-bootstrap";

const UpdateMake = () => {
    const [name, editName] = useState("");
    const [abrv, editAbrv] = useState("");

    const updateData = (id) => {
        makeStore.updateData(id, abrv, name);
        editName = " ";
        editAbrv = " ";
    }
    return (
        <Observer>
            {() => (
                <> <Container>
                    <Row>
                    <Col >
              <br />
          <label> Create new Vehicle Make</label>
          <br />
               <input
                  type={"text"}
                  className="form-control"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => editName(e.target.value)}
                ></input>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Abrv"
                  value={abrv}
                  onChange={(e) => editAbrv(e.target.value)}
                ></input>
              <Col><button className="create-button" onClick={() => updateData()}>Save</button></Col>
          <br></br>
          </Col>
                    </Row>
                    </Container></>
            )}
        </Observer>
    )
};