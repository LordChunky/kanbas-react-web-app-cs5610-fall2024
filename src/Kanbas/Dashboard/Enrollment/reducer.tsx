import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../../Database";
const initialState = {
    enrollments: enrollments,
};
const enrollmentsSlice = createSlice({
    name: "enrollments", // name the slice
    initialState, // set initial state
    
    // declare reducer functions
    reducers: {
        enrollCourse: (state, action) => { 
            const newEnrollment: any = {
                ...action.payload, 
                _id: new Date().getTime().toString()
            }
            state.enrollments = [...state.enrollments, newEnrollment] as any;        
        },
        
        unenrollCourse: (state, action) => { 
            state.enrollments = state.enrollments.filter(
            (e: any) => e.user !== action.payload.user && e.course !== action.payload.course);
        }
    },
});
// export all reducer functions
export const { enrollCourse, unenrollCourse} = enrollmentsSlice.actions;
// export reducer
export default enrollmentsSlice.reducer;

