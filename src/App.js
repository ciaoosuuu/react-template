import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import Page from "./pages/Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/page", element: <Page /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
