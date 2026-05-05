import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Courses } from "./pages/Courses";
import { Professionals } from "./pages/Professionals";
import { Testimonials } from "./pages/Testimonials";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "courses", Component: Courses },
      { path: "professionals", Component: Professionals },
      { path: "testimonials", Component: Testimonials },
      { path: "contact", Component: Contact },
    ],
  },
]);
