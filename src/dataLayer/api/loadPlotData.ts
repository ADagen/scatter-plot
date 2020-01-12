import { APIResponse } from '../APIResponse';
import example from '../../../stub/example_2.json';

export const loadPlotData = () =>
    new Promise<APIResponse>((resolve, reject) => {
        // const isSuccess = Math.random() > 0.2;
        const isSuccess = true;
        setTimeout(isSuccess ? () => resolve(example) : reject, 500);
    });
