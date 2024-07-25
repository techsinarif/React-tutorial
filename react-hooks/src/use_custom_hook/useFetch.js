import { useState, useEffect, useDebugValue } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useDebugValue("Fetches data from given api");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;