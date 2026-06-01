import { createBrowserRouter } from "react-router-dom";
import About from "./About";
import Courses from "./Courses";
import Contact from "./Contact";
import App from "./App";

export const route = createBrowserRouter([{
    path: "/",
    element: <App />
}, {
    path: "/about",
    element: <About />
}, {
    path: "/courses",
    element: <Courses />
}, {
    path: "/contact",
    element: <Contact />
}
],
)

