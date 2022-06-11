import About from "../About/About";
import Home from "../Home/home";

export const navObject = [
    {
        page: "home",
        path: "/",
        element: <Home />
    },
    {
        page: "about",
        path: "/about",
        element: <About />
    },
    {
        page: "properties",
        path: "/properties",
        element: <About />
    },
    {
        page: "sell",
        path: "/sell",
        element: <About />
    }
]