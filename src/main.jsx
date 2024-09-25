import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./features/store.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderContextProvider from "./Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <OrderContextProvider>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter >
          <ToastContainer
            style={{
              whiteSpace: "normal",
              "max-width": "40vw",
              display: "inline-block",
              width: "auto",
            }}
          />
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
    </OrderContextProvider>
  </React.StrictMode>
);
