import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './articleSlice';
import categoryReducer from './categorySlice';

const store = configureStore({
    reducer: {
        articles: articleReducer,
        categories: categoryReducer,
        // Add a dummy reducer to avoid Redux error if no real reducers exist yet
        _dummy: (state = {}) => state,
    },
});

export default store;
