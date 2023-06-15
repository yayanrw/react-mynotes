import { useRoutes } from "react-router-dom";
import RouteMiddleware from "../middlewares/route_middleware";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AddPage from "../pages/AddPage";
import ActivePage from "../pages/ActivePage";
import ArchivePage from "../pages/ArchivePage";
import DetailPage from "../pages/DetailPage";
import NotFoundPage from "../pages/NotFoundPage";
import BaseNoteComponent from "../components/BaseNoteComponent";

const Routes = () =>
  useRoutes([
    {
      path: "/",
      element: <RouteMiddleware middleware="auth" />,
    },
    {
      path: "/login",
      element: <RouteMiddleware child={<LoginPage />} middleware="public" />,
    },
    {
      path: "/register",
      element: <RouteMiddleware child={<RegisterPage />} middleware="public" />,
    },
    {
      path: "/notes/add",
      element: (
        <RouteMiddleware
          child={<BaseNoteComponent child={<AddPage />} />}
          middleware="auth"
        />
      ),
    },
    {
      path: "/notes/active",
      element: (
        <RouteMiddleware
          child={<BaseNoteComponent child={<ActivePage />} />}
          middleware="auth"
        />
      ),
    },
    {
      path: "/notes/archive",
      element: (
        <RouteMiddleware
          child={<BaseNoteComponent child={<ArchivePage />} />}
          middleware="auth"
        />
      ),
    },
    {
      path: "/notes/:id",
      element: (
        <RouteMiddleware
          child={<BaseNoteComponent child={<DetailPage />} />}
          middleware="auth"
        />
      ),
    },
    {
      path: "*",
      element: <RouteMiddleware child={<NotFoundPage />} middleware="public" />,
    },
  ]);

export default Routes;
