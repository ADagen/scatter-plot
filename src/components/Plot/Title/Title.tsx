import React from 'react';
import cx from 'classnames';
import s from './Title.css';

export type TitleProps = {
    text: string;
    className?: string;
}

const Title: React.FC<TitleProps> = ({
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

export { Title };
