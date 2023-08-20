import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import fetchSkillReducer from "./Slices/fetchSkill"


const store = configureStore({
    reducer: fetchSkillReducer,
    middleware:[thunk]
})

export default store