import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from './cartSlice'
function Cart() {
    const cartData = useSelector((data) => data.cart)
    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(removeItem(id))
    }


    return (
    
    <div>

    <h1>Cart</h1>
        {console.log(cartData)}
    
        {
            cartData && cartData?.items?.map((item, index) => (
                <div  key={index}>{item.name} - ${item.price}
                <p><button onClick={() => handleRemove(item.id)} > Remove Item</button></p>
                </div>
                
            ))
        }

    </div>

  )
}

export default Cart