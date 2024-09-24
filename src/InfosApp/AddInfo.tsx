import { Form, useActionData } from "react-router-dom"
import { SingleInfo } from "./types";
import { ChangeEvent, useEffect, useState } from "react";

export const AddInfo = () => {
    const data = useActionData() as SingleInfo | undefined;
    const [title, setTitle] = useState('');

    useEffect(() => {
        setTitle(''); // czyszczenie formularza jest efektem ubocznym
    }, [data])

    const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    return (
        <div>
            <h1>Create a new info</h1>
            <Form method="POST">
                <input type="text" name="title" id="title" value={title} onChange={handleTitle} />
                <button type="submit">Add info</button>
            </Form>
            {data ? <p>Infos {data.title} added</p> : null}
        </div>
    )
}