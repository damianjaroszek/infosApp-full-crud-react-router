import { Link, Outlet } from "react-router-dom"

export const MainLayoutInfosApp = () => {
    return <main>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Infos</Link>
                </li>
                <li>
                    <Link to='/add'>Add info</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </main>
}