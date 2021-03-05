import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LandingPage from '../components/LandingPage/LandingPage';
import AdoptionPage from '../components/AdoptionPage/AdoptionPage';

class Root extends React.Component {
  render() {
    return (
      <main>
        <header>Petful</header>
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path={'/'} component={LandingPage}/>
              <Route path={'/adoption'} component={AdoptionPage}/>
            </Switch>
          </BrowserRouter>
        </div>
      </main>
    )
  }
}

export default Root
