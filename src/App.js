import "./App.css";

import { Route, Switch } from "react-router-dom";

import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Mywork from "./components/mywork";
import Contact from "./components/contact";
import NavbarTop from "./components/tools/navbar";

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/skills/" component={Skills} />
        <Route path="/mywork/" component={Mywork} />
        <Route path="/contact/" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
