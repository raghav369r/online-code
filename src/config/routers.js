import { createBrowserRouter } from "react-router-dom";
import Body from "../Components/Body";
import PlayGround from "../Components/PlayGround";
import ProblemTable from "../Components/ProblemTable";
import Error from "../Components/Error";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import User from "../Components/User";
import PrivateComponent from "../Components/PrivateRoutes/PrivateComponent";
import Main from "../Components/contest/Main";
import Create from "../Components/contest/create/Create";
import ContestJoin from "../Components/contest/join/ContestJoin";
import Join from "../Components/contest/join/Join";
import Problems from "../Components/contest/join/Problems";
import Displaycode from "../Components/Displaycode";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Problems", element: <ProblemTable /> },
      { path: "/playground", element: <PlayGround /> },
      {
        path: "/contest",
        children: [
          { path: "", element: <Main /> },
          {
            path: "join",
            children: [
              { path: "", element: <Join /> },
              {
                path: ":userId",
                element: <PrivateComponent element={ContestJoin} />,
              },
            ],
          },
          { path: "create", element: <PrivateComponent element={Create} /> },
        ],
      },
      { path: "/solve-problem", element: <Body /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/me", element: <PrivateComponent element={User} /> },
      { path: "/problem", element: <Problems /> },
      { path: "/display", element: <Displaycode /> },
    ],
  },
]);

export default router;
