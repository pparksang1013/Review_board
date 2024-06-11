import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReviewPage } from "./pages/ReviewPage";
import "./style/index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ReviewPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
