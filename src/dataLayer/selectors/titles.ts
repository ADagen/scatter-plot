import { createStructuredSelector } from 'reselect';
import { RootState } from '../RootState';

export type Titles = {
    title?: string;
    xTitle?: string;
    yTitle?: string;
};

export const selectTitle = (state: RootState) => state.plotData?.title;
export const selectXTitle = (state: RootState) => state.plotData?.xTitle;
export const selectYTitle = (state: RootState) => state.plotData?.yTitle;

export const selectTitles = createStructuredSelector<RootState, Titles>({
    title: selectTitle,
    xTitle: selectXTitle,
    yTitle: selectYTitle,
});
