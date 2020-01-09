import { APIResponse } from '../APIResponse';

export const loadPlotData = () =>
    new Promise<APIResponse>((resolve, reject) => {
        const isSuccess = Math.random() > 0.2;
        setTimeout(isSuccess ? resolve : reject, 500);
    });