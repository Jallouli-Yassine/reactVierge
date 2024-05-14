import {combineReducers, configureStore} from "@reduxjs/toolkit";
import wishlistReducer from "./whichlist/whichlistslice";
export const store = configureStore({
    reducer: {
        wishlist:wishlistReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;