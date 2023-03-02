import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "store/index"

const initialState = {
  setting: {}
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateThemeSetting(state, action) {
      state.setting = action.payload
    },
    clearThemeSetting(state) {
      state.setting = {}
    }
  }
})

export const { updateThemeSetting, clearThemeSetting } = appSlice.actions

export const selectThemeSetting = (state: RootState) => state.app.setting

export default appSlice
