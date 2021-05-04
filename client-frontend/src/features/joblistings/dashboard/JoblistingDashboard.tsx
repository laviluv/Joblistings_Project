//Dashboard functional component

import React from 'react';
import { Joblisting } from '../../../app/models/joblisting';
import JoblistingList from './JoblistingList';

interface Props {
    joblistings: Joblisting[];
}

//destructure the joblisting to get access to the props
export default function JoblistingDashboard({ joblistings } : Props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-9">

                    <JoblistingList joblistings={ joblistings}/>
                </div>
            </div>
        </div>
    )
}