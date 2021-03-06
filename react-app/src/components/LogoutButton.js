import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ListItemText } from "@material-ui/core";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <ListItemText onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </ListItemText>
  );
};

export default LogoutButton;