import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Login from '../pages/Login';
export const routes = [
  {
    path: '/Login',
    component: Login,
    exact: true
  },
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
