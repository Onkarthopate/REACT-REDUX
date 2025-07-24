export const addToCart = product =>{
    return{
        type:'Add_To_Cart',
        payload:product
    }
}

export const incrementQty = (id) => ({
  type: 'INCREMENT_QTY',
  payload: id,
});

export const decrementQty = (id) => ({
  type: 'DECREMENT_QTY',
  payload: id,
});

export const removeFromCart = id => ({
  type: 'REMOVE_FROM_CART',
  payload: id
});