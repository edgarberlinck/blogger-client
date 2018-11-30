import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostList from './components/PostList';
import TitleBar from './components/TitleBar';
import { blogInfo } from './api';

require('dotenv').config();

class App extends Component {
  componentDidMount() {
    //blogInfo().then(response => console.log(response));
  }
  
  render() {
    return (
      <div>
        <TitleBar />
        <div className="container-fluid">
          <BrowserRouter>
            <Switch>
              <Route path="/" component={PostList} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
