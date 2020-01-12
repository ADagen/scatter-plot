export const loadPlotData = async (url: string) => {
    try {
        const response = await fetch(url);
        if (response?.status === 200) {
            return response.json();
        }
        return Promise.reject(response);
    } catch(error) {
        return Promise.reject(error);
    }
};
