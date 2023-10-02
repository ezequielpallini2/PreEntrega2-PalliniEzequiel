import React from 'react'
import { Item } from './Item'


const ItemList = ({eventos}) => {

  return (
    <div className='container'>
        <h2></h2>
        <div className="container" id="container">
            
             {eventos.map((event) => <Item evento={event} key={event.id} />)             }
             {/*  <Filter evento={eventos}>
                { productsFiltered }
            </Filter>*/}

        </div>



    </div>)
    


}

export default ItemList