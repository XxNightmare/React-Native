import { useState } from 'react'

export const useCounter = () => {
    const [count, setCount] = useState<number>(10)

    const increaseDecreaseBy = (value: number) => {
        setCount(count + value);
    }

    return {
        count, increaseDecreaseBy,
    }
}
