import { useRouteMatch, Route, Switch, Redirect } from "react-router-dom";
import cn from "classnames";
import { useState } from "react";

import GamePage from "./routes/game/gamePage";
import HomePage from "./routes/home/homePage";
import MenuHeader from "./components/MenuHeader/MenuHeader";
import Footer from "./components/footer";
import AboutPage from "./routes/about/AboutPage";
import { TestContext } from "./context/testContext";
import s from "./style.module.css";

const App = () => {
  const [theme, setTheme] = useState('light');
  const handleChangeTheme = (val) => {
    setTheme(val);
  }
  const match = useRouteMatch("/");

  return (
    <TestContext.Provider value={{ theme, onChangeTheme: handleChangeTheme }}>
      <Switch>
        <Route path='/404' render={() => <h1>404 Page Not Found</h1>} />
        <Route>
          <>
            <MenuHeader bgActive={!match.isExact} />
            <div className={cn(s.wrap, { [s.isHomePage]: match.isExact })}>
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
    </TestContext.Provider>
  );
};

export default App;
