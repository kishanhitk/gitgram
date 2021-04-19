import HomePage from "./components/HomePage";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
