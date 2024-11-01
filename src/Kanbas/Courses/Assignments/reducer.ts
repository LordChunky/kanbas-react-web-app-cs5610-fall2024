import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
    assignments: assignments,
};
const assignmentsSlice = createSlice({
    name: "assignments", // name the slice
    initialState, // set initial state
    
    // declare reducer functions
    reducers: {
        addAssignment: (state, { payload: assignment }) => { // new assignment is in action.payload
        const newAssignment: any = { // update modules in state adding new module
            _id: new Date().getTime().toString(), // at beginning of array. Override _id with timestamp
            title: assignment.title, 
            description: assignment.description,
            course: assignment.course, 
            not_available_until_day: assignment.not_available_until_day, 
            not_available_until_date_val: assignment.not_available_until_date_val,
            not_available_until_time: assignment.not_available_until_time,
            due_day: assignment.due_day,
            due_date_val: assignment.due_date_val,
            due_time: assignment.due_time, 
            points: assignment.points
        };
        state.assignments = [...state.assignments, newAssignment] as any;
        },

        // assignment's ID to delete is in action.payload filter out assignment to delete
        deleteAssignment: (state, { payload: assignmentId }) => { 
            
        state.assignments = state.assignments.filter(
            (a: any) => a._id !== assignmentId);
        },

        // assignment to update is in action.payload replace assignment whose ID matches action.payload._id
        // Also update the points, Due date, available from and until, ...
        updateAssignment: (state, { payload: assignment }) => {
        state.assignments = state.assignments.map((a: any) =>
            a._id === assignment._id ? assignment : a
        ) as any;
        },
        // select the assignment to edit (select the right module using the assignmentId)
        editAssignment: (state, { payload: assignmentId }) => {
        state.assignments = state.assignments.map((a: any) =>
            a._id === assignmentId ? { ...a, editing: true } : a
        ) as any;
        },
    },
});
// export all reducer functions
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } = assignmentsSlice.actions;
// export reducer
export default assignmentsSlice.reducer;

