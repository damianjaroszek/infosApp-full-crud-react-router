import { Form, useLoaderData } from "react-router-dom"
import { ChangeEvent, useState } from "react";
import { SingleInfo } from "./types";

export const EditInfo = () => {
    const data = useLoaderData() as SingleInfo;
    const [title, setTitle] = useState(data.title);


    const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    // wysyłamy którąś z rzędu akcję na '/' a powiedzmy, że mamy już tak wcześniej ustawione Action. Możemy na podstawie method zrobić warunkowanie. Jeżeli mielibyśmy więcej niż jeden Action tej samej metody na przykład POST warto dodać id do akcji formularza i po niej robić warukowanie
    return (
        <div>
            <h1>Create a new info</h1>
            <Form method="PUT" action="/">
                <input type="text" name="title" id="title" value={title} onChange={handleTitle} />
                <input type="hidden" name="id" id="id" value={data.id} />
                <button type="submit">Update info</button>
            </Form>
        </div>
    )
}