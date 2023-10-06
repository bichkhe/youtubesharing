import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { AuthPage } from './pages/Auth.page';
import { YoutubeSharingPage } from './pages/YoutubeSharing.page';
import { NotFoundPage } from './pages/404';

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
    path: '/youtubeboard',
    element: <HomePage />,
  },
  {
    path: '/youtubesharing',
    element: <YoutubeSharingPage />,
  },
  {
    path: '/*',
    element: <NotFoundPage />,
  },
]);



export function Router() {

  return <RouterProvider router={router} />;
}
