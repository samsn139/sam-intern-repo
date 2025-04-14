import React, { useEffect } from "react";
import { makeTestPostRequest } from "./api/testRequest";

const TestPost = () => {
  useEffect(() => {
    const controller = new AbortController();

    const data = {
      title: "Focus Bear Demo",
      body: "This is a test post from React.",
      userId: 1,
    };

    makeTestPostRequest(data, controller.signal);

    return () => controller.abort(); // Cleanup
  }, []);

  return <div className="text-center mt-10">POST request sent! Check console.</div>;
};

export default TestPost;
