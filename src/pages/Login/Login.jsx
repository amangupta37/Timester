import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";
import { PathName } from "../../router/PathName";
const Login = () => {
    const navigateTo = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            console.log("you are logged in 😍");
            localStorage.setItem(
                "tspAuthToken",
                "testsxhvckhwvckwevcljevckjewvcj"
            );
            localStorage.setItem("isLoggedIn", false);

            navigateTo(PathName.LANDING);
        }, 8000);
    }, []);
    return <div>Login</div>;
};

export default Login;
