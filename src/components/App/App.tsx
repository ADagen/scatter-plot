import React from 'react';
import s from './App.css';
import { TitleMain } from '../TitleMain';
import { TitleX } from '../TitleX';
import { TitleY } from '../TitleY';

type AppProps = {

};

const App: React.FC<AppProps> = () => {
    return (
        <div className={s.root}>
            <TitleMain text={'title1'} />
            <TitleX text={'title_x'} />
            <TitleY text={'title_y'} />
        </div>
    );
};

export { App };
