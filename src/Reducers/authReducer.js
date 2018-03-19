import { AUTHENTICATED } from '../Action_creators/authAction';

export default (state={}, action)=>{
    switch(action.type) {
        case AUTHENTICATED:
            return { 
                ...state, loggedin: true, payload: action.payload
            }
        default:
            return state;
    }
}