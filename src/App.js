import React, { Component } from 'react';
import { Route, Redirect, Switch, NavLink } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Atendimento from './containers/Atendimento';

//temp
import sprite from './assets/icons/sprite.svg';

class App extends Component {

  render() {

    return (
      <React.Fragment>
        <Switch>
          <Route path="/card/atendimento" component={Atendimento} />
          <Route path="/card/home" component={Home} />
          <Redirect from="/" to="/card/home" />
        </Switch>
        <nav className="App__navigation">
            <NavLink to="/" className="App__button button-1 App__navigation-button">
              <svg className="App__notification App__notification--3 App__notification--4">
                <use xlinkHref={`${sprite}#icon-home3`}></use>
              </svg>
              <p className="paragraph-3">Início</p>
            </NavLink>
            <button className="App__button button-1 App__navigation-button">
              <svg className="App__notification App__notification--3 App__notification--4">
                <use xlinkHref={`${sprite}#icon-coin-dollar`}></use>
              </svg>
              <p className="paragraph-3">Pagamento</p>
            </button>
            <button className="App__button button-1 App__navigation-button">
              <svg className="App__notification App__notification--3 App__notification--4">
                <use xlinkHref={`${sprite}#icon-newspaper`}></use>
              </svg>
              <p className="paragraph-3">SafraPay</p>
            </button>
            <NavLink to="/card/atendimento" className="App__button button-1 App__navigation-button">
              <svg className="App__notification App__notification--3 App__notification--4">
                <use xlinkHref={`${sprite}#icon-headphones`}></use>
              </svg>
              <p className="paragraph-3">Atendimento</p>
            </NavLink>
            <button className="App__button button-1 App__navigation-button">
              <svg className="App__notification App__notification--3 App__notification--4">
                <use xlinkHref={`${sprite}#icon-search`}></use>
              </svg>
              <p className="paragraph-3">Ver mais</p>
            </button>
          </nav>
      </React.Fragment>
    );
  }

}

export default App;
