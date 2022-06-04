import { configureStore } from '@reduxjs/toolkit';
import musicReducer from '../components/music/MusicSlice';

export const store = configureStore({
  reducer: {
    musicResults: musicReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch