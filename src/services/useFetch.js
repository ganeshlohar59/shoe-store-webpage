import { useState, useEffect } from "react";
import { BASE_URL } from "../Constants";

import React from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch
  useEffect(() => {
    async function initPage() {
      try {
        const response = await fetch(BASE_URL + url);
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          throw response;
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    initPage();
  }, [url]);

  return { data, error, loading };
}
