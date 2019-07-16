

class TeacherAction{
    static ADD_TEACHER = "ADD_TEACHER";
    static DELETE_TEACHER = "DELETE_TEACHER";


    static addTeacher = (data) => {
        return{
          type: this.ADD_TEACHER,
          payload: data
        }
    }



}
export default TeacherAction;
