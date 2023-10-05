import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { AuthPage } from './pages/Auth.page';
import { YoutubeSharingPage } from './pages/YoutubeSharing.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
  {
    path: '/youtubesharing',
    element: <YoutubeSharingPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
