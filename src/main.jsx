import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./Pages/Home/Home.jsx";
import Service from "./Pages/Service/Service";
import Navbar from "./global/Navbar";
import Footer from "./global/Footer";

const queryClient = new QueryClient();

const browserRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Footer />
          </>
        }
      >
        <Route index element={<Home />} />
        <Route path="/service" element={<Service />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={browserRouter} />
    </QueryClientProvider>
  </React.StrictMode>
);
