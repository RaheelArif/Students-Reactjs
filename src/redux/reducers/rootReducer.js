import { combineReducers } from "redux";
import StudentReducer from "./studentReducer";
import TeacherReducer from "./teacherReducer";
const rootReducer = combineReducers({
StudentReducer,
TeacherReducer


})
export default rootReducer;