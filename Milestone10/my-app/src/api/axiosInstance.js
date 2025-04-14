import axios from "axios";

// Generate a unique request ID
const generateRequestId = () => `req_${Math.random().toString(36).substring(2, 15)}`;

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // public test API
  timeout: 8000,
  headers: {
    Accept: "*/*",
    "X-Request-ID": generateRequestId(),
  },
});

// Interceptor: attach token (if available)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Error logging
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isCancel(error)) {
      console.warn("Request canceled:", error.message);
    } else {
      console.error("API Error:", error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
