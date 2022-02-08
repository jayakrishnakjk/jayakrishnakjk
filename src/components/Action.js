import * as types from './Actiontype'


const  LoginSuccess = (name,password) =>({
    type: types.LOGIN_SUCCESS,
    payload: {name,password}
    

})

export const loginInitiate = (email,password,history)=>{
    
    return function(dispatch){
            dispatch(LoginSuccess(email,password))
            localStorage.setItem('name',email)
            localStorage.setItem('password',password)
    }
}






