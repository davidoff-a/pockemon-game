import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import cn from "classnames";

import { fireBaseContext } from "./context/firebaseContext";
import Firebase from "./services/firebase";
import GamePage from "./routes/game/index";
import HomePage from "./routes/home/homePage";
import MenuHeader from "./components/MenuHeader/MenuHeader";
import Footer from "./components/footer";
import AboutPage from "./routes/about/AboutPage";

import { FireBaseContext } from "./context/firebaseContext";
import Firebase from "./services/firebase";

import s from "./style.module.css";

const App = () => {

  const location = useLocation();
  const isPadding = location.pathname === '/' || location.pathname === '/game/board';

  return (
    <fireBaseContext.Provider value={new Firebase()}>
      <Switch>
        <Route path='/404' render={() => <h1>404 Page Not Found</h1>} />
        <Route>
          <>
            <MenuHeader bgActive={!isPadding} />
            <div className={cn(s.wrap, { [s.isHomePage]: isPadding })}>
              <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/game' component={GamePage} />
                <Route path='/about' component={AboutPage} />
                <Route
                  path='/contacts'
                  render={() => <h1>This is page Contacts</h1>}
                />
                <Route render={() => <Redirect to='/404' />} />
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
      </Switch>
    </fireBaseContext.Provider>
  );
};

export default App;
