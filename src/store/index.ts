import { configureStore } from "@reduxjs/toolkit";
import appSlice from "containers/App/slice";
import notifierSlice from "components/Snackbar/slice";

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    notifier: notifierSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export default store
