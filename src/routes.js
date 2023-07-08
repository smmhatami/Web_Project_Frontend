import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import DailyViewPage from './pages/DaylyViewPage';
import WeeklyViewPage from './pages/WeeklyViewPage';
import MonthlyViewPage from './pages/MonthlyViewPage';
import SearchRoomPage from './pages/SearchRoomPage';
import MyBookingsPage from './pages/MyBookingsPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: 'dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'daily_view', element: <DailyViewPage />},
        { path: 'weekly_view', element: <WeeklyViewPage />},
        { path: 'monthly_view', element: <MonthlyViewPage />},
        { path: 'my_bookings', element: <MyBookingsPage />},
        { path: 'search_room', element: <SearchRoomPage />}
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
