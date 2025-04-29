import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "./App.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Social1 from "./components/Social/Social1.jsx";
import Forlogin from "./components/Animation/Forlogin.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/welcome" element={<Forlogin />} />
      <Route path="/feed" element={<Social1 />} />
      <Route path="/" element={<App />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
