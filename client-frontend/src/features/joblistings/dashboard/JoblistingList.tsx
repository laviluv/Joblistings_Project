//Joblistings List functional component

import React from 'react';
import { Joblisting } from '../../../app/models/joblisting';
import { ListGroup, Button } from 'react-bootstrap';



interface Props {
    joblistings: Joblisting[];
    selectJoblisting: (id: string) => void;
    deleteJoblisting: (id: string) => void;
    submitting: boolean;
}

//destructure the joblistings
export default function JoblistingList({ joblistings, selectJoblisting, deleteJoblisting, submitting }: Props) {

    return (
        <ListGroup>
            {joblistings.map(joblisting => (
                <ListGroup.Item action key={joblisting.id} variant="light" >
                    <h5> {joblisting.title} </h5>
                    <p> {joblisting.date} </p>
                    <p> {joblisting.city} </p>
                    <p> {joblisting.category} </p>
                    <Button className="float-right" as="input" onClick={() => selectJoblisting(joblisting.id)} variant="outline-dark"
                        size="sm" type="submit" value="View" />{' '}
                    <Button className="float-right" as="input" onClick={() => deleteJoblisting(joblisting.id)} variant="outline-danger"
                        size="sm" type="submit" value="Delete" />{' '}
                </ListGroup.Item>

            ))}
        </ListGroup>


        
        )
}