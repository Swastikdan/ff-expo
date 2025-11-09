import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  searchQuery: string;
  searchPageNumber: number;
  searchPageFilter: 'all' | 'movie' | 'tv';
}

const initialState: SearchState = {
  searchQuery: '',
  searchPageNumber: 1,
  searchPageFilter: 'all',
};

const searchSlice = createSlice({
  name: 'COMMON',
  initialState,
  reducers: {
    setSearchQuery: (store, action: PayloadAction<string>) => {
      store.searchQuery = action.payload;
    },
    setSearchPageNumber: (store, action: PayloadAction<number>) => {
      store.searchPageNumber = action.payload;
    },
    setSearchPageFilter: (store, action: PayloadAction<SearchState['searchPageFilter']>) => {
      if (store.searchPageFilter === action.payload) return;
      store.searchPageFilter = action.payload;
    },
  },
});

export const searchSliceReducer = searchSlice.reducer;
export const { setSearchQuery, setSearchPageNumber, setSearchPageFilter } = searchSlice.actions;
