import { SET_ERROR, SET_PRELOADER } from "../types/preloader";

export const setPreloader = (isFetching) => ({
    type: SET_PRELOADER,
    isFetching
});

export const setError = (error) => ({
    type: SET_ERROR,
    error
})