import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../../Database";
const initialState = {
    courses: courses,
};
const coursesSlice = createSlice({
    name: "courses", // name the slice
    initialState, // set initial state
    
    // declare reducer functions
    reducers: {
        addCourse: (state, action) => { 
            state.courses = [
                ...state.courses,
                // Actions serve as messengers that convey information from your application to the Redux store. Payload is the component that carries data to be processed by reducers.
                {...action.payload, _id: new Date().getTime().toString()}
                
            ] as any;
        },

        deleteCourse: (state, action) => { 
            state.courses = state.courses.filter(
            (c: any) => c._id !== action.payload._id) as any;
        },


        updateCourse: (state, action) => { 
            state.courses = state.courses.map((c:any ) => {
                if (c._id === action.payload._id) {
                  return action.payload._id;
                } else {
                  return c;
                }

                // ternary operator version
                // return c._id === action.payload._id ? action.payload._id : c;
              }) as any;
        },

        setCourse: (state, action) => {
            state.courses = action.payload
        }
    },
});
// export all reducer functions
export const { addCourse, deleteCourse, updateCourse, setCourse} = coursesSlice.actions;
// export reducer
export default coursesSlice.reducer;

