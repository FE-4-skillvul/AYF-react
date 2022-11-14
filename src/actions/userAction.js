import axios from "axios"

export const GET_LIST_USER = "GET_LIST_USER"
export const ADD_USER = "ADD_USER"

export const getListUser = () =>{
    return (dispatch)=>{
        dispatch({
            type : GET_LIST_USER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
            method : "GET",
            url : "https://63496bd50b382d796c86192b.mockapi.io/users",
            timeout: 120000
        })
            .then((res)=>{
                dispatch({
                    type : GET_LIST_USER,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err)=>{
                dispatch({
                    type : GET_LIST_USER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })


    }
}

export const addUser = (data) =>{
    return (dispatch)=>{
        dispatch({
            type : ADD_USER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
            method : "POST",
            url : "https://63496bd50b382d796c86192b.mockapi.io/users",
            timeout: 120000,
            data: data
        })
            .then((res)=>{
                dispatch({
                    type : ADD_USER,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err)=>{
                dispatch({
                    type : ADD_USER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })


    }
}