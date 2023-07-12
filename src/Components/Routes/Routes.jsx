import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Privacy from "../Home/Privacy/Privacy";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/privacy-policy',
                element: <Privacy></Privacy>
            }
        ]
    }
])

export default router;