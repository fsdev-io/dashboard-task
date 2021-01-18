import { useCallback, useState } from "react";

const scaleModifiers = {
  yearly: 12,
  monthly: 1,
  weekly: 0.23,
  daily: 0.032,
};

const dataRanges = {
  profit: 10000000,
  users: 1000,
  orders: 1000,
  complaints: 30,
};

const useApi = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // mocked part to generate request data instead of fetching it
  const callApi = useCallback(
    (payload) => {
      setLoading(true);
      setTimeout(() => {
        setData(
          Math.floor(
            Math.random() *
              dataRanges[endpoint] *
              scaleModifiers[payload.scale || "monthly"]
          )
        );
        setLoading(false);
      }, 500);
    },
    [endpoint]
  );

  return {
    callApi,
    data,
    loading,
  };
};

export default useApi;
