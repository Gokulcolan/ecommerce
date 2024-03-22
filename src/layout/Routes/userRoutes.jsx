import AboutUs from "../../pages/About/about";
import Blog from "../../pages/Blogs";
import Contact from "../../pages/Contacts/contact";
import Dashboard from "../../pages/Home";
import Products from "../../pages/Products";
import RootLayout from "../nav/rootLayout";

const UserRoutes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      { 
        path: "products",
        element: <Products />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
];

export default UserRoutes;
