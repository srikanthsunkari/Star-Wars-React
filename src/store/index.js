import { configureStore } from '@reduxjs/toolkit'
import appSlicer from '../common/appSlicer'

export default configureStore({
  reducer: {
    app: appSlicer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true, serializableCheck: true }),
})