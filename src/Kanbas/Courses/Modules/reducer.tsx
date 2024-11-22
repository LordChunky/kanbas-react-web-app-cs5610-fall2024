import { createSlice } from "@reduxjs/toolkit";
// import { modules } from "../../Database";
const initialState = {
    modules: [],
};
const modulesSlice = createSlice({
    name: "modules", // name the slice
    initialState, // set initial state
    
    // declare reducer functions
    reducers: {
        setModules: (state, action) => {
            state.modules = action.payload;
        },
      
        addModule: (state, { payload: module }) => { // new module is in action.payload
        const newModule: any = { // update modules in state adding new module
            _id: new Date().getTime().toString(), // at beginning of array. Override _id with timestamp
            
            lessons: [],
            name: module.name,
            course: module.course,
        };
        state.modules = [...state.modules, newModule] as any;
        },
        // module's ID to delete is in action.payload filter out module to delete
        deleteModule: (state, { payload: moduleId }) => { 
            
        state.modules = state.modules.filter(
            (m: any) => m._id !== moduleId);
        },
        // module to update is in action.payload replace module whose ID matches action.payload._id
        updateModule: (state, { payload: module }) => {
        state.modules = state.modules.map((m: any) =>
            m._id === module._id ? module : m
        ) as any;
        },
        // select the module to edit (select the right module using the moduleId)
        editModule: (state, { payload: moduleId }) => {
        state.modules = state.modules.map((m: any) =>
            m._id === moduleId ? { ...m, editing: true } : m
        ) as any;
        },
    },
});
// export all reducer functions
export const { addModule, deleteModule, updateModule, editModule, setModules} = modulesSlice.actions;
// export reducer
export default modulesSlice.reducer;