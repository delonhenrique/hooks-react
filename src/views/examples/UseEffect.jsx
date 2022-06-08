import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseEffect = (props) => {
    const [number, setNumber] = useState(0)

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <input type="number" className="input" 
                value={number} onChange={e => setNumber(e.target.value)}/>
        </div>
    )
}

export default UseEffect
