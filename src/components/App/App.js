import { BrowserRouter, MemoryRouter, Route, Router, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../../page/Home/Home';
import NewsContainer from '../../containers/NewsContainer';
import ProfileContainer from '../../containers/ProfileContainer';
import LoginContainer from '../../containers/LoginContainer';
import './App.css';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import store from '../../store/store';
const NotFound = React.lazy(() => import('../../page/NotFound/NotFound'));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/news' component={NewsContainer} />
            <Route path='/profile' component={ProfileContainer} />
            <Route path='/login' component={LoginContainer} />
            <Route render={() => (<Suspense fallback={<div data-testid='error_page'>Wait...</div>}><NotFound /></Suspense>)} />
          </Switch>
        </div>
      </div>
    </Provider>
  );
}

export default App;
