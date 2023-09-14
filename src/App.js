import "./App.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import PortfolioPage from "./pages/Portfolio";
import RootPage from "./pages/Root";
import PersonaPage from "./pages/Persona";
import EducationPage from "./pages/Education";
import ProfessionalPage from "./pages/Professional";
import ErrorPage from "./pages/Error";

const router = createHashRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "persona",
        element: <PersonaPage />,
      },
      {
        path: "profession",
        element: <ProfessionalPage />,
      },
      {
        path: "education",
        element: <EducationPage />,
      },
    ],
  },
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App;
