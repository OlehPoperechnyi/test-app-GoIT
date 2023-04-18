import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

export const initialState = {
    data: undefined,
    error: undefined,
    loading: false
};

export const getGitHubRepositories = createAsyncThunk(
    'ghRepositories/getGitHubRepositories',
    async ({search}, { rejectWithValue }) => {

        try {
            const {data} = await axios(`https://api.github.com/search/repositories?q=${search || 'react'}&per_page=100`)

            return data?.items;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const ghRepositories = createSlice({
    name: 'ghRepositories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getGitHubRepositories.pending, (state) => {
                state.loading = true;
                state.data = undefined;
                state.error = undefined;
            })
            .addCase(getGitHubRepositories.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.data = payload;
            })
            .addCase(getGitHubRepositories.rejected, (state, {payload}) => {
                console.log('payload',  payload?.message);
                state.loading = false;
                state.error = payload?.message;
            });
    },
});

export default ghRepositories.reducer;
