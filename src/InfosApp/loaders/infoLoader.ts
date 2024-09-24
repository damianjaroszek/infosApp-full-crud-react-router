import { Params } from "react-router-dom";
import { SingleInfo } from "../types";
import { apiCall } from "../utlis/apiCall";

export const infoLoader = async ({ params }: { params: Params<'id'> }) => {
    const { id } = params;
    return apiCall<SingleInfo>(`infos/${id}`);

}