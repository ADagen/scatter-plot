import React from 'react';
import s from './Loader.css';

/**
 * Анимашка загрузки
 */
export const Loader: React.FC = () => (
    <div className={s.root}>
        <div className={s.title}>Loading plot data...</div>
        <div className="globalCircleLoader" />
    </div>
);