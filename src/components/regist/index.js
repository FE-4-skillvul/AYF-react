import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListUser } from '../../actions/userAction';

function ListUser() {
    const { getListUserResult, getListUserLoading, getListUserError} = useSelector((state)=> state.UserReducer)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getListUser())
    }, [dispatch])


  return (
    <div>
        <h4>List User</h4>
        {getListUserResult ? (
            getListUserResult.map((user)=>{
                return(
                    <p key={user.id}>{user.username} - {user.email}</p>
                )
            })
        ): getListUserLoading ? (
           <p>Loading....</p>
        ): (
            <p>{getListUserError ? getListUserError : "DATA KOSONG"}</p>
        )}
    </div>
  )
}

export default ListUser