//Details functional component

import React from 'react';
import { Card, ButtonGroup, Button } from 'react-bootstrap';
import { Joblisting } from '../../../app/models/joblisting';



interface Props {
    joblisting: Joblisting;
}

//destructure the joblistings
export default function JoblistingDetails({ joblisting }: Props) {

    return (

        <Card style={{ width: '28rem' }}>
          <Card.Body>
                <Card.Title>
                    <i className="bi bi-info-circle-fill"></i>
                    {joblisting.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{joblisting.date}</Card.Subtitle>
            <Card.Text>
                        {joblisting.description} 
                </Card.Text>
                <ButtonGroup>
                <Button className="float-right" as="input" variant="outline-success" size="sm" type="submit" value="Edit" />{' '}
                <Button className="float-right" as="input" variant="outline-secondary" size="sm" type="submit" value="Cancel" />{' '}
                </ButtonGroup>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
</Card>


       
                //     <p> {joblisting.category} </p>
                //    



    )
}