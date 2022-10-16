import { configureStore } from '@reduxjs/toolkit'
import songManagerReducer from './songManagerReducer'
import storage from 'redux-persist/lib/storage'
import {

    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { combineReducers } from '@reduxjs/toolkit'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    // stateReconciler: autoMergeLevel2
}
const reducer = combineReducers({
    songManager: songManagerReducer
})
const persistedReducer = persistReducer(persistConfig, reducer)



export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
