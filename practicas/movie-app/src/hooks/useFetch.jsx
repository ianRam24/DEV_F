import { useState, useEffect } from "react";

export function useFetch(url, query) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData(url, query);
  }, []);
  async function fetchData(url, query) {
    try {
      const req = await fetch(url, query);
      const res = await req.json();
      setData(res);
    } catch (error) {
      console.error(error);
    }
  }
  return { data, isLoading, setData };
}
