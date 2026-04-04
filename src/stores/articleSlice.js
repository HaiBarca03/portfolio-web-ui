import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axioscustom from './Axioscustom';

// Thunk to fetch articles
export const fetchArticles = createAsyncThunk(
  'articles/fetchAll',
  async (params = { status: 'PUBLISHED' }, { rejectWithValue }) => {
    try {
      const response = await Axioscustom.get('/articles', { params });
      // response is already transformed in Axioscustom interceptor if it has .data
      return response.data || response || [];
    } catch (error) {
      return rejectWithValue(error.message || 'Không thể tải bài viết');
    }
  }
);

// Thunk to create a new article
export const createArticle = createAsyncThunk(
  'articles/create',
  async (articleData, { rejectWithValue, dispatch }) => {
    try {
      const response = await Axioscustom.post('/articles', articleData);
      // After creating, we might want to refresh the list if it's published
      if (articleData.status === 'PUBLISHED') {
        dispatch(fetchArticles({ status: 'PUBLISHED' }));
      }
      return response.data || response;
    } catch (error) {
      return rejectWithValue(error.message || 'Không thể tạo bài viết');
    }
  }
);

const articleSlice = createSlice({
  name: 'articles',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearArticles: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createArticle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createArticle.fulfilled, (state, action) => {
        state.loading = false;
        // Optimization: push to items if it matches current filter, 
        // but fetchArticles above already handles refresh if needed.
        // state.items.unshift(action.payload);
      })
      .addCase(createArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearArticles } = articleSlice.actions;
export default articleSlice.reducer;
