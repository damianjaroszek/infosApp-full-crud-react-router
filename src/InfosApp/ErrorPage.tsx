import { Link } from "react-router-dom"

export const ErrorPage = () => {
    return <div>
        <h1>Error!</h1>
        <p>Something went wrong.</p>
        <Link to='/'>Go to homepage</Link>
    </div>
}