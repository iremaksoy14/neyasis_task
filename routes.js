import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/notFould";
import Footer from './components/home/footer/index'

function Routes() {
  return (
    <div style={{display: "flex"}}>
    
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
       
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default Routes;
