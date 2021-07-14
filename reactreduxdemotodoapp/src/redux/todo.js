import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const todo = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      const item = {
        userId: 1,
        id: state.items.length + 1,
        title: action.payload,
        completed: false
      };
      state.items.push(item);
    },
    setTodos(state, action) {
      state.items = action.payload;
    }
  }
});

export const { addTodo, setTodos } = todo.actions;

export const fetchTodos = () => async (dispatch) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  dispatch(setTodos(res.data.slice(0, 5)));
};

export default todo.reducer;
