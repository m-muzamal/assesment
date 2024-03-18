import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [
        {
            id: 1,
            address: "Mambulo",
            postcode: "63",
            type: "Brass",
            rooms: 1,
            area: 61,
            value: false,
        },
        {
            id: 2,
            address: "Balbagay",
            postcode: "1",
            type: "Plexiglass",
            rooms: 2,
            area: 37,
            value: false,
        },
        {
            id: 3,
            address: "Karobokan",
            postcode: "981",
            type: "Rubber",
            rooms: 3,
            area: 41,
            value: false,
        },
        {
            id: 4,
            address: "Conchopata",
            postcode: "2238",
            type: "Wood",
            rooms: 4,
            area: 34,
            value: false,
        },
        {
            id: 5,
            address: "Coca",
            postcode: "2238",
            type: "Wood",
            rooms: 4,
            area: 34,
            value: false,
        },
        {
            id: 6,
            address: "Conco",
            postcode: "2238",
            type: "Wood",
            rooms: 4,
            area: 34,
            value: false,
        },
        {
            id: 7,
            address: "Yiyang",
            postcode: "0",
            type: "Glass",
            rooms: 5,
            area: 70,
            value: false,
        },
    ]
}

export const counterSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        checkedData: (state, action) => {
            const id = action.payload;
            return {
                ...state,
                data: state.data.map(item =>
                    item.id === id ? { ...item, value: !item.value } : item
                )
            };
        },
        selectedData: (state) => {
            return {
                ...state,
                data: state.data.filter(item => item.value === true)
            }
        }
    },
})

export const { checkedData, selectedData } = counterSlice.actions

export default counterSlice.reducer