import React, { Fragment, useEffect } from 'react'

import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap-scss';
// import '../src/assets/scss/flaticon.scss';
// import '../src/assets/scss/font-awesome.scss';
// import "../src/assets/scss/color-1.scss"
// import '../src/assets/scss/themify.scss';
// import "../src/assets/scss/slick.scss";
// import "../src/assets/scss/slick-theme.scss";
import "./App.scss";
import Header from "./components/common/Header";
import LayoutPage from "./screens/LayoutPage";


const App = () => {
  useEffect(() => {
    document.body.classList.add('try');
    document.body.style.setProperty('--primary', '#fb3b64')
    document.body.style.setProperty('--secondary', '#071828')
    document.body.style.setProperty('--light', '#071828')
    document.body.style.setProperty('--dark', '#fb3b64')
  })
  return (
    <Fragment>
      <div>
        <div>
          <BrowserRouter>
            <Header className="sass1" />
            <Switch>
              <Route exact path="/" component={LayoutPage} />
            </Switch>

          </BrowserRouter>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
