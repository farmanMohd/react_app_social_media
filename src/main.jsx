import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost from "./components/Createpost.jsx";
import PostList, { postLoader } from "./components/PostList.jsx";

const router = createBrowserRouter([
  {path:"/", element:<App/>,
  children:[
    {path:"/",element:<PostList/>,loader: postLoader},
    {path:"/create-post",element:<CreatePost/>}
  ]},
  { path: "/", element: <App /> },
  { path: "/create-post", element: <CreatePost></CreatePost> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
