import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../../Database";
const initialState = {
    enrollments: [],
};
const enrollmentsSlice = createSlice({
    name: "enrollments", // name the slice
    initialState, // set initial state
    
    // declare reducer functions
    reducers: {
        setEnrollments: (state, action) => {
            state.enrollments = action.payload;
        },
        enrollCourse: (state, { payload: enrollCourseInfo }) => { 
            const newEnrollment: any = {
                course: enrollCourseInfo.course,
                user: enrollCourseInfo.user, 
                _id: new Date().getTime().toString()
            }
            state.enrollments = [...state.enrollments, newEnrollment] as any;        
        },
        unenrollCourse: (state, { payload: enrollCourseId }) => { 
            state.enrollments = state.enrollments.filter(
            (e: any) => e._id !== enrollCourseId);
        }
    },
});
// export all reducer functions
export const { enrollCourse, unenrollCourse, setEnrollments} = enrollmentsSlice.actions;
// export reducer
export default enrollmentsSlice.reducer;

