import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import UserAuthReducer from './UserAuthSlice/UserAuthSlice';
import { combineReducers } from "redux";


const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    userAuth: UserAuthReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)



export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
})


export const persistor = persistStore(store)