import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateHabit from "./pages/CreateHabit";
import AllHabits from "./pages/AllHabits";
import Home from "./pages/Home";

import PrivateRoute from "./hocs/PrivateRoute";
import UnPrivateRoute from "./hocs/UnPrivateRoute";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <UnPrivateRoute path="/login" component={Login}></UnPrivateRoute>
          <UnPrivateRoute path="/signup" component={Signup}></UnPrivateRoute>
          <PrivateRoute path="/createhabit" component={CreateHabit}></PrivateRoute>
          <PrivateRoute path="/habits" component={AllHabits}></PrivateRoute>
          {/* <Route path="*" component={NoMatch}></Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
