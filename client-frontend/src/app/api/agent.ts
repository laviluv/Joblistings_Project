import axios, { AxiosResponse } from 'axios';
import { Joblisting } from '../models/joblisting';

axios.defaults.baseURL = 'https://localhost:44358/api';
axios.defaults.headers = {
    'Content-Type': 'application/json',
    'Accept': '*/*' 
}

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {

    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: { }) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: { }) => axios.put<T>(url, body).then(responseBody),
    delete: <T>(url: string) => axios.delete<T>(url).then(responseBody)
}

const Joblistings = {
    list: () => requests.get<Joblisting[]>('/joblistings'),
    details: (id: string) => requests.get<Joblisting>('/joblistings/${id}'),
    create: (joblisting: Joblisting) => axios.post<void>('/joblistings', joblisting),
    update: (joblisting: Joblisting) => axios.put<void>('/joblistings/${id}', joblisting),
    delete: (id: string) => axios.delete<void>('/joblistings/${id}')
}

//let data = {
//    "title": "TESTREACTAXIOS!!!",
//    "date": "05-08-2020",
//    "description": "Description of the API added joblisting",
//    "category": "Test through API",
//    "city": "Testcity"
//    }

//axios.post('https://localhost:44358/api/Joblistings/', { "body": data
//    })
//    .then(response => {
//        console.log('Response', response.data)
//    })
//    .catch(e => {
//        console.log('Error: ', e.response.data)
//    })


//axios.put('https://localhost:44358/api/Joblistings/CE0D5773-A4C9-4922-92EC-1376F655CD35', {
//    "body": data})
//    .then(response => {
//        console.log('Response', response.data)
//    })
//    .catch(e => {
//        console.log('Error: ', e.response.data)
//    })


//axios.delete('https://localhost:44358/api/Joblistings/3363A6C7-9C11-484C-8D3C-454F15E5C716')
//    .then(response => {
//        console.log('Response', response.data)
//    })
//    .catch(e => {
//        console.log('Error: ', e.response.data)
//    })

const agent = { Joblistings };

export default agent;