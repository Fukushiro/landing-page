import { configureStore } from "@reduxjs/toolkit";
import { loadState } from "../utils/save";
import { counterReducer } from "./slices/counterSlice";
import { languageReducer } from "./slices/languageSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    language: languageReducer,
  },
  preloadedState: loadState(),
});

export const store2 = configureStore({
  reducer: {
    counter: counterReducer,
    language: languageReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
