import React from "react";
import LoginButton from "./LoginButton";
import { Redirect, useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const history = useHistory();

    if (isAuthenticated) {
        localStorage.setItem("user", user.name);
        history.push('/wishlist');
    }
    else {
        localStorage.removeItem("user");
    }

    if (localStorage.getItem("user")) {
        return <Redirect to={"/wishlist"} />
    }

    return (!isAuthenticated && (
        <>
            <LoginButton />
            <p>Please login.</p>
        </>
    ));
}

export default Login;