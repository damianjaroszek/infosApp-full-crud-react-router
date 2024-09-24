import { SingleInfo, SingleInfoDto } from "../types";
import { apiCall } from "../utlis/apiCall";

const updateInfoAction = async (request: Request) => {
    const formData = await request.formData();
    const id = formData.get('id')?.toString();
    const title = formData.get('title')?.toString();

    return apiCall<SingleInfo, SingleInfoDto>(`infos/${id}`, {
        method: 'PUT',
        body: {
            title: title || '',
        }
    })
}


const deleteInfoAction = async (request: Request) => {
    const formData = await request.formData(); // odczytanie jak w PHP zmiennej globalnej $_POST poprzez request i wyłuskanie id
    const id = formData.get('id')?.toString();

    return apiCall<SingleInfo>(`infos/${id}`, {
        method: 'DELETE'
    })
}

export const infoAction = async ({ request }: { request: Request }) => {
    const { method } = request;

    switch (method) {
        case 'PUT': return updateInfoAction(request);
        case 'DELETE': return deleteInfoAction(request);
    }


} 