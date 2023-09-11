import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Feed from "./components/FeedComponent/Feed";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login component/Login";
import Signin from "./components/SigninComponent/Signin";
import Profile from "./components/ProfileComponent/Profile";
import Friend from "./components/FreindRequestComponent/friend";

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
                    path: 'login',
                    element: <Login/>
                },
                {
                    path: 'siginin',
                    element:<Signin/>
                }
                {
                    path: "profile",
                    element: <Profile />,
                },
                {
                    path: "friend",
                    element: <Friend />,
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
