import React, { useState, useEffect} from "react";
import { Observer } from "mobx-react";
import makeStore from "../stores/makeStore";
import { Container, Col, Row} from "react-bootstrap";

const UpdateMake = (id) => {
    const [name, editName] = useState("");
    const [abrv, editAbrv] = useState("");

    useEffect((id) => {
        makeStore.getSingleData(id);
        
      }, []);


    const updateData = () => {
        makeStore.updateData(id, abrv, name);
        editName(" ");
        editAbrv(" ");
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

export default UpdateMake;