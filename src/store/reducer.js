//import * as actionType from './action';

const initialState = {
    counter:0
}

const reducer = (state=initialState,action) => {
    switch(action.type) {
        case 'ADD':
            return {  
                ...state,              
                counter: state.counter + action.value
            }
        case 'SUBSTRACT':
             return {
                 ...state,
                counter: state.counter - action.value
            }
        case 'MULTIPLY':
            return {
                ...state,
                counter: state.counter * action.value
            }
        default:
            return state;
    }
}

export default reducer;
