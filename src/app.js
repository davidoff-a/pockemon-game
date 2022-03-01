import { useRouteMatch, Route, Switch, Redirect } from "react-router-dom";
import cn from 'classnames';

import GamePage from "./routes/game/gamePage";
import HomePage from "./routes/home/homePage";
import MenuHeader from "./components/MenuHeader/MenuHeader";
import Footer from "./components/footer";

import s from './style.module.css';



const App = () => {
  const match = useRouteMatch("/");
  return (
    <Switch>
      <Route path='/404' render={() => <h1>404 Page Not Found</h1>} />
      <Route>
        <>
          <MenuHeader bgActive={!match.isExact} />
          <div className={cn(s.wrap, { [s.isHomePage]: match.isExact })}>
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/game' component={GamePage} />
              <Route path='/about' render={() => <h1>This is page About</h1>} />
              <Route
                path='/contacts'
                render={() => <h1>This is page Contacts</h1>}
              />
              <Route render={() => <Redirect to='/404'/>} />
            </Switch>
          </div>
          <Footer />
        </>
      </Route>
    </Switch>
  );
};

export default App;
