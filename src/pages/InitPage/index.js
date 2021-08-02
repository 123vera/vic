import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.scss'

class Index extends Component {
    render() {
        return <div id='init-page'>
            <Link to='/projects'>
                <div className="circle-wrapper">
                    <div className="circle-inner"/>
                </div>
            </Link>
        </div>
    }
}

export default Index