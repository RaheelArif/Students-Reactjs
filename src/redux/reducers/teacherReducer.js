import TeacherAction from "../actions/teacherAction"
const initState = {
    teacher: [
        {name: "ahmed", age : "30"}
    ]
}
const TeacherReducer = (state = initState , action) => {
    switch(action.type){
        case TeacherAction.ADD_TEACHER :
           return {
            ...state,
            teacher : [...state.teacher, action.payload]
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