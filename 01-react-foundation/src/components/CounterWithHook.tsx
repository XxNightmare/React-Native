import { useCounter } from "../hooks/useCounter"

export const CounterWithHook = () => {
    const {count, increaseDecreaseBy} = useCounter();
    
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
