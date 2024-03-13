import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./page/Root";

import Home from "./page/Home";
import TestList, { loader as testDetailLoader } from "./page/TestList";
import NewInput from "./page/NewInput";
import DescriptDetail from "./page/DescriptDetail";
import Chatbot from "./component/Contents/ChatbotPage";
import Webuilder from "./page/portfolio/Webuilder";
import PorterZone from "./page/portfolio/PorterZone";
import Platform from "./page/portfolio/Platform";
import CardRecommend from "./page/portfolio/CardRecommend";
import MyLife from "./component/Contents/graph/MyLife";
import Chungsol from "./page/portfolio/Chungsol";
import Feedback from "./page/Feedback";
import FeedbackDetail from "./page/FeedbackDetail";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
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
        ],
      },
      {
        path: "feedback",
        element: <Feedback />,
        children: [
          { index: true, element: <Feedback /> },
          {
            path: ":detailId",
            element: <FeedbackDetail />,
            id: "feedback-detail",
            loader: testDetailLoader,
          },
        ],
      },
      { path: "testwrite", element: <NewInput /> },
      { path: "/lifegraph", element: <MyLife /> },
      { path: "/webuilder", element: <Webuilder /> },
      { path: "/porterzone", element: <PorterZone /> },
      { path: "/platform", element: <Platform /> },
      { path: "/cardrecommend", element: <CardRecommend /> },
      { path: "/chungsol", element: <Chungsol /> },
    ],
  },
]);
function App() {
  // RouteChangeTracker();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
