import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = function(s1, s2) {
    return [...s1].map(function(element , i) {
        return `${element}${s2[i] || ""}`
    }).join("")
}

const UseRef = (props) => {
    document.title = "React - Hooks - useRef()"

    const [firstValue, setFirstValue] = useState("")
    const [secondValue, setSecondValue] = useState("")
    
    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(function() {
        count.current++
        myInput2.current.focus()
    }, [firstValue])

    useEffect(function() {
        count.current++
        myInput1.current.focus()
    }, [secondValue])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook useRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                <span className="text">Valor: </span>
                <span className="text">{merge(firstValue, secondValue)} [</span>
                <span className="text red">{count.current}</span>
                <span className="text">]</span>
                </div>
                <input type="text" className="input" 
                    ref={myInput1}
                    value={firstValue}
                    onChange={e => setFirstValue(e.target.value)}/>
            </div>

            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <input type="text" className="input" 
                ref={myInput2}
                value={secondValue}
                onChange={e => setSecondValue(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseRef