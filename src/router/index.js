import Home from '../pages/Home';
import Detail from '../pages/Detail';
export const routes = [
  {
    path: '/home',
    component: Home,
    exact: true
  },
  {
    path: '/detail/:id',
    component: Detail,
    exact: true
  }
];
