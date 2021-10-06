import { Switch, Route, Redirect } from 'react-router-dom'
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import ROUTES from '../routes-pathes';
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
    </Switch>
  );
};

export default Routes;
