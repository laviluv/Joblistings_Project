import React, { useEffect, useState } from 'react';
import axios from 'axios'; //handle http requests and components' state
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.min.css';
import './style.css';
import { Joblisting } from '../models/joblisting';
import NavBar from './NavBar';
import JoblistingDashboard from '../../features/joblistings/dashboard/JoblistingDashboard';
import { ListGroup } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';


function App() {

    //getting the jobs and managing the state through useState
    //added ts typing Joblisting
    const [joblistings, setJoblistings] = useState<Joblisting[]>([]);

    //state for selected joblisting
    const [selectedJoblisting, setSelectedJoblisting] = useState<Joblisting | undefined>(undefined);

    //setting the edit state
    const [editMode, setEditMode] = useState(false);

    //getting the state of jobs through the http request resonse data (jobs)
    //added ts for typing Joblisting
    useEffect(() => {
        agent.Joblistings.list().then(response => {
      //      console.log(response);
            setJoblistings(response);
        })
    }, [])

    //function for handling the selection of a joblisting
    function handleSelectJoblisting(id: string) {
        setSelectedJoblisting(joblistings.find(x => x.id === id));
    }

    //function for cancelingSelectedJoblisting
    function handleCancelSelectedJoblisting() {
        setSelectedJoblisting(undefined);
    }

    function handleFormOpen(id?: string) {
        id ? handleSelectJoblisting(id) : handleCancelSelectedJoblisting();
        setEditMode(true);
    }

    function handleFormClose() {
        setEditMode(false);
    }

    function handleCreateOrEditJoblisting(joblisting: Joblisting) {
        //check if joblisting is created or existing getting edited
        joblisting.id ? setJoblistings([...joblistings.filter(x => x.id !== joblisting.id, joblisting)])
            //in case it doesn't exist
            : setJoblistings([...joblistings, { ...joblisting, id: uuid()}]);
        setEditMode(false);
        setSelectedJoblisting(joblisting);
    }

    function handleDeleteJoblisting(id: string) {
        setJoblistings([...joblistings.filter(x => x.id !== id)])
    }


    // <!--img src={logo} className="App-logo" alt="logo" /--> 
    return (

        <div className="App">
            <header className="App-header">
                <NavBar openForm={handleFormOpen} />
                <div className="container-md" >
                    <p style={{marginBottom: '7em'}}></p>
                    <h3>Available Job Listings</h3>
                    <div className="col-9">
                        <ListGroup>
                        <ListGroup.Item variant="info">
                                These are the most current joblistings. If you are a match to any of them, happy hunting!
                             </ListGroup.Item>
                        </ListGroup>
                 </div>
                    <JoblistingDashboard
                        joblistings={joblistings}
                        selectedJoblisting={selectedJoblisting}
                        selectJoblisting={handleSelectJoblisting}
                        cancelSelectJoblisting={handleCancelSelectedJoblisting}
                        editMode={editMode}
                        openForm={handleFormOpen}
                        closeForm={handleFormClose}
                        createOrEdit={handleCreateOrEditJoblisting}
                        deleteJoblisting={handleDeleteJoblisting}
                    />
                    
                  </div>
            </header>
        </div>
    );
}

export default App;
