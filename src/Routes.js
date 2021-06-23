import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import App from "./App";
import Home from "./Components/Home";

const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default Routes
