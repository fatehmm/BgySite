import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import  Home  from './components/Home';
import  FetchData  from './components/FetchData';
import  Counter  from './components/Counter';

import './custom.css'
import {Routes} from "react-router-dom";

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
          <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route path='/counter' element={<Counter/>}/>
              <Route path='/fetch-data' element={<FetchData/>} />
          </Routes>
        
      </Layout>
    );
  }
}
