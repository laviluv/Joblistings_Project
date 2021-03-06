//Details functional component

import React from 'react';
import { Card, ButtonGroup, Button } from 'react-bootstrap';
import { Joblisting } from '../../../app/models/joblisting';



interface Props {
    joblisting: Joblisting;
    cancelSelectJoblisting: () => void;
    openForm: (id: string) => void;
}

//destructure the joblistings
export default function JoblistingDetails({ joblisting, cancelSelectJoblisting, openForm }: Props) {

    return (

        <Card style={{ width: '28rem' }}>
          <Card.Body>
                <Card.Title>
                    <i className="bi bi-info-circle-fill"></i>
                    {joblisting.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{joblisting.date}  ({joblisting.category})</Card.Subtitle>
                <Card.Text>
                    {joblisting.city} -
                        {joblisting.description} 
                </Card.Text>
                <ButtonGroup>
                    <Button className="float-right" as="input" onClick={() => openForm(joblisting.id)} variant="outline-success" size="sm" type="submit" value="Edit" />{' '}
                    <Button className="float-right" as="input" onClick={cancelSelectJoblisting} variant="outline-secondary" size="sm" type="submit" value="Cancel" />{' '}
                </ButtonGroup>

          </Card.Body>
</Card>


       
         
                //    



    )
}