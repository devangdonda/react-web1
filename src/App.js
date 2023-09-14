import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PortfolioPage from "./pages/Portfolio";
import RootPage from "./pages/Root";
import PersonaPage from "./pages/Persona";
import EducationPage from "./pages/Education";
import ProfessionalPage from "./pages/Professional";
import ErrorPage from "./pages/Error";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const router = createBrowserRouter([
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
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return <RouterProvider router={router} />;
}

export default App;
