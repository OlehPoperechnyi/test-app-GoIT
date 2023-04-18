import { configureStore } from '@reduxjs/toolkit';
import ghRepositories from './ghRepositories/slice';

const setupStore = (preloadedState) => {
    return configureStore({
        reducer: {
            ghRepositories,
        },
        preloadedState
    });
};

export default setupStore;
