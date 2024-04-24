import {
    createBrowserRouter
} from "react-router-dom";
import { Signin } from "./SignIn";
import { Signup } from "./SignUp";
import { Userpage } from "./UserPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Signin />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/userpage",
        element: <Userpage />,
    },
]);