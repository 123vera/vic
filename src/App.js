import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom'
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

const Projects = Loadable({
    loader: () => import('./pages/Projects'),
    loading: Loading
})

const InfluenceChain = Loadable({
    loader: () => import('./pages/InfluenceChain'),
    loading: Loading
})

const Images = Loadable({
    loader: () => import('./pages/Images'),
    loading: Loading
})

const Contact = Loadable({
    loader: () => import('./pages/Contact'),
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
                                <Route path='/' component={Projects} exact/>
                                <Route path='/projects' component={Projects}/>
                                <Route path='/lab' component={LabContainer}/>
                                <Route path='/images' component={Images}/>
                                <Route path='/contact' component={Contact}/>
                                <Route path='/influence-chain' strict component={InfluenceChain}/>
                            </Switch>
                            <footer>
                                &#169; 2019 Hui Xie.All rights reserved.
                            </footer>
                        </Layout>
                    </div>
                </LocaleProvider>
            </ErrorBoundary>
        );
    }
}

export default App;
