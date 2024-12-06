import React, { useState } from 'react'

export const Counter = () => {
    
    const [count, setCount] = useState(10)

    const increaseDecreaseBy = (value: number) => {
        setCount(count + value);
    }

    return (
    <>
        <h3>Contador <small>{count}</small></h3>

        <div>
            <button onClick={ ()=> increaseDecreaseBy(+1) }> +1</button>
            <button onClick={ ()=> increaseDecreaseBy(-1) }> -1 </button>
        </div>
    </>
  )
}
