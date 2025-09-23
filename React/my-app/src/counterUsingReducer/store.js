import {createStore} from 'redux';

const initialState = {
    count: 0,
    totalClicks: 0
}

export const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case "INCREMENT": {
            return {
                ...state,
                count: state.count + 1,
                totalClicks: state.totalClicks + 1,
            }
        }
        case "DECREMENT": {
            return {
                ...state,
                count: state.count - 1,
                totalClicks: state.totalClicks + 1,                
            }
        }
        case "RESET": {
            return {
                count: 0,
                totalClicks: 0
            }
        }
        default:
            return state
    }
}

const store = createStore(counterReducer);

export default store;