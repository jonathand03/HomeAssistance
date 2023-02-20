import { Home } from './pages/Home/index.jsx';
import { Dashboard } from './pages/Dash/index.jsx';

export const routes = [
  {
    path: '/',
    page: Home,
  },
  {
    path: '/dashboard',
    page: Dashboard,
  },
  {
    path: '/devices',
    page: Dashboard,
  },
];
