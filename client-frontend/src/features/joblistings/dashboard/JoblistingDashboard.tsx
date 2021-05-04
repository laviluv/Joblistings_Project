//Dashboard functional component

import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Joblisting } from '../../../app/models/joblisting';

interface Props {
    joblistings: Joblisting[];
}

//destructure the joblisting to get access to the props
export default function JoblistingDashboard({ joblistings } : Props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <ListGroup>
                        {joblistings.map(joblisting => (
                            <ListGroup.Item key={joblisting.id}>
                                {joblisting.title}
                        </ListGroup.Item>    

                        ))}
                    </ListGroup>
                </div>
            </div>
        </div>
    )
}