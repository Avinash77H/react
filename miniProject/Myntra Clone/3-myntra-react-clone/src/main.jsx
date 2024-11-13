import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./routes/App.jsx";
import Bag from "./routes/Bag.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import {Provider} from 'react-redux'
import myntraStore from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> },
    ],
  },
  
],
{
  future: {
    v7_startTransition: true,               // Wraps state updates in startTransition
    v7_skipActionErrorRevalidation: true,    // Changes revalidation behavior after 4xx/5xx action responses
    v7_relativeSplatPath: true,              // Changes route resolution behavior for splat routes
    v7_fetcherPersist: true,                 // Changes fetcher persistence behavior
    v7_normalizeFormMethod: true,            // Normalizes formMethod fields to uppercase
    v7_partialHydration: true,    
  },
}
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    </Provider>
  </StrictMode>
);
