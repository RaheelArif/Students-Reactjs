const initState = {
    student : [
        {   name: "raheel",age: "18"},
        {  name: "ali", age: "18"}
    ]
}
const StudentReducer = (state = initState , action) => {
    switch (action.type) {
        case "ADD_STUDENT":
           return {
            ...state,
            name: "abc",
            age:20
           };
           case "DELETE_STUDENT":
                return{
                    ...state
                }
    
        default:
           return{
               ...state
           }
    }
}
export default StudentReducer;