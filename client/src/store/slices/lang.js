import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	value: ["ENG","RU"],
	defValue: "ENG"
}

export const langSlice = createSlice({
	name: "lang",
	initialState,
	reducers:{
		setLang: (state,action) => {
			state.defValue = action.payload
		}
	}
})

export const {setLang} = langSlice.actions
export default langSlice.reducer