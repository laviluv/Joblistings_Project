//Joblistings List functional component

import React from 'react';
import { Joblisting } from '../../../app/models/joblisting';
import { ListGroup, Button } from 'react-bootstrap';



interface Props {
    joblistings: Joblisting[];
}

//destructure the joblistings
export default function JoblistingList({ joblistings}: Props) {

    return (
        <ListGroup>
            {joblistings.map(joblisting => (
                <ListGroup.Item action key={joblisting.id} variant="light" >
                    <h5> {joblisting.title} </h5>
                    <p> {joblisting.date} </p>
                    <p> {joblisting.description} </p>
                    <Button as="input" variant="outline-dark" size="sm" type="submit" value="View" />{' '}
                </ListGroup.Item>

            ))}
        </ListGroup>


        
        )
}