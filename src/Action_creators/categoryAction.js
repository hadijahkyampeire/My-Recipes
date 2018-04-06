
import Axiosinstance from './AxiosInstance'
import { notify } from 'react-notify-toast';

const BASE_URL='http://localhost:5000/api/v1'
const ADDCATEGORY = 'addcategory'
export const GETCATEGORY = 'getcategories'
export const UNAUTHENTICATED ='non_users'

const Addcategory =(response)=>{
    return{
        'type': ADDCATEGORY,
        'payload': response.data.message
    }
}

export const Fetchcategories =(response)=>{
    console.log(response)
    return{
        'type': GETCATEGORY,
        'payload': response.data
    }
}

export const AddCategoryAction =(data)=>{
    return async (dispatch)=>{
        await Axiosinstance.post(`${BASE_URL}/categories/`, data)
        .then(response=>{
            dispatch(Addcategory(response));
            notify.show(response.data.message, 'success', 4000)

        }).catch(error=>{
            if(error.response){
                notify.show(error.response.data.message, 'error', 4000)

            }else if(error.request){
                notify.show('Request errored', 'error', 4000)
            }
        });        
    }
}

export const FetchCategoriesAction =(data)=>{
    return async (dispatch)=>{
        await Axiosinstance.get(`${BASE_URL}/categories/`, data)
        .then(response=>{
            console.log(response.data)
            dispatch(Fetchcategories(response));
            notify.show(response.data.message, 'success', 4000)

        }).catch(error=>{
            if(error.response){
                notify.show(error.response.data.message, 'error', 4000)

            }else if(error.request){
                notify.show('Request errored', 'error', 4000)
            }
        });        
    }
}
