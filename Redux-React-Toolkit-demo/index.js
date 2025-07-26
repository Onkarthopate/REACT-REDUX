const store = require('./app/store');
const { cakeActions } = require('./feature/cake/cakeSlice');
const { icecreamAction } = require('./feature/icecream/icecreamSlice');

console.log('Initial state:', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('Updated state:', store.getState());
});

// Dispatching actions
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

store.dispatch(icecreamAction.ordered());
store.dispatch(icecreamAction.ordered());
store.dispatch(icecreamAction.restocked(4));
unsubscribe();
