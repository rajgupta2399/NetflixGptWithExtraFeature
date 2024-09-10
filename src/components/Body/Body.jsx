import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Login from "../Login/Login";
import About from "../About/About";
import ErrorPage from "../ErrorP/ErrorPage";
import TvShows from "../TvShows/TvShows";
import Wishlist from "../Wishlist/Wishlist";
import Browse from "../Browse/Browse";
import Search from "../Search/Search";
import Layout from "@/Layout";
import MoviesDetails from "../Movies/MoviesDetails";

const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "browse",
        element: <Browse />,
      },
      {
        path: "MovieDetail/:movieId",
        element: <MoviesDetails />,
      },
      {
        path: "TvShows",
        element: <TvShows />,
      },
      {
        path: "Wishlist",
        element: <Wishlist />,
      },
      {
        path: "Search",
        element: <Search />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "error",
        element: <ErrorPage />,
      },
    ],
  },
]);
