import axios, { AxiosResponse } from 'axios';
import { Joblisting } from '../models/joblisting';

axios.defaults.baseURL = 'https://localhost:44358/api';
axios.defaults.headers = {
   'Content-Type': 'application/json',
  //  'Content-Type': 'text/plain',
    'Accept': '*/*' 
}

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {

    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),

  
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody => {
        console.log('Response', responseBody.data)
    })
    .catch(e => {
        console.log('Error: ', e.responseBody.data)
    }),

delete: <T>(url: string) => axios.delete<T>(url).then(responseBody => {
    console.log('Response', responseBody.data)
})
    .catch(e => {
        console.log('Error: ', e.responseBody.data)
    })

}



        


const Joblistings = {
    list: () => requests.get<Joblisting[]>('/joblistings'),
    details: (id: string) => requests.get<Joblisting>('/joblistings/${id}'),
    create: (joblisting: Joblisting) => axios.post<void>('/joblistings', joblisting),
    // update: (joblisting: Joblisting) => axios.put<void>('/joblistings/${joblisting.id}', joblisting),
    // delete: (id: string) => axios.delete<void>('/joblistings/?id=${id}')
    // update: (joblisting: Joblisting) => axios.put<void>('/joblistings/${joblisting.id}', { params: joblisting }),

    update: (joblisting: Joblisting) => axios.put('/joblistings/${joblisting.id}', joblisting)
        .catch(function (error) {

            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);

        }),

    delete: (id: string) => axios.delete<void>('/joblistings/${id}')
}

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
    // Do something before delay
    console.log('before delay-------------------------------------------------------------------');




    axios.put('https://localhost:44358/api/Joblistings/9E001D0E-B6B8-4403-19E7-08D9123991EF', 
        //data
        {
            id: '9E001D0E-B6B8-4403-19E7-08D9123991EF',
            title: 'PUTSUCCESSFULL!!!',
            date: '2021-04-05 00:00:00.0000000',
            description: 'Description of the API added joblisting',
            category: 'Test through API',
            city: 'Testcity'
        },

    )
        .then(response => {
            console.log('Response', response.data)
        })
        .catch(error => {
            console.log('Error: ', error.response.data);

            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);


            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);

            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message)
            }

        })


    await delay(20000);

    // Do something after
    console.log('after delay NO 1  **************************************************************************');



  

    axios.delete('https://localhost:44358/api/Joblistings/01FCFD55-3E71-45EE-19E9-08D9123991EF'
    )
        .then(response => {
            console.log('Response', response.data)
        })
        .catch(error => {
            console.log('Error: ', error.response.data);

            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);


            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);

            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message)
            }

        })


    await delay(20000);

    // Do something after
    console.log('after delay NO 2  **************************************************************************');





})();




const agent = { Joblistings };

export default agent;


