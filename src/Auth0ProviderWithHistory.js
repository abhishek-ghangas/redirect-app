import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children, props }) => {
  const history = useHistory();
  const domain = process.env.REACT_APP_AUTH0_DOMAIN || "";
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || "";
  console.log("object,", process.env, domain, clientId);

  const onRedirectCallback = () => {
    history.push("/y"); // route to go to directly after login
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
