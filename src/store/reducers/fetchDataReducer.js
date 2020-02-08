const initState = {
    loading:false,
}
const fetchDataReduces =( state = initState,action )=>{
    switch (action.type) {
        case "GET_USER_SUCCESS":
            console.log("GET_USER_SUCCESS===>",action)
            return {
                loading:false,
                User:action
            }
        case "LOADER":
            console.log("LOADER")
            return {
                loading:true,
            }
        default:
            return state
    }
}

export default fetchDataReduces;