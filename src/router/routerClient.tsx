import { createBrowserRouter } from "react-router";
import { Main } from "../pages";

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {index: true, Component: Main}
        ]
    }
])

export default router;