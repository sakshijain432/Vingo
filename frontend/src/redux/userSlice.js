import {createSlice} from '@reduxjs/toolkit'


const userSlice = createSlice({
    name:"user",
    initialState:{
        userData:null,
        city:null
    },
    reducers:{   // to play with state(state) and set its value(action)
        setUserData : (state, action) => {
            state.userData = action.payload;
        },
        setCity : (state,action) => {
            state.city = action.payload;
        }
    }
})

export const {setUserData,setCity} = userSlice.actions
export default userSlice.reducer
