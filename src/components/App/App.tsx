import React from 'react';
import { useSelector } from 'react-redux';
import s from './App.css';
import { Loader } from '../Loader';
import { Plot } from '../Plot';
import { Error } from '../Error';
import {
    selectIsLoading,
    selectIsReady,
    selectIsError,
} from '../../dataLayer/selectors';

type AppProps = {

};

const App: React.FC<AppProps> = () => {

    const isLoading = useSelector(selectIsLoading);
    const isReady = useSelector(selectIsReady);
    const isError = useSelector(selectIsError);

    return (
        <div className={s.root}>
            {isLoading && <Loader />}
            {isReady && <Plot />}
            {isError && <Error />}
        </div>
    );
};

export { App };
