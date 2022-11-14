import { GET_LIST_USER, ADD_USER } from "../../actions/userAction"

const initialState = {
    getListUserResult: false,
    getListUserLoading: false,
    getListUserError: false,

    addUserResult: false,
    addUserLoading: false,
    addUserError: false,
}

const user = (state = initialState, action) =>{
    switch(action.type){

        case GET_LIST_USER:
            return{
                ...state,
                getListUserResult: action.payload.data,
                getListUserLoading: action.payload.loading,
                getListUserError: action.payload.errorMessage,
            }

        case ADD_USER:
            return{
                ...state,
                addUserResult: action.payload.data,
                addUserLoading: action.payload.loading,
                addUserError: action.payload.errorMessage,
            }

        default : 
        return state
    }
}

export default user