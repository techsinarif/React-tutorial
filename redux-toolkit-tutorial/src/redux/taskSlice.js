import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
  name: 'task',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
			const newTask = {
				id: new Date(),
				name: action.payload.task
			}
			state.push(newTask);
    },
    deleteTask: (state, action)=>{
			return state.filter((item) => item.id !== action.payload.id);
		}
  },
})

// Action creators are generated for each case reducer function
export const { addTask, deleteTask } = taskSlice.actions

export default taskSlice.reducer