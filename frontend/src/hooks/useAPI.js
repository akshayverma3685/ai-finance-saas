import { useState } from "react";
import axios from "axios";

export default function useApi(baseURL = "/api") {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (method, url, data = {}, headers = {}) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios({ method, url: `${baseURL}${url}`, data, headers });
      return res.data;
    } catch (err) {
      setError(err.response?.data?.message || "API request failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error };
}
