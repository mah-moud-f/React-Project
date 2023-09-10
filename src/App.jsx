import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Feed from "./components/FeedComponent/Feed";
import Header from "./components/HeaderComponent/Header";
import Layout from "./components/Layout/Layout";

function App() {
    let routers = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "feed",
                    element: <Feed />,
                },
            ],
        },
    ]);

    return (
        <>
            <RouterProvider router={routers} />
        </>
    );
}

export default App;
