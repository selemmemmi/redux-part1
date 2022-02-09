import { ADDTASK } from "../types";

const initState = {
  todos: [

  ],
};

function TodoReducer(state = initState, action) {
  switch (action.type) {
    case ADDTASK:
      return {
        todos:[...state.todos ,{id:Math.random() , task:action.payload , done :false}]
      };
    default:
      return state;
  }
}
export default TodoReducer;
