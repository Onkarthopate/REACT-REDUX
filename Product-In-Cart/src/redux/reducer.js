
const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Add_To_Cart':
      const exists = state.items.find(item => item.id === action.payload.id);
      if (exists) return state; // prevent duplicate
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };

    case 'INCREMENT_QTY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case 'DECREMENT_QTY':
      return {
        ...state,
        items: state.items
          .map(item =>
            item.id === action.payload ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
          )
          .filter(item => item.quantity > 0),
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };

    default:
      return state;
  }
};

export default reducer;
