import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./page/Root";
import Test from "./page/Test";

import Home from "./page/Home";
import { firestore } from "./firebase-config.js";
import UserRead from "./page/UserRead";
import UserCreat from "./page/UserCreat";
import UserUpdate from "./page/UserUpdate";
import UserDelete from "./page/UserDelete";
import TestList, { loader as testDetailLoader } from "./page/TestList";
import NewInput from "./page/NewInput";
import DescriptDetail from "./page/DescriptDetail";

import Chatbot from "./page/ChatbotPage";
import PortfolioDetail from "./page/portfolio/PortfolioDetail";
import PortfolioItem from "./page/portfolio/PortfolioItem";
import Webuilder from "./page/portfolio/Webuilder";
import PorterZone from "./page/portfolio/PorterZone";
import Platform from "./page/portfolio/Platform";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "chatbot", element: <Chatbot /> },
      {
        path: "testlist",
        element: <TestList />,
        children: [
          { index: true, element: <TestList /> },
          {
            path: ":detailId",
            element: <DescriptDetail />,
            id: "test-detail",
            loader: testDetailLoader,
          },
          // {
          //   path: "edit/:editId",
          //   element: <EditTest />,
          //   id: "test-edit",
          //   loader: testDetailLoader,
          // },
        ],
      },
      { path: "testwrite", element: <NewInput /> },
      // {
      //   path: "/testlist/:detailId",
      //   element: <DescriptDetail />,
      //   id: "test-detail",
      //   loader: testDetailLoader,
      // },
      // { path: "/portDetail", element: <PortfolioDetail /> },
      { path: "/webuilder", element: <Webuilder /> },
      { path: "/porterzone", element: <PorterZone /> },
      { path: "/platform", element: <Platform /> },

      { path: "/delete", element: <UserDelete /> },
      { path: "/read", element: <UserRead /> },
      { path: "/update", element: <UserUpdate /> },
      { path: "/create", element: <UserCreat /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
