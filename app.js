import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import UserRegistration from "./UserRegistration";

function LandingPage() {
  return <h2>Landing Page</h2>;
}

function SignInSignOut() {
  return <h2>Sign In/Sign Out</h2>;
}

function MyApp() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Landing Page</Link>
            </li>
            <li>
              <Link to="/sign-in-out">Sign In/Sign Out</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/sign-in-out" component={SignInSignOut} />
          <Route path="/user-registration" component={UserRegistration} />
        </Switch>
      </div>
    </Router>
  );
}

export default MyApp;
