import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { AuthPage } from './pages/Auth.page';
import { YoutubeSharingPage } from './pages/YoutubeSharing.page';
import { NotFoundPage } from './pages/404';
import { AuthGuard } from './AuthGuadr';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthGuard><HomePage /></AuthGuard>,
  },
  {
    path: '/auth',
    element: <AuthGuard>
      <AuthPage />
    </AuthGuard>,
  },
  {
    path: '/youtubeboard',
    element: <AuthGuard><HomePage /></AuthGuard>
  },
  {
    path: '/youtubesharing',
    element: <AuthGuard><YoutubeSharingPage /></AuthGuard>,
  },
  {
    path: '/*',
    element: <NotFoundPage />,
  },
]);

export function Router() {

  return <RouterProvider router={router} />;
}
