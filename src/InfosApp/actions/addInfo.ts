import { useActionData } from "react-router-dom";
import { SingleInfo, SingleInfoDto } from "../types";
import { apiCall } from "../utlis/apiCall";

export const addInfoAction = async ({ request }: { request: Request }) => {
    const formData = await request.formData(); // formData to jest jak w PHP superglobalna zmienna $_GET i $_POST
    const title = formData.get('title')?.toString(); // wyłuskujemy z superglobelnej $_POST 

    return apiCall<SingleInfo, SingleInfoDto>('infos', { // Response - odpowiedź, Payload - załącznik do request
        method: 'POST',
        body: {
            title: title || '',
        }
    })

} 