import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../config/store";
import router from "../config/routers";
import CheckUser from "./CheckUser";
function App() {
  return (
    <div className="font-mono">
      <Provider store={store}>
        <CheckUser />
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
