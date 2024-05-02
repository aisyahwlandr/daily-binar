import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import { Provider } from 'react-redux';

import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

import "bootstrap/dist/css/bootstrap.min.css"; // apply bootstrap for styling
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/profile";
import { Protected, ProtectedLoggedIn } from "./components/Protected";
import store from "./redux/store";


const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Protected>
                <Navbar />
                <Container className="mt-5">
                    <Home />
                </Container>
            </Protected>
        ),
    },
    {
        path: "/login",
        element: (
            <ProtectedLoggedIn>
                <Navbar />
                <Container className="mt-5">
                    <Login />
                </Container>
            </ProtectedLoggedIn>
        ),
    },
    {
        path: "/register",
        element: (
            <ProtectedLoggedIn>
                <Navbar />
                <Container className="mt-5">
                    <Register />
                </Container>
            </ProtectedLoggedIn>
        ),
    },
    {
        path: "/profile",
        element: (
            <Protected>
                <Navbar />
                <Container className="mt-5">
                    <Profile />
                </Container>
            </Protected>
        ),
    },
]);

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />

            <ToastContainer theme="colored" />
        </Provider>
    );
}

export default App;