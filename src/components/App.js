import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import Header from './Header'
import Menu from './Menu'
import Dashboard from './Dashboard'

import Login from './Login';

// ----- Mat -----
import ListMat from './modules/Towary/ListMat'
import DetailsMat from './modules/Towary/DetailsMat'
import StocksMat from './modules/Towary/StocksMat'
import CreateMat from './modules/Towary/CreateMat'

// ----- BU -----
import ListBU from './modules/Kontrahenci/ListBU'
import CreateBU from './modules/Kontrahenci/CreateBU'
import DetailsBU from './modules/Kontrahenci/DetailsBu'

// ----- Doc -----
import ListDoc from './modules/Dokumenty/ListDoc'

import history from '../history'

export default function App() {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header/>
                    <div className="ui grid">
                        <div className="four wide column">
                            <Menu />
                        </div>
                        <div className="twelve wide stretched column">
                            <div className="ui segment">
                                <Switch>
                                    <Route path="/" exact component={Dashboard}/>
                                    <Route path="/login" exact component={Login}/>

                                    <Route path="/twr" exact component={ListMat}/>
                                    <Route path="/twr/new" exact component={CreateMat}/>
                                    <Route path="/twr/stan" exact component={StocksMat}/>
                                    <Route path="/twr/:id" exact component={DetailsMat}/>

                                    <Route path="/knt" exact component={ListBU}/>
                                    <Route path="/knt/new" exact component={CreateBU}/>
                                    <Route path="/knt/:id" exact component={DetailsBU}/>

                                    <Route path="/dok" exact component={ListDoc}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        </div>
    )
}
