import axios from "axios"

export const GET_LIST_USER = "GET_LIST_USER"
export const ADD_USER = "ADD_USER"
export const ADD_POST = "ADD_POST"
export const LOGOUT = "LOGOUT" 
export const UPDATE_PUBLISH = "UPDATE_PUBLISH"
export const UNPUBLISH = "UNPUBLISH"


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

export const addPost = (data) =>{
  let getLS = localStorage.getItem("USER_ID")
  let obj = JSON.parse(getLS)
  let id = obj.id
  
    return (dispatch)=>{
        dispatch({
            type : ADD_POST,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
    
        axios({
            
            method : "POST",
            url : "https://63496bd50b382d796c86192b.mockapi.io/users/"+`${id}`+"/threads",
            timeout: 120000,
            data: data
           
        })
            .then((res)=>{
                dispatch({
                    type : ADD_POST,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err)=>{
                dispatch({
                    type : ADD_POST,
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

export const Logout = () =>{
    const deleteData = localStorage.removeItem("USER_ID")
    return (dispatch)=>{
        dispatch({
            type : LOGOUT,
            payload: {
                data: deleteData
            }
        })
    }
}

export const updatePublish = (id,uid) =>{
    
    return(dispatch)=>{
        //loading dispatch
        dispatch({
            type:UPDATE_PUBLISH,
            payload:{
                loading:true,
                data:false,
                errorMessage:false
            }
        })
        fetch(`https://63496bd50b382d796c86192b.mockapi.io/users/${uid}/threads/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                publish: true
            }),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        })
    .then((res) => res.json())
        .then((res)=>{
            dispatch({
                type:UPDATE_PUBLISH,
                payload:{
                    loading:false,
                    data:res.data,
                    errorMessage:false
                }
            })
        })
        .catch((err)=>{
            dispatch({
                type:UPDATE_PUBLISH,
                payload:{
                    loading:false,
                    data:false,
                    errorMessage:err.message
                }
            })
        })
    }
}

export const unPublish = (id,uid) =>{
    return(dispatch)=>{
        //loading dispatch
        dispatch({
            type:UNPUBLISH,
            payload:{
                loading:true,
                data:false,
                errorMessage:false
            }
        })

        fetch(`https://63496bd50b382d796c86192b.mockapi.io/users/${uid}/threads/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                publish: false
            }),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        })
    .then((res) => res.json())
        .then((res)=>{
            dispatch({
                type:UNPUBLISH,
                payload:{
                    loading:false,
                    data:res.data,
                    errorMessage:false
                }
            })
        })
        .catch((err)=>{
            dispatch({
                type:UNPUBLISH,
                payload:{
                    loading:false,
                    data:false,
                    errorMessage:err.message
                }
            })
        })
    }
}