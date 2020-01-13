import { DataState } from 'core/DataState';
import { RootState } from '../RootState';

export const selectIsLoading = (state: RootState) => state.dataState === DataState.LOADING;
export const selectIsError   = (state: RootState) => state.dataState === DataState.ERROR;
export const selectIsReady   = (state: RootState) => state.dataState === DataState.READY;