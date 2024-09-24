import { Link, useSubmit } from "react-router-dom";
import { SingleInfo } from "./types"

type InfoProps = {
    info: SingleInfo;
}

export const Info = ({ info }: InfoProps) => {
    const submit = useSubmit(); // wysłanie danych / formularza do konktetnej akcji

    const handleDelete = () => {
        submit({
            id: info.id, // to zostanie wrzucone w FormData --> będzie zawierało identyfikator do usunięcie (coś jak globalna zmienna w PHP $_POST)
        }, {
            action: '/',
            method: 'DELETE',
        }
        )
    }

    return (
        <li>
            <h2>{info.title}</h2>
            <button onClick={handleDelete}>Delete</button>
            <Link to={info.id}>Edit</Link>
        </li>
    )
}