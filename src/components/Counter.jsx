import { useState } from "preact/hooks";

export function Counter () {
  const [counter, setCounter] = useState(0)
  return (
    <>
    <span class="text-xl mr-2">{counter}</span>
    <button class="border px-4 py-2 text-xl" onClick={() => setCounter(counter => counter +1)}>+</button>
    <button class="border px-4 py-2 text-xl" onClick={() => setCounter(counter => counter - 1)}>-</button>
    </>
  )
}