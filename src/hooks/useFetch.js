import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(null);

    fetch(url)
      .then((response) => response.json())
      .then((responseData) => { setData(responseData); });
  }, [url]);

  return data;
}
export default useFetch;
