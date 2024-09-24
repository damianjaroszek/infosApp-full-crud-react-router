import { SingleInfo } from "../types";
import { apiCall } from "../utlis/apiCall"

export const infosLoader = async () => {
    return apiCall<SingleInfo[]>('infos');

}