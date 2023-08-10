import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	eng: ["Катаегории","Страны","О нас"],
	ru: ["Categories","Countries","About us"],
}

export const navSlice = createSlice({
	name: "nav",
	initialState,
})

export default navSlice.reducer