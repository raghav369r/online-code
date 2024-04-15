import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "../config/store";
import router from "../config/routers";
import CheckUser from "./CheckUser";
function App() {
  return (
    <div className="font-mono bg-light-bg">
      <ToastContainer/>
      <Provider store={store}>
        <CheckUser />
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
