import { GETCATEGORY, UNAUTHENTICATED } from '../Action_creators/categoryAction'
import _ from 'lodash';

export default (state={}, action)=>{
    switch(action.type) {
        case GETCATEGORY:
        return {
            ...action.payload
        }
        case UNAUTHENTICATED:
            return {  ...state,  categories: {} };
        default:
            return state;
    }
}