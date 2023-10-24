import axios from "axios";

import { BASE_URL,API_VERSION,PROPERTY_END_POINT,PROPERTY_DETAIL_END_POINT, PROPERTY_STATUS_END_POINT } from "./api";

export async function RentPropertiesList(value){
    let finalUrl = BASE_URL + API_VERSION() + PROPERTY_END_POINT() + value
    const resp = await axios.get(finalUrl)
    return resp.data
}

export async function SalePropertiesList(value){
    let finalUrl = BASE_URL + API_VERSION() + PROPERTY_END_POINT() + value
    const resp = await axios.get(finalUrl)
    return resp.data
}

export async function PropertyStatus(ids){
    let finalUrl = BASE_URL + API_VERSION() + PROPERTY_END_POINT() + ids + PROPERTY_STATUS_END_POINT();
    const resp = await axios.post(finalUrl)
    return resp
}