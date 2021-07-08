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
    return httpApi.get(`/Products`)
        .then((response)=>response.data)
        .catch((error)=> console.log(error))

}

export function getGroupProduct(){
    return httpApi.get('/groupProducts')
        .then((response=>response.data))
        .catch((error)=>console.log(error))
}

export function getProductGroup(group){
    return httpApi.get(`/Products?groupTitle=${group}`)
        .then((response)=>response.data)
        .catch((error)=>console.log(error))
}

export function getProductData(productName){
    return httpApi.get(`/Products?name=${productName}`)
        .then((response)=>response.data)
        .catch((error)=>console.log(error))
}

export function deleteProduct(id){
    return httpApi.delete(`/Products/${id}`)
        .then((response)=>console.log(response.data))
        .catch((error)=>console.log(error))
}

export function editeProduct(id , data){
    return httpApi.patch(`/Products/${id}`,data)
        .then((response)=>console.log(response.data))
        .catch((error)=>console.log(error))
}
export function postProduct(data){
    return httpApi.post(`/Products`, data)
        .then((response)=>console.log(response.data))
        .catch((error)=>console.log(error))
}
