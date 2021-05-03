import React, { useEffect, useState } from 'react';
import axios from 'axios'; //handle http requests and components' state
import './style.css';
import { Joblisting } from '../models/joblisting';

function App() {

    //getting the jobs and managing the state through useState
    //added ts typing Joblisting
    const [jobs, setJobs] = useState<Joblisting[]>([]);

    //getting the state of jobs through the http request resonse data (jobs)
    //added ts for typing Joblisting
    useEffect(() => {
        axios.get<Joblisting[]>("https://localhost:44358/api/joblistings").then(response => {
      //      console.log(response);
            setJobs(response.data);
        })
    }, [])


    // <!--img src={logo} className="App-logo" alt="logo" /--> 
    return (
        <div className="App">
            <header className="App-header">
               
                <h3>Available Job Listings:</h3>
                <ul>

                    {jobs.map(job => (

                        <li key={job.id}>
                            {job.title}
                        </li>

                    ))}
                </ul>
                <p>
                    These are the most current joblistings from our database. Check if you are a match to any of them. Happy hunting!
        </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn More and More React
        </a>
            </header>
        </div>
    );
}

export default App;
