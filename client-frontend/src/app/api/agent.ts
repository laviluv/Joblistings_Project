import axios, { AxiosResponse } from 'axios';
import { Joblisting } from '../models/joblisting';

axios.defaults.baseURL = 'https://localhost:44358/api';

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
    update: (joblisting: Joblisting) => axios.put<void>('/joblistings/${joblisting.id}', joblisting),
    delete: (id: string) => axios.delete<void>('/joblistings/${id}')
}

const agent = { Joblistings };

export default agent;