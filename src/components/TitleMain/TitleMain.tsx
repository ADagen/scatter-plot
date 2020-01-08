import React from 'react';
import cx from 'classnames';
import s from './TitleMain.css';

export type TitleMainProps = {
    text: string;
    className?: string;
}

const TitleMain: React.FC<TitleMainProps> = ({
    text,
    className,
}) => {
    return (
        <header
            children={text}
            className={cx(className, s.root)}
        />
    );
};

export { TitleMain };
