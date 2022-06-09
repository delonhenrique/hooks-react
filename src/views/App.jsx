import './App.css'
import React from 'react'
import { BrowserRouter as Router } from  'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

const App = props => {

    return (
                <div className="App">
                    <Router basename={process.env.PUBLIC_URL}>
                        <Menu />
                        <Content />
                    </Router>
                </div>
    )
}

export default App