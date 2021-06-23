import axios from "axios";

const BASE_URL ='http://localhost:5000';
const httpApi=axios.create();

httpApi.defaults.baseURL = BASE_URL;

export function getProducts(){

    return httpApi.get(`/Products`)
        .then((response)=> console.log(response.data))
        .catch((error)=> console.log(error))

}