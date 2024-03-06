import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

// interface IRouterProps{
//   toggleDark:() => void;
//   isDark:boolean;
// }

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin/>
        </Route>
        <Route path="/">
          <Coins/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
