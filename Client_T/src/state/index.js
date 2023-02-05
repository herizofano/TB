import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    mode: "dark",
    userId: "63701cc1f03239b7f700000e",
}


export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers:{
        setMode: (state) =>{
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
          },
          setLogout: (state) => {
            state.user = null;
            state.token = null;
          },
          setFriends: (state, action) => {
            if (state.user) {
              state.user.friends = action.payload.friends;
            } else {
              console.error("user friends non-existent :(");
            }
          },
          setTransactions: (state, action) => {
            state.transactions = action.payload.transactions;
          },
          setTransaction: (state, action) => {
            const updatedTransactions = state.transactions.map((transaction) => {
              if (transaction._id === action.payload.transaction._id) return action.payload.transaction;
              return transaction;
            });
            state.transactions = updatedTransactions;
          },
    }
})

export const { setMode, setFriends, setLogin, setLogout, setTransaction, setTransactions } = globalSlice.actions;


export default globalSlice.reducer;