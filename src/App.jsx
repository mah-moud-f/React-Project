import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Feed from "./components/FeedComponent/Feed";
import Layout from "./components/Layout/Layout";
import Profile from "./components/ProfileComponent/Profile";

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
                {
                    path: "profile",
                    element: <Profile />,
                },
            ],
        },
    ]);

    return (
        <>
            <div id="body">
                <RouterProvider router={routers} />
            </div>
        </>
    );
}

export default App;
