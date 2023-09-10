import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Feed from "./components/FeedComponent/Feed";
import Header from "./components/HeaderComponent/Header";

function App() {
    let routers = createBrowserRouter([
        {
            path: "feed",
            element: <Feed />,
        },
    ]);

    return (
        <>
            <Header />
            <RouterProvider router={routers} />;
        </>
    );
}

export default App;
