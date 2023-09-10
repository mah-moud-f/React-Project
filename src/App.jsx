import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Feed from "./components/FeedComponent/Feed";
import Header from "./components/HeaderComponent/Header";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login component/Login";
import Signin from "./components/SigninComponent/Signin";
// import { BrowserRouter } from "react-router-dom";

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
                    path: '/login',
                    element: <Login/>
                },
                {
                    path: '/siginup',
                    element:<Signin/>
                }
            ],
        },
    ]);

    return (
        <>
            
            <RouterProvider router={routers} />
                <Login />
                
          
        </>
    );
}

export default App;
