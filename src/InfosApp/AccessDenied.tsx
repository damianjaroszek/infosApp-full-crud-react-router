import { Link } from "react-router-dom"

export const AccessDenied = () => {
    return (
        <div>
            <h1>Sorry, you have no access to this part of the application.</h1>
            <Link to='/'>Go to homepage</Link>
        </div>
    )
}