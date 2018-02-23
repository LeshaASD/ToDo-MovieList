import React, { Component, Fragment } from 'react';
import './App.css';
import Panel from "./components/Panel/Panel";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import toDo from "./containers/toDo/toDo";
import MovieApp from "./containers/MovieList/MovieApp";


class App extends Component {

  render() {
    return (
        <BrowserRouter>
            <Fragment>
            <Panel/>
            <Switch>
                <Route path='/toDo' component={toDo}/>
                <Route path='/movieList' component={MovieApp}/>
            </Switch>
            </Fragment>
        </BrowserRouter>


    );
  }
}

export default App;
