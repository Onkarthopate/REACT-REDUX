const { createStore } = require("redux");
const {combineReducers} =require("redux");
// action type 
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// action creator function 
const buyCake = ()=>{
    return{
        type:BUY_CAKE
    }
}

const buyIceCream = ()=>{
    return {
        type:BUY_ICECREAM
    }
}

// initial state
const initialCakeState = {
    numOfCake : 10,
};

const initialIceCreamState = {
    numOfIceCream :20
};


// reducer function
const cakeReducer = (state = initialCakeState , action)=>{
    switch (action.type) {
        case BUY_CAKE:
            return{
                ...state,
                numOfCake : state.numOfCake - 1
            }
        default: 
        return state;
    }
};

const IceCreamReducer = (state = initialIceCreamState , action)=>{
    switch (action.type) {
       case BUY_ICECREAM:
            return{
                ...state,
                numOfIceCream : state.numOfIceCream - 1
            }    
        default: 
        return state;
    }
};


// combine reducer

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream :IceCreamReducer
})
// store
const store= createStore(rootReducer);
console.log('initial state: ', store.getState());
const unsubscribe = store.subscribe(()=>{console.log('updated state',store.getState());
})
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();  