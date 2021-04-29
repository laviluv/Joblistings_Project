import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'; //handle http requests and components' state

function App() {

    //getting the jobs and managing the state through useState
    const [jobs, setJobs] = useState([]);

    //getting the state of jobs through the http request resonse data (jobs)
    useEffect(() => {
        axios.get("https://localhost:44358/api/joblistings").then(response => {
            console.log(response);
            setJobs(response.data);
        })
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Available Job Listings:</h1>
                <ul>

                    {jobs.map((job: any) => (

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
