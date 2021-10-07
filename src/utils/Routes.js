import { Switch, Route, Redirect } from 'react-router-dom'

import ROUTES from '../routes-pathes';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';
import Admin from '../pages/Admin';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <Redirect to={ROUTES.DASHBOARD} />
      </Route>
      <Route path={ROUTES.LOGIN} exact>
        <Login />
      </Route>
      <Route path={ROUTES.DASHBOARD}>
        <Dashboard />
      </Route>
      <Route path={ROUTES.SETTINGS}>
        <Settings />
      </Route>
      <Route path={ROUTES.ADMIN}>
        <Admin />
      </Route>
    </Switch>
  );
};

export default Routes;
