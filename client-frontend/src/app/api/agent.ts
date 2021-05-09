import axios, { AxiosResponse } from 'axios';
import { Joblisting } from '../models/joblisting';
//import qs from 'qs';

//const data = { title: 'PUTS FOR TITLE' };
//const options = {
//    data: qs.stringify(data),

//};
//axios.put('https://localhost:44358/api/Joblistings/9E001D0E-B6B8-4403-19E7-08D9123991EF', options);

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}


axios.defaults.baseURL = 'https://localhost:44358/api';
axios.defaults.headers = {
   'Content-Type': 'application/json',
  //  'Content-Type': 'text/plain',
     //   'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': '*/*' 
}

axios.interceptors.response.use(async response => {
    try {
        await sleep(3000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }

})

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {

    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    delete: <T>(url: string) => axios.delete<T>(url).then(responseBody)

}

const Joblistings = {
    list: () => requests.get<Joblisting[]>('/joblistings'),
    details: (id: string) => requests.get<Joblisting>(`/joblistings/${id}`),
    create: (joblisting: Joblisting) => axios.post<void>('/joblistings', joblisting),

    update: (joblisting: Joblisting) => axios.put(`/joblistings/${joblisting.id}`, joblisting)
        .catch(function (error) {
            console.log("THIS PUT ERROR AXIOS");

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
            console.log(".........................................................");

        }),

    delete: (id: string) => axios.delete<void>(`/joblistings/${id}`)
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
            console.log("..........................................................");
            console.log("THIS DELETE ERROR AXIOS");

        })

}

const agent = { Joblistings }

export default agent;



////////FELSOKNING

//function delay(ms: number) {
//    return new Promise(resolve => setTimeout(resolve, ms));
//}

//(async () => {
//    // Do something before delay
//    console.log('before delay-------------------------------------------------------------------');




//    axios.put('https://localhost:44358/api/Joblistings/9E001D0E-B6B8-4403-19E7-08D9123991EF', 
//        //data
//        {
//            id: '9E001D0E-B6B8-4403-19E7-08D9123991EF',
//            title: 'PUTSUCCESSFULL!!!',
//            description: 'Description of the API added joblisting',
//            category: 'Test through API',
//            city: 'Testcity'
//        },

//    )
//        .then(response => {
//            console.log('Response', response.data)
//        })
//        .catch(error => {
//            console.log('Error: ', error.response.data);

//            if (error.response) {
//                // The request was made and the server responded with a status code
//                // that falls out of the range of 2xx
//                console.log(error.response.data);
//                console.log(error.response.status);
//                console.log(error.response.headers);


//            } else if (error.request) {
//                // The request was made but no response was received
//                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//                // http.ClientRequest in node.js
//                console.log(error.request);

//            } else {
//                // Something happened in setting up the request that triggered an Error
//                console.log('Error', error.message)
//            }

//        })


//    await delay(20000);

//    // Do something after
//    console.log('after delay NO 1  **************************************************************************');



  

//    axios.delete('https://localhost:44358/api/Joblistings/01FCFD55-3E71-45EE-19E9-08D9123991EF'
//    )
//        .then(response => {
//            console.log('Response', response.data)
//        })
//        .catch(error => {
//            console.log('Error: ', error.response.data);

//            if (error.response) {
//                // The request was made and the server responded with a status code
//                // that falls out of the range of 2xx
//                console.log(error.response.data);
//                console.log(error.response.status);
//                console.log(error.response.headers);


//            } else if (error.request) {
//                // The request was made but no response was received
//                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//                // http.ClientRequest in node.js
//                console.log(error.request);

//            } else {
//                // Something happened in setting up the request that triggered an Error
//                console.log('Error', error.message)
//            }

//        })


//    await delay(20000);

//    // Do something after
//    console.log('after delay NO 2  **************************************************************************');

//})();


////////FELSOKNING




