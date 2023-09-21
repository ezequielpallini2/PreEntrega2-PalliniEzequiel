import { useState } from "react"

const ItemCounter = ({ initial, stock, onAdd}) => {
    const [counter, setCounter] = useState(initial)
    const handleAdd = () =>{
        if (counter < stock){
            setCounter(counter+1)
        }
    }

    const handleSub = () => {
        if (counter > initial){
            setCounter(counter-1)
        }
    }

    const handleOnAdd = () => {
        onAdd(counter)
    }

  return (
    <center>
        
        <button onClick={handleSub}> - </button>
        <label>
            <strong> { counter } </strong>
        </label>
        <button onClick={handleAdd}> + </button>
        <button onClick={handleOnAdd}>Seleccionar cantidad</button>
    </center>
  )
}

export default ItemCounter