//Functional component Form for editing and add joblistings

import React, { ChangeEvent, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Joblisting } from '../../../app/models/joblisting';


interface Props {
    joblisting: Joblisting | undefined;
    closeForm: () => void;
    createOrEdit: (joblisting: Joblisting) => void;
    submitting: boolean;
}


//destructure the joblisting props
export default function JoblistingForm({ joblisting: selectedJoblisting, closeForm, createOrEdit, submitting }: Props) {


    //populate initial state and store within component state with the help of useState hook
    const initialState = selectedJoblisting ?? {
        id: '',
        title: '',
        description: '',
        date: '',
        category: '',
        city: ''
    }

    const [joblisting, setJoblisting] = useState(initialState);

    function handleSubmit() {
        console.log(joblisting);
        createOrEdit(joblisting);




    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
       //  event.preventDefault();
        const { name, value } = event.target;
        setJoblisting({ ...joblisting, [name]: value });
       
    }


    return (
        <Form onSubmit={handleSubmit} autoComplete='off'>

            {/*<Form.Group controlId="formId">*/}
            {/*    <Form.Label>ID</Form.Label>*/}
            {/*    <Form.Control type="text" className="form-control" placeholder="Id" value={joblisting.id} name="id" onChange={handleInputChange} />*/}
            {/*</Form.Group>*/}

                <Form.Group controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                <Form.Control type="text" className="form-control" placeholder="Title" value={joblisting.title} name="title" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                <Form.Control type="textarea" className="form-control" placeholder="Description" value={joblisting.description} name="description" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group controlId="formDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" className="form-control" placeholder="Date" value={joblisting.date} name="date" onChange={handleInputChange} />
                </Form.Group>

            <Form.Group controlId="formCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" className="form-control" placeholder="Category" value={joblisting.category} name="category" onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" className="form-control" placeholder="City" value={joblisting.city} name="city" onChange={handleInputChange} />
            </Form.Group>

            <Button variant="outline-success" type="submit">Submit</Button>
            <Button onClick={closeForm} variant="outline-secondary" type="submit">Cancel</Button>
    </Form>
        )
}