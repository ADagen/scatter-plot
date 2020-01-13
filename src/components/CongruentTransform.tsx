import React from 'react';
import { useSelector } from 'react-redux';
import { startPoint } from 'core/constants';
import { selectExtremums, selectScales } from 'dataLayer/selectors';

export type CongruentTransformProps = {
    className?: string,
};

/**
 * Компонент для изометрической трансформации, используются SVG атрибуты вместо CSS-трансформаций,
 * так как Edge только с 17-й версии поддерживает CSS-трансформации для SVG.
 *
 * WARN! Нельзя использовать CongruentTransform внутри другого CongruentTransform,
 * так как стек трансформаций следит за тобой.
 *
 * TODO: как-нибудь проверять, что трансформация в мировые координаты уже произведена,
 * и кидать ошибку при попытке повторно применить этот компонент. Через контекст?
 */
export const CongruentTransform: React.FC<CongruentTransformProps> = ({
    children,
    className,
}) => {

    const { minX, minY } = useSelector(selectExtremums);
    const { scaleX, scaleY } = useSelector(selectScales);

    const startPointTranslate = `translate(${startPoint.x}, ${startPoint.y})`;
    // минус перед scaleY - не опечатка, нужен для инвертирования по оси ординат
    const scaleTransform = `scale(${scaleX}, -${scaleY})`;
    const originTranslate = `translate(${-minX}, ${-minY})`;
    const transform = [startPointTranslate, scaleTransform, originTranslate].join(' ');

    return <g {...{ transform, className, children }} />;
};
