import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom'
import Loadable from 'react-loadable'
import {Layout, LocaleProvider} from 'antd';
import CommonHeader from "./components/common/CommonHeader";
import ErrorBoundary from './components/common/ErrorBoundary'
import Loading from './components/common/Loading'
import './App.css';

const Text = Loadable({
    loader: () => import('./pages/Text'),
    loading: Loading
})
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

const IncPay = Loadable({
    loader: () => import('./pages/IncPay'),
    loading: Loading
})

const DesignInc = Loadable({
    loader: () => import('./pages/DesignInc'),
    loading: Loading
})

const Dlab = Loadable({
    loader: () => import('./pages/Dlab'),
    loading: Loading
})

const Celebrity = Loadable({
    loader: () => import('./pages/Celebrity'),
    loading: Loading
})

const TeamLab = Loadable({
    loader: () => import('./pages/TeamLab'),
    loading: Loading
})

const CoffeeBag = Loadable({
    loader: () => import('./pages/CoffeeBag'),
    loading: Loading
})

const Cutter = Loadable({
    loader: () => import('./pages/Cutter'),
    loading: Loading
})

const Arulai = Loadable({
    loader: () => import('./pages/Arulai'),
    loading: Loading
})

const Turnip = Loadable({
    loader: () => import('./pages/Turnip'),
    loading: Loading
})

const Room = Loadable({
    loader: () => import('./pages/Room'),
    loading: Loading
})

const DNA = Loadable({
    loader: () => import('./pages/DNA'),
    loading: Loading
})

const Stec = Loadable({
    loader: () => import('./pages/Stec'),
    loading: Loading
})

const Spot = Loadable({
    loader: () => import('./pages/Spot'),
    loading: Loading
})

const Zan = Loadable({
    loader: () => import('./pages/Zan'),
    loading: Loading
})

const Water = Loadable({
    loader: () => import('./pages/Water'),
    loading: Loading
})

const Poster = Loadable({
    loader: () => import('./pages/Poster'),
    loading: Loading
})

const Gelaisi = Loadable({
    loader: () => import('./pages/Gelaisi'),
    loading: Loading
})

const Photo = Loadable({
    loader: () => import('./pages/Photo'),
    loading: Loading
})

const GBIB = Loadable({
    loader: () => import('./pages/Gbib'),
    loading: Loading
})

const ACP = Loadable({
    loader: () => import('./pages/ACP'),
    loading: Loading
})

const Wayki = Loadable({
    loader: () => import('./pages/Wayki'),
    loading: Loading
})

const Aurelia = Loadable({
    loader: () => import('./pages/Aurelia'),
    loading: Loading
})

const SFI = Loadable({
    loader: () => import('./pages/SFI'),
    loading: Loading
})

const NewPay = Loadable({
    loader: () => import('./pages/NewPay'),
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
                                <Route path='/inc-pay' strict component={IncPay}/>
                                <Route path='/design-inc' strict component={DesignInc}/>
                                <Route path='/dlab' strict component={Dlab}/>
                                <Route path='/celebrity' strict component={Celebrity}/>
                                <Route path='/teamlab' strict component={TeamLab}/>
                                <Route path='/coffee-bag' strict component={CoffeeBag}/>
                                <Route path='/cutter' strict component={Cutter}/>
                                <Route path='/arulai' strict component={Arulai}/>
                                <Route path='/turnip' strict component={Turnip}/>
                                <Route path='/room' strict component={Room}/>
                                <Route path='/DNA' strict component={DNA}/>
                                <Route path='/stec' strict component={Stec}/>
                                <Route path='/spot' strict component={Spot}/>
                                <Route path='/zan' strict component={Zan}/>
                                <Route path='/water' strict component={Water}/>
                                <Route path='/poster' strict component={Poster}/>
                                <Route path='/gelaisi' strict component={Gelaisi}/>
                                <Route path='/photo' strict component={Photo}/>
                                <Route path='/GBIB' strict component={GBIB}/>
                                <Route path='/ACP' strict component={ACP}/>
                                <Route path='/wayki' strict  component={Wayki}/>
                                <Route path='/aurelia' strict component={Aurelia}/>
                                <Route path='/SFI' strict component={SFI}/>
                                <Route path='/new-pay' strict component={NewPay}/>
                                <Route path='/Text' strict component={Text}/>
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
