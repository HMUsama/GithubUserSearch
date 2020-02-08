export const fetchData=(username)=>{
    return (dispatch,getState)=>{
        dispatch({ type:'LOADER' })
        // console.log("dispatch============>",dispatch)
        fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
          console.log("data--------->", data)
          dispatch({ type:'GET_USER_SUCCESS' ,data})
        })
        .catch((err) => {
            dispatch({ type:'GET_USER_ERROR',err });
        })
    }
}