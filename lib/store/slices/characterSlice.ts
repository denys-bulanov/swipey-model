import { getCharacter } from '@/src/api/characterApi'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

export type CharacterState = {
  name: string | null
  age: string | null
  loading: boolean
  error: string | null
  data: any | null
  picture: string | null
  price: string | null
  verified: string | null
  slug: string | null
  previewVideo: string | null
}

export const fetchCharacter = createAsyncThunk('character/fetchCharacter', async (slug: string) => {
  return await getCharacter(slug)
})

const initialState: CharacterState = {
  name: null,
  age: null,
  loading: false,
  error: null,
  data: null,
  picture: null,
  price: null,
  verified: null,
  slug: null,
  previewVideo: null,
}

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setCharacter(state, action: PayloadAction<Partial<CharacterState>>) {
      const payload = action.payload
      state.name = payload.name ?? state.name
      state.age = payload.age ?? state.age
      state.data = payload.data ?? state.data
      state.picture = payload.picture ?? state.picture
      state.price = payload.price ?? state.price
      state.verified = payload.verified ?? state.verified
      state.slug = payload.slug ?? state.slug
      state.previewVideo = payload.previewVideo ?? state.previewVideo
      state.error = null
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCharacter.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCharacter.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.name = action.payload.name
        state.age = action.payload.age
        state.data = action.payload.data
        state.picture = action.payload.picture
        state.price = action.payload.price
        state.verified = action.payload.verified
        state.slug = action.payload.slug
        state.previewVideo = action.payload.previewVideo
      })
      .addCase(fetchCharacter.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Something went wrong'
      })
  },
})

export const { setCharacter } = characterSlice.actions
export default characterSlice.reducer
