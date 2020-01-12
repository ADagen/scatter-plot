import React from 'react';
import s from './Error.css';

/**
 * Показывает сообщение об ошибке
 */
export const Error: React.FC = () => (
    <div className={s.root}>
        Something went wrong
    </div>
);