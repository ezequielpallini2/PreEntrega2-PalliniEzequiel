import React from 'react'
import { Item } from './Item'

const ItemList = ({eventos}) => {

  return (
    <div className='container'>ItemList 
        <h2>Eventos</h2>
        <div className="container-fluid">
            
            {eventos.map((event) => <Item evento={event} key={event.id} />)
             }

        </div>



    </div>)
    


}

export default ItemList