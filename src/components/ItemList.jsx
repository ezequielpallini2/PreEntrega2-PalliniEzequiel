import React from 'react'
import { Item } from './Item'

import Filter from "../assets/Filter"

const productsFiltered = ({ products, filterState, handleFilterChange }) => (
    
        <>
            <div className="w-25">
                <label>Ingrese el producto que quiere buscar</label>            
                <input className="form-control" type="text" value='' onChange={handleFilterChange} />
            </div>
            <h1>Productos</h1>
            { 
                filterState === '' ? 
                    products.map(product => <Item key={product.id} product={product} /> )  
                : 
                    products
                        .filter(product => product.name.toLowerCase().includes(filterState.toLowerCase()))
                        .map(product => <Item key={product.id} product={product} /> )  
            }
            
        </>

)




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