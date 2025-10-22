import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import ErrorPage from "./Components/ErrorPage";
import RestaurantMenu from "./Components/RestaurantMenu";
import { useEffect, useState } from "react";
import UserContext from "./utils/userContext";

// React Without JSX using React.createElement
// const heading1 = React.createElement("h1", {id: 'title'}, "I am an h1 tag")

// const heading2 = React.createElement("h2", {id: 'h2tag'}, "This is a new h2 tag")

// const parent = React.createElement("div", { id: "parent" }, //parent div
//     [heading1, heading2]
// );

// const title = `console.log("Danger!!")<script></script>`;  padding: 0px 20px;

const LazyGrocery = lazy(() => import("./Components//Grocery"));

const AppLayOut = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Harish Salve",
    };
    setUserName(data.name);
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <LazyGrocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <AboutUs />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

//createRoutesFromElements another way of creating routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayOut />}>
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
