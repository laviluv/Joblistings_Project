//Functional component Form for editing and add joblistings

import React, { ChangeEvent, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Joblisting } from '../../../app/models/joblisting';


interface Props {
    joblisting: Joblisting | undefined;
    closeForm: () => void;
}


//destructure the joblisting props
export default function JoblistingForm({ joblisting: selectedJoblisting, closeForm }: Props) {


    //populate initial state and store within component state with the help of useState hook
    const initialState = selectedJoblisting ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: ''
    }

    const [joblisting, setJoblisting] = useState(initialState);

    function handleSubmit() {
        console.log(joblisting);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setJoblisting({...joblisting, [name]: value})
    }


    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title" value={joblisting.title} name="title" onChange={handleInputChange} />
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