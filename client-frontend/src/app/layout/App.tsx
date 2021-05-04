import React, { useEffect, useState } from 'react';
import axios from 'axios'; //handle http requests and components' state
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Joblisting } from '../models/joblisting';
import NavBar from './NavBar';
import JoblistingDashboard from '../../features/joblistings/dashboard/JoblistingDashboard';
import { ListGroup } from 'react-bootstrap';

function App() {

    //getting the jobs and managing the state through useState
    //added ts typing Joblisting
    const [joblistings, setJoblistings] = useState<Joblisting[]>([]);

    //getting the state of jobs through the http request resonse data (jobs)
    //added ts for typing Joblisting
    useEffect(() => {
        axios.get<Joblisting[]>("https://localhost:44358/api/joblistings").then(response => {
      //      console.log(response);
            setJoblistings(response.data);
        })
    }, [])


    // <!--img src={logo} className="App-logo" alt="logo" /--> 
    return (

        <div className="App">
            <header className="App-header">
                <NavBar />
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
                    <JoblistingDashboard joblistings={ joblistings } />
                    
                  </div>
            </header>
        </div>
    );
}

export default App;
