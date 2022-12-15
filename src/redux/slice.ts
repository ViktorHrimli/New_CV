import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import { fetchData, typeUser } from "./Api";
type StateTypes = {
  todo: typeUser[];
  jobs: string;
};

const initialState: StateTypes = {
  todo: [],
  jobs: "",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, actions: PayloadAction<string>) {
      state.jobs = actions.payload;
    },
  },
  extraReducers: {
    [fetchData.pending.type]: (state, actions) => {},
    [fetchData.fulfilled.type]: (state, actions: PayloadAction<typeUser>) => {
      state.todo.push(actions.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
// (builder) => {
//     builder
//       .addCase(fetchData.pending, (state, actions) => {})
//       .addCase(fetchData.fulfilled, (state, actions: AnyAction) => {
//         state.todo.push(actions.payload);
//       });
//   },
