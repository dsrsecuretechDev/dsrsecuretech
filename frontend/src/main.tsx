import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import RoutesApp from "./app/auth/routes.tsx";
import { Suspense } from "react";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={RoutesApp} />
    </Suspense>
  </React.StrictMode>
);
