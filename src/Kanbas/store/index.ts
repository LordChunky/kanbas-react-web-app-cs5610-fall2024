import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import accountReducer from "../Account/reducer";
import assignmentReducer from "../Courses/Assignments/reducer";
import enrollmentsReducer from "../Dashboard/Enrollment/reducer"
import courseReducer from "../Dashboard/Courses/reducer"

const store = configureStore({
    reducer: {
        modulesReducer,
        accountReducer,
        assignmentReducer,
        courseReducer,
        enrollmentsReducer,
    },
});
export default store;