import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

import DataContext, { data } from '../data/DataContext'
import { useState } from 'react'
import Store from '../data/Store'

const App = props => {
    const [state, setState] = useState(data)
    return (
        <Store>
            <DataContext.Provider value={{ state, setState }}>
                <div className="App">

                    {/* to deploy on githubPages use first BrouseRouter */}
                    {/* to run locally and push to github use second BrouseRouter */}

                    {/* <BrowserRouter basename={process.env.PUBLIC_URL}>  */}
                    <BrowserRouter>
                        <Menu />
                        <Content />
                    </BrowserRouter>
                </div>
            </DataContext.Provider>
        </Store>


    )
}

export default App