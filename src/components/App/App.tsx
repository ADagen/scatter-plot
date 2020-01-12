import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './App.css';
import { Loader } from '../Loader';
import { Plot } from '../Plot';
import { Error } from '../Error';
import { plotActions } from '../../dataLayer/actions';
import { dataset1, dataset2, dataset3 } from '../../core/predefinedDatasets';
import {
    selectIsLoading,
    selectIsReady,
    selectIsError,
} from '../../dataLayer/selectors';

type UrlInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;

/**
 * Общий хук для управления загрузкой датасетов
 */
function useControlPanel() {
    const [urlInput, setUrlInput] = useState('');
    const handleInputChange: UrlInputHandler = event => setUrlInput(event.currentTarget.value);

    const dispatch = useDispatch();
    const queryDatasetBase = (url: string) => dispatch(plotActions.PLOT_LOAD_START({ url }));
    const queryDatasetCustom = () => queryDatasetBase(urlInput);

    return {
        urlInput,
        handleInputChange,
        queryDatasetCustom,
        queryDataset1: () => queryDatasetBase(dataset1),
        queryDataset2: () => queryDatasetBase(dataset2),
        queryDataset3: () => queryDatasetBase(dataset3),
    };
}

/**
 * Основной компонент
 */
const App: React.FC = () => {

    const isLoading = useSelector(selectIsLoading);
    const isReady = useSelector(selectIsReady);
    const isError = useSelector(selectIsError);

    const {
        urlInput, handleInputChange, queryDatasetCustom, queryDataset1, queryDataset2, queryDataset3,
    } = useControlPanel();

    return (
        <div className={s.root}>

            <div className={s.controlPanel}>
                <button disabled={isLoading} onClick={queryDataset1}>Dataset 1</button>
                <button disabled={isLoading} onClick={queryDataset2}>Dataset 2</button>
                <button disabled={isLoading} onClick={queryDataset3}>Dataset 3</button>

                <input
                    disabled={isLoading}
                    type="text"
                    value={urlInput}
                    onChange={handleInputChange}
                    placeholder="Enter a url"
                />
                <button disabled={isLoading || !urlInput} onClick={queryDatasetCustom}>
                    Load custom
                </button>
            </div>

            {isLoading && <Loader />}
            {isReady && <Plot />}
            {isError && <Error />}
        </div>
    );
};

export { App };
