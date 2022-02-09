import {ADDTASK} from "../types"

export const addTask=(task)=>{
    return{
        type: ADDTASK,
        payload :task
    }
}