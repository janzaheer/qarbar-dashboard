import axios from "axios";

import { BASE_URL,API_VERSION,PROPERTY_END_POINT,PROPERTY_DETAIL_END_POINT } from "./api";

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