import axios from "axios";

const BASE_URL ='http://localhost:5000';
const httpApi=axios.create();

httpApi.defaults.baseURL = BASE_URL;

export function getOrders(){
    return httpApi.get(`/Order`)
        .then((response)=>response.data)
        .catch((error)=>console.log(error))
}

export function getOrdersByFilter(status){
    return httpApi.get(`/Order?deliverd=${status}`)
        .then((response)=>response.data)
        .catch((error)=>console.log(error))
}

export function getProductByFilter(groupProduct){
    return httpApi.get(`Products?group=${groupProduct}`)
        .then((response)=>response.data)
        .catch((error)=>console.log(error))
        
}

export function getProducts(){
    return httpApi.get('/Products')
        .then((response)=>response.data)
        .catch((error)=> console.log(error))

}

export function getGroupProduct(){
    return httpApi.get('/groupProducts')
        .then((response=>response.data))
        .catch((error)=>console.log(error))
}