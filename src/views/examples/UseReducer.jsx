import React from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseReducer = (props) => {
    document.title = "React - Hooks - useReducer()"

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
        </div>
    )
}

export default UseReducer
