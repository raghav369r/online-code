import { createBrowserRouter } from "react-router-dom";
import Body from "../Components/Body";
import PlayGround from "../Components/PlayGround";
import Contest from "../Components/Contest";
import ProblemTable from "../Components/ProblemTable";
import Error from "../Components/Error";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import CodeEditor from "../Components/CodeEditor";
import User from "../Components/User";
import PrivateComponent from "../Components/PrivateRoutes/PrivateComponent";

const router = createBrowserRouter([
    { path: "/", element: <Home />, errorElement: <Error /> },
    { path: "/Home", element:<Home/> },
    { path: "/Problems", element: <ProblemTable /> },
    { path: "/playground", element: <PlayGround /> },
    { path: "/contest", element: <CodeEditor /> },
    { path: "/solve-problem", element: <Body /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    {path:"/code", element:<CodeEditor/>},
    {path:"/me", element:<PrivateComponent element={User}/>},
]);

export default router;