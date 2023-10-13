export const apiHeaders = {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY || "No Key in Environment",
    'X-RapidAPI-Host': import.meta.env.VITE_API_HOST || "No Host in Environment"
};

export const apiBaseLink = import.meta.env.VITE_API_BASELINK || "No URL in Environment";

export const fetcher = async (endpoint: string) => {
    const response = await fetch(endpoint, {method: "GET", headers: apiHeaders});

    if (!response.ok) {
        throw response;
    }

    return await response.json();
}
