import axios from "axios";

import { BASE_URL,API_VERSION,BLOGS_END_POINT } from "./api";

export async function BLogsList() {
    let finalUrl = BASE_URL + API_VERSION() + BLOGS_END_POINT()
    const resp = await axios.get(finalUrl)
    return resp.data
}

export async function BLogsDetail(id) {
    let finalUrl = BASE_URL + API_VERSION() + BLOGS_END_POINT() + id + `/`
    const resp = await axios.get(finalUrl)
    return resp.data
}