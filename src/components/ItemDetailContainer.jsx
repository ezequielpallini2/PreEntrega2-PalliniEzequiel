import React, { useEffect } from 'react'
import ItemDetail from './ItemDetail';
const pedirItemPorID = (id) => {
    return new Promise((resolve, reject)=>
    {
        
        const item = data.find((el) => el.id === id);

        if (item) {
            resolve(item);
        } else {
            reject({
                error: "Producto inexistente :("
            })
        }

    })
}



const ItemDetailContainer = ({itemID}) => {
    const[item, setItem] = useState(null); 

    useEffect(() => {
      pedirItemPorID(itemID)
      .then((res)=> {
        setItem(res);
      })
    }, [itemID])
    

    return (
        <div>
            {item &&
            <ItemDetail item={item} />
            }
        </div>
    )
}

export default ItemDetailContainer