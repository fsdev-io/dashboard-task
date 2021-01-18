import React, { useEffect, useState } from "react";
import useApi from "../../../hooks/useApi";
import CardComponent from "./Card";

const Card = ({ name, type, icon, ...statisticProps }) => {
  const [scale, setScale] = useState("monthly");
  const { data, loading, callApi } = useApi(type);

  useEffect(() => {
    callApi({ scale });
  }, [callApi, scale]);

  const props = {
    name,
    icon,
    value: data,
    loading,
    scale,
    statisticProps,
    handleChangeScale: setScale,
  };

  return <CardComponent {...props} />;
};

export default Card;
