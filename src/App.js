import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./routes/home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/something" component={Something} /> */}
        {/* <Route path="/default" render={() => <Redirect to="/" />} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  );
}

export default App;
