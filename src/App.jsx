import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Feed from "./components/FeedComponent/Feed";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login component/Login";
import Signin from "./components/SigninComponent/Signin";
import Profile from "./components/ProfileComponent/Profile";
import Friend from "./components/FreindRequestComponent/friend";
import Video from "./components/VideoComponent/Video";
import NotFound from "./components/NotFound/NotFound";

function App() {
    let routers = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
               {index:true,element:<Login/>} ,
                {
                    path: "feed",
                    element: <Feed />,
                },
                {
                    path: "login",
                    element: <Login />,
                },
                {
                    path: "siginin",
                    element: <Signin />,
                },
                {
                    path: "profile",
                    element: <Profile />,
                },
                {
                    path: "friend",
                    element: <Friend />,
                },
                {
                    path: "video",
                    element: <Video/>,
                }

              
            ],
        },

        {
            path: "*",
            element: <NotFound/>,
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
