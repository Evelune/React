
import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./CardSlice" 

const appStore = configureStore({
    reducer : {
        cart: cartReducer,
    },
});


export default appStore
