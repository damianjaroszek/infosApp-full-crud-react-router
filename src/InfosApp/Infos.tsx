import { useLoaderData } from "react-router-dom"
import { SingleInfo } from "./types";
import { Info } from "./Info";

export const Infos = () => {

    const infos = useLoaderData() as SingleInfo[];

    return <div>
        <h1>infos</h1>
        <ul>
            {infos.map((info) => <Info key={info.id} info={info} />)}
        </ul>
    </div>
}