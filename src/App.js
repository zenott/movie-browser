import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Details from './components/DetailsComps/Details';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/MainPages/Home';
import Movies from './components/MainPages/Movies';
import TvShows from './components/MainPages/TvShows';
import Profile from './components/Auth/Profile';
import SearchResults from './components/Search/SearchResults';
import LogIn from './components/Auth/LogIn';
import Auth from './components/Auth/Auth';
import PrivateRoute from './components/Auth/PrivateRoute';
import Notifications from './components/Misc/Notifications';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/tv-shows" component={TvShows} />
        <Route path="/login" exact component={LogIn} />
        <Route path="/login/auth" exact component={Auth} />
        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>
        <Route
          path={['/movie/:id', '/tv/:id', '/person/:id']}
          component={Details}
        />
        <Route path="/results/:type/:query" component={SearchResults} />
      </Switch>
      <Notifications />
      <Footer />
    </div>
  );
}
