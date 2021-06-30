import React from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { TodoPage } from "./pages/TodoPage";
import { AboutPage } from "./pages/AboutPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className={"container"}>
        <Switch>
          <Route exact path={"/"} component={TodoPage} />
          <Route exact path={"/about"} component={AboutPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;
