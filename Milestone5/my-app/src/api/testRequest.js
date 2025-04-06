import axiosInstance from "./axiosInstance";

export const makeTestPostRequest = async (data, signal) => {
  try {
    const response = await axiosInstance.post("/posts", data, { signal });
    console.log("Fake POST success:", response.data);
    return response.data;
  } catch (error) {
    if (error.name === "CanceledError") {
      console.log("Request cancelled");
    } else {
      console.error("Error during POST:", error);
    }
  }
};
