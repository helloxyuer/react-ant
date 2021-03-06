import React from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './views/Home';
import NoMatch from './views/NoMatch';
import HomePage1 from './views/Home/HomePage1';
import HomePage2 from './views/Home/HomePage2';
import HomePage3 from './views/Home/HomePage3';

import Content from './views/Content';
import Login from './views/Login';
import Options from './views/Options';

import Details from './views/Details';
import './views/Home/home.less';

class router extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/options" component={Options}/>
          <Route path="/home" render={() =>
            <Home>
              <Switch>
                <Route path='/home/homepage1' component={HomePage1}/>
                <Route path='/home/homepage2' component={HomePage2}/>
                <Route path='/home/homepage3' component={HomePage3}/>
                <Redirect to='/home/homepage1' component={HomePage1}/>
              </Switch>
            </Home>
          }/>
          <Route path="/content" render={() =>
            <Content>
              <Route path="/content/detail/:id" component={Details}/>
              <Route component={NoMatch}/>
            </Content>
          }/>
          <Redirect to="/login"/>
        </Switch>
      </HashRouter>
    );
  }
}

export default router;
