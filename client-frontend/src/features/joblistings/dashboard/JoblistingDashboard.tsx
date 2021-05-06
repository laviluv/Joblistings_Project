//Dashboard functional component

import React from 'react';
import { Joblisting } from '../../../app/models/joblisting';
import JoblistingDetails from '../details/JoblistingDetails';
import JoblistingList from './JoblistingList';
import JoblistingForm from '../form/JoblistingForm';

interface Props {
    joblistings: Joblisting[];
    selectedJoblisting: Joblisting | undefined;
    selectJoblisting: (id: string) => void;
    cancelSelectJoblisting: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;

}

//destructure the joblisting to get access to the props
export default function JoblistingDashboard({ joblistings, selectedJoblisting, selectJoblisting, cancelSelectJoblisting,
    editMode, openForm, closeForm }: Props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-9">

                
                    <JoblistingList
                        joblistings={joblistings}
                        selectJoblisting={selectJoblisting} />
                </div>
                <div className="col-3">
                    {selectedJoblisting &&
                        <JoblistingDetails
                        joblisting={selectedJoblisting}
                        cancelSelectJoblisting={cancelSelectJoblisting}
                        openForm={openForm} />}
                    {editMode &&
                    <JoblistingForm closeForm={closeForm} joblisting={selectedJoblisting} />}
                </div>
            </div>
        </div>
    )
}