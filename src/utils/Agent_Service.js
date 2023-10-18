import axios from "axios";

import { BASE_URL,API_VERSION,AGENT_POINT,AGENT_DETAIL_POINT } from "./api";

export async function AgentList() {
    let finalUrl = BASE_URL + API_VERSION() + AGENT_POINT()
    const resp = await axios.get(finalUrl)
    return resp.data
}

export async function AgentDetail(id) {
    let finalUrl = BASE_URL + API_VERSION() + AGENT_POINT() + id + AGENT_DETAIL_POINT()
    const resp = await axios.get(finalUrl)
    return resp.data
}