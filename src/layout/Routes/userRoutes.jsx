import AboutUs from "../../pages/About/about";
import ShoppingBag from "../../pages/cart/cart";
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
        path: "/",
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
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cart",
        element: <ShoppingBag />,
      },
    ],
  },
];

export default UserRoutes;
