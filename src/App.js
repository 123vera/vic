import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Loadable from 'react-loadable'
import {DEFAULT_LANGUAGE} from './i18n'
import {Layout, LocaleProvider} from 'antd';
import {ensureLanguage, setCookie, setLanguage} from "./utils/utils";
import CommonHeader from "./components/common/CommonHeader";
import CommonFooter from "./components/common/CommonFooter";
import ErrorBoundary from './components/common/ErrorBoundary'
import Loading from './components/common/Loading'
import './App.css';

const LabContainer = Loadable({
    loader: () => import('./components/common/Loading'),
    loading: Loading
})

// const InitPage = Loadable({
//     loader: () => import('./pages/InitPage'),
//     loading: Loading
// })

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

const Inex = Loadable({
    loader: () => import('./pages/Inex'),
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

const About = Loadable({
    loader: () => import('./pages/About'),
    loading: Loading
})

const Video = Loadable({
    loader: () => import('./pages/Video'),
    loading: Loading
})

class App extends Component {
    state = {
        language: DEFAULT_LANGUAGE,
        currentLanguage: 'US',
    }

    componentDidMount() {
        this.initLanguage()

        const mainDom = document && document.getElementById('main').children[0]
        mainDom.style = 'padding-top: 20%'
    }

    // 初始化语言
    initLanguage = () => {
        const language = ensureLanguage()
        setCookie('language', language)
        this.setLang(language)
        return null;
    }

    // 设置语言
    setLang = (locale) => {
        setCookie('language', locale.label)
        this.setState({language: locale.label, currentLanguage: locale.value}, () => {
            setLanguage(locale.label)
        })
        return null;
    }


    render() {
        const {currentLanguage = 'US', language = DEFAULT_LANGUAGE} = this.state
        const darkList = ['#/', '#/projects/', '#/projects', '#/video', '#/diary', '#/diary/', '#/video/']
        const isDarkBg = !darkList.includes(window.location.hash)
console.log(this.props)
        return (
            <ErrorBoundary>
                <LocaleProvider>
                    <div id='app'>
                        <Layout>
                            <CommonHeader
                                isDarkBg={isDarkBg}
                                language={language}
                                currentLanguage={currentLanguage}
                                setLang={this.setLang}/>
                            <main id='main'>
                                <Switch>
                                    <Route exact path='/' component={Projects}/>
                                    <Route exact path='/projects' component={Projects}/>
                                    <Route exact path='/lab' component={LabContainer}/>
                                    <Route exact path='/diary' component={Images}/>
                                    <Route exact path='/video' component={Video}/>
                                    <Route exact path='/about' component={About}/>
                                    <Route exact path='/contact' component={Contact}/>
                                    <Route exact path='/influence-chain' strict component={InfluenceChain}/>
                                    <Route exact path='/inc-pay' strict component={IncPay}/>
                                    <Route exact path='/design-inc' strict component={DesignInc}/>
                                    <Route exact path='/dlab' strict component={Dlab}/>
                                    <Route exact path='/celebrity' strict component={Celebrity}/>
                                    <Route exact path='/teamlab' strict component={TeamLab}/>
                                    <Route exact path='/coffee-bag' strict component={CoffeeBag}/>
                                    <Route exact path='/cutter' strict component={Cutter}/>
                                    <Route exact path='/arulai' strict component={Arulai}/>
                                    <Route exact path='/turnip' strict component={Turnip}/>
                                    <Route exact path='/room' strict component={Room}/>
                                    <Route exact path='/DNA' strict component={DNA}/>
                                    <Route exact path='/stec' strict component={Stec}/>
                                    <Route exact path='/spot' strict component={Spot}/>
                                    <Route exact path='/zan' strict component={Zan}/>
                                    <Route exact path='/water' strict component={Water}/>
                                    <Route exact path='/poster' strict component={Poster}/>
                                    <Route exact path='/gelaisi' strict component={Gelaisi}/>
                                    <Route exact path='/photo' strict component={Photo}/>
                                    <Route exact path='/GBIB' strict component={GBIB}/>
                                    <Route exact path='/ACP' strict component={ACP}/>
                                    <Route exact path='/wayki' strict component={Wayki}/>
                                    <Route exact path='/aurelia' strict component={Aurelia}/>
                                    <Route exact path='/SFI' strict component={SFI}/>
                                    <Route exact path='/new-pay' strict component={NewPay}/>
                                    <Route exact path='/Inex' strict component={Inex}/>
                                </Switch>
                            </main>

                            <CommonFooter language={language} setLang={this.setLang} currentLanguage={currentLanguage}/>
                        </Layout>
                    </div>
                </LocaleProvider>
            </ErrorBoundary>
        );
    }
}

export default App;
