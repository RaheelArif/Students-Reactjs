const initState = {
    teacher: [
        {name: "ahmed", age : "30"}
    ]
}
const TeacherReducer = (state = initState , action) => {
    switch(action.type){
        case "ADD_TEACHER":
           return {
            ...state,
            name: "ASGHAR",
            age:40
           };
           case "DELETE_TEACHER":
                return{
                    ...state
                }
    
        default:
           return{
               ...state
           }
    }
}
export default TeacherReducer;