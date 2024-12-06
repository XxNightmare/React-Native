import React from 'react'

export const BasicFunctions = () => {

    const addFunctions = (a:number, b:number): number => {
        return a + b
    }
  return (
    <>
        <h1>La suma de 2 + 4 es: {addFunctions(2, 4)} </h1>
    </>
  )
}
