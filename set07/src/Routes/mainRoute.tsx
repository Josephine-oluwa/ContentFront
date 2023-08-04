import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/static/Layout"
import HomeScreen from "../pages/HomeScreen"

import CreateArticle from "../pages/createArticle"
import DetailScreen from "../pages/DetailScreen"

export const mainRoute = createBrowserRouter ([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomeScreen/>
            },
            {
                index: true,
                path: "/CreateArticle",
                element: <CreateArticle/>
            },
            {
                index: true,
                path: "/:articleID/article",
                element: <DetailScreen/>
            },
        ]
    }
])