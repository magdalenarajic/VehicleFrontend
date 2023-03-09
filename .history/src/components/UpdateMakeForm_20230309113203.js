import React, { useState} from "react";
import { Observer } from "mobx-react";
import makeStore from "../stores/makeStore";
import { Form, Button} from "react-bootstrap";

const UpdateMake = () => {
    const [name, editName] = useState("");
    const [abrv, editAbrv] = useState("");

    const updateData = (id) => {
        makeStore.updateData(id, abrv, name);
        editName(" ");
        editAbrv(" ");
    }
    return (
        <Observer>
            {() => (
              <Form id="updateForm">
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>Select Field</Form.Label>
                  <Form.Control as="select">
                      <option>Field Name</option>
                      <option value='id'>Id</option>
                      <option value='name'>Name</option>
                      <option value='abrv'>Abrv</option>
                  </Form.Control>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Enter new value</Form.Label>
                  <Form.Control placeholder="name" value={name} onChange={editName} />
              </Form.Group>
              <Button variant="outline-info" onClick={updateData}>
                  Update
      </Button>
          </Form>
            )}
        </Observer>
    )
};

export default UpdateMake;