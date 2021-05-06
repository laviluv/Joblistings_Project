//Dashboard functional component

import React from 'react';
import { Joblisting } from '../../../app/models/joblisting';
import JoblistingDetails from '../details/JoblistingDetails';
import JoblistingList from './JoblistingList';
import JoblistingForm from '../form/JoblistingForm';

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
                <div className="col-3">
                    {joblistings[0] &&
                        <JoblistingDetails joblisting={joblistings[0]} />}
                    <JoblistingForm />
                </div>
            </div>
        </div>
    )
}