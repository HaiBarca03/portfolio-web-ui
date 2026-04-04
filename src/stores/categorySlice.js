import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axioscustom from './Axioscustom';

// Thunk to fetch categories
export const fetchCategories = createAsyncThunk(
  'categories/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await Axioscustom.get('/categories');
      // response is already transformed in Axioscustom interceptor if it has .data
      return response.data || response || [];
    } catch (error) {
      return rejectWithValue(error.message || 'Không thể tải danh mục');
    }
  }
);

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default categorySlice.reducer;
