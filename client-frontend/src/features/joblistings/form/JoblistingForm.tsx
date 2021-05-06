//Functional component Form for editing and add joblistings

import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Joblisting } from '../../../app/models/joblisting';


interface Props {
    joblisting: Joblisting | undefined;
    closeForm: () => void;
}


//destructure the joblisting props
export default function JoblistingForm({ joblisting, closeForm }: Props) {
    return (
    <Form>
        <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Title" />
        </Form.Group>

        <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="textarea" placeholder="Description" />
        </Form.Group>
        
        <Button variant="outline-success" type="submit">
                Submit
  </Button>
            <Button variant="outline-secondary" type="submit">
                Cancel
  </Button>
    </Form>
        )
}