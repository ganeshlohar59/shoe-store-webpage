import { useState, useEffect } from "react";
import useFetch from "./useFetch";

export default function useFetchAll(urls) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Promises
    const promises = urls.map((url) => {
      fetch().then((response) => {
        if (response.ok) return response.json();
        throw response;
      });
    });

    Promise.all(promises)
      .then((json) => setData(json))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
