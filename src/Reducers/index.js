const reducer =(state, action) =>{
    switch (action.type) {
        case 'GET_API_DATA':
            return{
                ...state,
                data:{...action.payload},
                pagesdata:{}
            }
        case 'GET_PAGES_DATA':
            return{
                ...state,
                data:{...state.data,
                        pagesdata:action.payload}
            }
        case 'GET_SEARCH_SOURCE':
            // if(action.payload===""){
            //     fetch('http://localhost:3000/initalState')
            //     .then(response => response.json())
            //     .then(dataResponse => props.getAPIData(dataResponse))
            // }
            return{
                ...state,
                isSearch:action.payload===""?false:true,
                search: action.payload===""?[]
                        :state.data?.results?.filter(item => item.name.includes(action.payload))
            }
        default:
            return state
    }
}
export default reducer