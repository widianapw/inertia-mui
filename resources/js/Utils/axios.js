import axios from 'axios';
// config

// ----------------------------------------------------------------------

const axiosInstance = axios.create({baseURL: "https://api-dev-minimal-v4.vercel.app"});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
