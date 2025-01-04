// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router.jsx";
import { Provider} from "react-redux";
import { store } from "./redux/store.js";

// styles
import "./index.css";
import 'sweetalert2/src/sweetalert2.scss'

createRoot(document.getElementById("root")).render(
  <Provider store={store} >
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
