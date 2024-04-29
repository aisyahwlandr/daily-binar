import { useEffect } from "react";
import axios from "axios";

/* cant access profile if you not logged in */
const Protected = ({ children }) => {
    const getProfile = async (token) => {
        if (!token) {
            return (window.location = "/login");
        }

        let config = {
            method: "get",
            url: `${import.meta.env.VITE_BACKEND_API}/api/auth/profile`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            await axios.request(config);
        } catch (error) {
            // because token is not valid, we will delete it from local storage
            localStorage.removeItem("token");
            window.location = "/login";
        }
    };

    useEffect(() => {
        // get user profile if we have token
        const token = localStorage.getItem("token");
        getProfile(token);
    }, []);

    return children;
};

/* cant access login and register page if you already logged in (valid token) */
const ProtectedLoggedIn = ({ children }) => {
    useEffect(() => {
        const  token = localStorage.getItem("token");
        const currentPath = window.location.pathname;

        if(token && (currentPath === "/login" || currentPath === "/register")) {
            window.location = "/";
        }
    }, []);

    return children;
};

export { Protected, ProtectedLoggedIn };
