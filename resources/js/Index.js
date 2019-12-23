import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from './components/hbxcphyevn/Header';

if (document.getElementById('root')) {
    ReactDOM.render(
        <BrowserRouter>
        <Header />
            <div>
                <Switch>
                    {/* <Route exact path="/:id/edit" component={TaskEdit} />
                    <App /> */}
                </Switch>
            </div>
        </BrowserRouter>,

        document.getElementById('root')
    );
}
