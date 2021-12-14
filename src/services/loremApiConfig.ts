import axios from 'axios';

let loremApiConfig = axios.create({
    baseURL: process.env.LOREM_FAKER_API_BASE_URL
});

loremApiConfig.interceptors.response.use((response: any) => {
    // Triggered with 2xx status code responses
    return response.data;
}, (error: any) => {
    // Triggered with any other status code
    return error;
});

export default loremApiConfig;
