//Functional component Form for editing and add joblistings

import React, { ChangeEvent, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Joblisting } from '../../../app/models/joblisting';


interface Props {
    joblisting: Joblisting | undefined;
    closeForm: () => void;
    createOrEdit: (joblisting: Joblisting) => void;
}


//destructure the joblisting props
export default function JoblistingForm({ joblisting: selectedJoblisting, closeForm, createOrEdit }: Props) {


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
      //  console.log(joblisting);
        createOrEdit(joblisting);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        event.preventDefault();
        const { name, value } = event.target;
        setJoblisting({ ...joblisting, [name]: value });
        
       
    }


    return (
        <Form onSubmit={handleSubmit} autoComplete='off'>

            <Form.Group role="formTitle">
            <Form.Label>Title</Form.Label>
                <Form.Control type="text" className="form-control" placeholder="Title" value={joblisting.title} name="title" onChange={handleInputChange} />
      </Form.Group>

            <Form.Group role="formDescription">
            <Form.Label>Description</Form.Label>
                <Form.Control type="textarea" className="form-control" placeholder="Description" value={joblisting.description} name="title" onChange={handleInputChange}/>
         </Form.Group>

            <Form.Group role="formDate">
                <Form.Label>Date</Form.Label>
                <Form.Control type="text" className="form-control" placeholder="Date" value={joblisting.date} name="title" onChange={handleInputChange} />
                 </Form.Group>

            <Form.Group role="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" className="form-control" placeholder="City" value={joblisting.city} name="title" onChange={handleInputChange} />

               

            </Form.Group>
            <Button variant="outline-success" className="submitButton" type="submit">Submit</Button>
            <Button variant="outline-secondary" type="submit">Cancel</Button>
         
    </Form>
        )
}