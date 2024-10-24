
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
  <Auth0Provider domain="dev-u26qpla02lieo88t.us.auth0.com" clientId="zNFsw20vYNDkoRUkEUKRNQ3FaeuKECMc"  authorizationParams={{
    redirect_uri: window.location.origin
  }}>
    <App />
  </Auth0Provider>
);
