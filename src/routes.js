import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import ApproveUser from './pages/ApproveUser';
import AllUser from './pages/AllUser';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import BlockUser from './pages/BlockUser';
import DashboardAppPage from './pages/DashboardAppPage';
import AddAssets from './pages/AddAssets';
import AdminAssets from './pages/AdminAssets';
import AdminAssetData from './pages/AdminAssetData';
import FormData from './pages/FormData';
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'all-user', element: <AllUser /> },
        { path: 'block-user', element: <BlockUser /> },
        { path: 'approve-user', element: <ApproveUser /> },
        { path: 'add-assets', element: <AddAssets /> },
        { path: 'admin-assets', element: <AdminAssets /> },
        { path: 'admin-assets-data', element: <AdminAssetData /> },
        { path: 'form-data', element: <FormData /> },

      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
