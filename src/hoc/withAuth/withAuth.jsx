import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PathName } from "../../router/PathName";

const WithAuth = (WrappedComponent) => {
    const Authenticate = (props) => {
        const navigateTo = useNavigate();

        useEffect(() => {
            const authToken = localStorage.getItem("tspAuthToken");
            const isLoggedIn = localStorage.getItem("isLoggedIn");

            if (isLoggedIn !== true) {
                navigateTo(PathName.LOGIN);
            } else {
                navigateTo(PathName.LANDING);
            }
        }, [navigateTo]);

        return <WrappedComponent {...props} />;
    };

    return Authenticate;
};

export default WithAuth;

//  function WithAuth(WrapperComponent) {
//     function Authenticate(props) {
//         const navigateTo = useNavigate();
//         const authToken = localStorage.getItem("tspAuthToken");

//         const handleRedirect = React.useCallback(() => {
//             if (!authToken) {
//                 navigateTo(PathName.LOGIN);
//             }
//         }, [navigateTo]);

//         React.useEffect(() => {
//             handleRedirect();
//         }, [handleRedirect]);

//         return localStorage.getItem("isLoggedIn") === true ? (
//             <WrapperComponent {...props} />
//         ) : (
//             ""
//         );
//     }

//     return Authenticate;
// }
