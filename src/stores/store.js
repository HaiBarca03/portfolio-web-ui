import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        // Add a dummy reducer to avoid Redux error if no real reducers exist yet
        _dummy: (state = {}) => state,
    },
});

export default store;
