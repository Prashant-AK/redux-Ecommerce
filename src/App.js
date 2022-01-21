import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
