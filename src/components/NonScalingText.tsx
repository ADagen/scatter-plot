import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectScales } from 'dataLayer/selectors';

export type NonScalingTextProps = React.SVGProps<SVGTextElement>;

/**
 * При использовании трансформаций svg-текст искажается.
 * Этот компонент - для сохранения размера текстов после трансформаций.
 * Название компонента выбрано похожим на значения `non-scaling-stroke | non-scaling-size` из атрибута `vector-effect`.
 * {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/vector-effect}
 */
export const NonScalingText: React.FC<NonScalingTextProps> = ({
    transform,
    ...restProps
}) => {
    const { scaleX, scaleY } = useSelector(selectScales);
    const textResetTransform = `scale(${1/scaleX}, ${1/scaleY})`;

    const resultTransform = useMemo(
        () => [textResetTransform, transform].join(' '),
        [scaleX, scaleY],
    );

    return (
        <text
            transform={resultTransform}
            {...restProps}
        />
    )
};