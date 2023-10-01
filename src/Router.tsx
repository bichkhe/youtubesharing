import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { AuthPage } from './pages/auth/Auth.page';
import { YoutubeBoardPage } from './pages/YoutubeBoard.page';

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
    path: '/youtube',
    element: <YoutubeBoardPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
