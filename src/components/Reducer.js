import * as types from './Actiontype'

const initialState ={
 name: localStorage.getItem('name') ?? '',
 password: localStorage.getItem('token') ?? '',
}

export function Reducer (state = initialState,action){
    switch(action.type){
        case types.LOGIN_SUCCESS:
        return{
            ...state,
            name: action.payload.name,
            password:action.payload.password,           
        }
        default:
            return state;
        }
}