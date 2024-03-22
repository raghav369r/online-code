import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../config/store";
import router from "../config/routers";

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router}></RouterProvider>
        </Provider>
    );
}

export default App;
