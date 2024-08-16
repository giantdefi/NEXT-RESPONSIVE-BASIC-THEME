import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogin: false,
  isActive : false,
  username: false,
  sponsor: false, // object
  token: false,
  wallet : false,
 
}

export const AuthSlice = createSlice({
  name: 'auth', // specified name for this reducer. You can see this name on redux toolkit action
  initialState,
  reducers: {
   
    setIsLogin: (state, action) => {
      state.isLogin = action.payload
    },
    setIsActive: (state, action) => {
      state.isActive = action.payload
    },
    setUsername: (state, action) => {
      state.username = action.payload
    },
   
    setToken: (state, action) => {
      state.token = action.payload
    },
   setWallet: (state, action) => {
      state.wallet = action.payload
    },
  
  
   
    setLogout: () => initialState
  }

})

export const { setLogout,setIsLogin, setUsername, setIsActive, setToken, setWallet, 
  
  

} = AuthSlice.actions

export default AuthSlice.reducer
