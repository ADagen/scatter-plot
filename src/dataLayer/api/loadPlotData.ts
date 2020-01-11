import { APIResponse } from '../APIResponse';
import example_1 from '../../../stub/example_1.json';

export const loadPlotData = () =>
    new Promise<APIResponse>((resolve, reject) => {
        // const isSuccess = Math.random() > 0.2;
        const isSuccess = true;
        setTimeout(isSuccess ? resolve.bind(null, example_1) : reject, 500);
    });