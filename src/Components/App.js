import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../config/store";
import Body from "./Body";
import PlayGround from "./PlayGround";
import Contest from "./Contest";
import Header from "./Header";
import ProblemTable from "./ProblemTable";
import Error from "./Error";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  // const [night, setNight] = useState(false);
  const router = createBrowserRouter([
    { path: "/", element: <Home />, errorElement: <Error /> },
    { path: "/Home", element: <h1>Home</h1> },
    { path: "/Problems", element: <ProblemTable /> },
    { path: "/playground", element: <PlayGround /> },
    { path: "/contest", element: <Contest /> },
    { path: "/solve-problem", element: <Body /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
