import ProductDetails from "components/home/ProductDetails";
import Login from "Login/Login";
import Checkout from "pages/Checkout/Checkout";
import React, { Suspense } from "react";
import DefaultLayout from "components/layout/DefaultLayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "SignIn/SignIn";
import PrivateRoute from "components/authGaurd/PrivateRouter";
const Home = React.lazy(() => import("./pages/Home/Home"));
const Help = React.lazy(() => import("./pages/Help/Help"));
const Dashboard = React.lazy(() => import("admin/layout/DefaultLayout"));

// eslint-disable-next-line react/prop-types
const AppRouter: React.FC = ({ children }) => {
  return (
    <Router>
      <DefaultLayout>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/help" component={Help} />
            <Route exact path="/product/:id" component={ProductDetails} />
            <Route path="/checkout/" component={Checkout} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Suspense>
        </Switch>
      </DefaultLayout>
    </Router>
  );
};

export default AppRouter;
