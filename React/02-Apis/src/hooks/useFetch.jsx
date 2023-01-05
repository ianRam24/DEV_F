import { useState, useEffect } from "react";
export default function useFetch(url) {
  const [data, setData] = useState([] || {});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData(url);
  }, []);
  const fetchData = async url => {
    try {
      const req = await fetch(url);
      const res = await req.json();
      setData(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    data,
    isLoading,
    setData,
  };
}
