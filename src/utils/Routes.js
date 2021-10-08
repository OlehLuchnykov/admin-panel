import { Switch, Route, Redirect } from 'react-router-dom'

import ROUTES from '../routes-pathes';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';
import Admin from '../pages/Admin';
import { useContext } from 'react';
import AuthContext from '../AuthContext';

const Routes = () => {
  const authContext = useContext(AuthContext);
  const isAuth = authContext.isLoggedIn;
  console.log(isAuth);

  if (isAuth) {
     return (
       <Switch>
         <Route path='/' exact>
           <Redirect to={ROUTES.DASHBOARD}/>
         </Route>
         <Route path={ROUTES.DASHBOARD}>
           <Dashboard/>
         </Route>
         <Route path={ROUTES.SETTINGS}>
           <Settings />
         </Route>
         <Route path={ROUTES.ADMIN}>
           <Admin />
         </Route>
         <Route path='*'>
           <Redirect to='/' />
         </Route>
       </Switch>
     );
  } else {
    return (
      <Switch>
        <Route path={ROUTES.LOGIN} exact>
          <Login/>
        </Route>
        <Route path='*'>
          <Redirect to='/login' />
        </Route>
      </Switch>
    );
  }
};

export default Routes;
