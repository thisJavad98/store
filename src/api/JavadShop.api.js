import axios from "axios";

const BASE_URL = "http://localhost:3002";
const httpApi = axios.create();

httpApi.defaults.baseURL = BASE_URL;

export async function getAdmins() {
  return await httpApi
    .get("/Users")
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export async function getOrders() {
  return await httpApi
    .get(`/Order`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export async function getOrdersByFilter(status) {
  return await httpApi
    .get(`/Order?deliverd=${status}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export async function getProductByFilter(groupProduct) {
  return await httpApi
    .get(`Products?group=${groupProduct}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export async function getProducts() {
  return await httpApi
    .get(`/Products`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export async function getGroupProduct() {
  return await httpApi
    .get("/groupProducts")
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export async function getProductGroup(group) {
  return await httpApi
    .get(`/Products?groupTitle=${group}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export async function getProductData(productName) {
  return await httpApi
    .get(`/Products?name=${productName}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export async function deleteProduct(id) {
  return await httpApi
    .delete(`/Products/${id}`)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
}

export async function editeProduct(id, data) {
  return await httpApi
    .patch(`/Products/${id}`, data)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
}

export async function postProduct(data) {
  return await httpApi
    .post(`/Products`, data)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
}

export async function uploadImage(data) {
  return await httpApi
    .post(`http://localhost:5000/upload`, data)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export async function editeInvntory(id, data) {
  return await httpApi
    .patch(`/Products/${id}`, data)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
}

export async function doneTheOrder(id, data) {
  return await await httpApi
    .patch(`/Order/${id}`, data)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
}

export async function postDataOrder(data) {
  return await httpApi
    .post(`/Order`, data)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export async function getNotCompletOrder(id, data) {
  return await httpApi
    .patch(`/Order/${id}`, data)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export async function getBasketOfFailPay(id) {
  return await httpApi
    .get(`/Order/${id}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export async function deleteFailOrder(id) {
  return await httpApi
    .delete(`/Order/${id}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}
