import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
  <Auth0Provider domain="dev-s8jztod54bqikx4t.us.auth0.com" clientId="2JnMe853vgUoUbZBUgez1vIjoyiAYjxj"  authorizationParams={{
    redirect_uri: window.location.origin
  }}>
    <App />
  </Auth0Provider>
);
