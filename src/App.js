import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Loadable from 'react-loadable'
import {Layout, LocaleProvider} from 'antd';
import CommonHeader from "./components/common/CommonHeader";
import ErrorBoundary from './components/common/ErrorBoundary'
import Loading from './components/common/Loading'
import './App.css';

const LabContainer = Loadable({
    loader: () => import('./components/common/Loading'),
    loading: Loading
})

const HomePage = Loadable({
    loader: () => import('./pages/Home'),
    loading: Loading
})

class App extends Component {
    render() {
        return (
            <ErrorBoundary>
                <LocaleProvider>
                    <div id='app'>
                        <Layout>
                            <CommonHeader/>

                            <Switch>
                                <Route path='/' component={HomePage}/>
                                <Route path='/lab' component={LabContainer}/>
                            </Switch>
                        </Layout>
                    </div>
                </LocaleProvider>
            </ErrorBoundary>
        );
    }
}

export default App;
