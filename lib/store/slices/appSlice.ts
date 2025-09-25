import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type AppState = {
  isBackgroundSmall: true
}

const initialState: AppState = {
  isBackgroundSmall: true,
}

const appSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setApp(state, action: PayloadAction<Partial<AppState>>) {
      const payload = action.payload
      state.isBackgroundSmall = payload.isBackgroundSmall ?? state.isBackgroundSmall
    },
  },
})

export const { setApp } = appSlice.actions
export default appSlice.reducer
