import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayoutInfosApp } from "./InfosApp/MainLayoutInfosApp";
import { Infos } from "./InfosApp/Infos";
import { infosLoader } from "./InfosApp/loaders/infosLoader";
import { AddInfo } from "./InfosApp/AddInfo";
import { addInfoAction } from "./InfosApp/actions/addInfo";
import { ErrorPage } from "./InfosApp/ErrorPage";
import { EditInfo } from "./InfosApp/EditInfo";
import { infoLoader } from "./InfosApp/loaders/infoLoader";
import { infoAction } from "./InfosApp/actions/deleteInfo";
import { ProtectedRoute } from "./InfosApp/ProtectedRoute";
import { AccessDenied } from "./InfosApp/AccessDenied";


const router = createBrowserRouter([
    {
        element: <MainLayoutInfosApp />,
        errorElement: <ErrorPage />,
        action: infoAction,
        children: [
            {
                path: '',
                element: <Infos />,
                loader: infosLoader,
                //action: deleteInfoAction // jeżeli tu zostawimy akcję dostaniemy błąd 'Error: You made a DELETE request to "/" but did no…te "0", so there is no way to handle the request.', bo akcja nie kieruje na żaden adres w sensie jest '' i musymy ją wynieść na najwyższy poziom.
            },
            {
                path: 'denied',
                element: <AccessDenied />
            },
            {
                element: <ProtectedRoute redirect='/denied' />,
                children: [
                    {
                        path: 'add',
                        element: <AddInfo />,
                        action: addInfoAction
                    },
                    {
                        path: ':id',
                        element: <EditInfo />,
                        loader: infoLoader
                    }
                ]
            }

        ]
    }
])

export const App = () => {
    return (
        <RouterProvider router={router} />
    );
}