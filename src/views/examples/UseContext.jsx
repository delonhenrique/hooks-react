import React from 'react'
import { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import DataContext from '../../data/DataContext'
import { AppContext } from '../../data/Store'

const UseContext = (props) => {
    document.title = "React - Hooks - useContext()"

    const context = useContext(DataContext)

    function addNumber(n) {
        context.setState({
            ...context.state,
            number: context.state.number + n
        })
    }

    const {number, text, setNumber} = useContext(AppContext)

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>


                <div>
                    <button className="btn"
                        onClick={() => addNumber(-1)}>
                        -1
                    </button>

                    <button className="btn"
                        onClick={() => addNumber(+1)}>
                        +1
                    </button>
                </div>
            </div>

            <SectionTitle title="Exercíco #02" />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className="btn"
                        onClick={() => setNumber(number - 1)}>
                            -1
                    </button>

                    <button className="btn"
                        onClick={() => setNumber(number + 1)}>
                            +1
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
