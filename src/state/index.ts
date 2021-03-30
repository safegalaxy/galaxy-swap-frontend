import { configureStore } from '@reduxjs/toolkit'
import farmsReducer from './farms'
import toastsReducer from './toasts'
import poolsReducer from './pools'
import pricesReducer from './prices'
import profileReducer from './profile'
import achievementsReducer from './achievements'
import blockReducer from './block'

export default configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    farms: farmsReducer,
    toasts: toastsReducer,
    pools: poolsReducer,
    prices: pricesReducer,
    profile: profileReducer,
    achievements: achievementsReducer,
    block: blockReducer,
  },
})
