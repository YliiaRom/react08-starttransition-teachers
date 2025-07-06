import { useCallback, useState } from "react";

import apiRoutes from "../../api/apiRoutes.js";
import axios from "axios";

const useFetchWithBtn = () => {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  // const {data : dataType, loading: loadingType, error: errorType} = useFetch(apiRoutes.getByCategoryAndType);

  const getData = useCallback(async (title) => {
    try {
      setLoader(true);
      const res = await fetch(apiRoutes.getByCategoryAndType(title));
      if (!res.ok) {
        throw new Error(`error ${res.status}`);
      }
      const dataVal = await res.json();
      setData(dataVal);
    } catch (err) {
      setError(true);
      console.error(err.message);
    } finally {
      setLoader(false);
    }
  }, []);
  const addTeacher = useCallback(async (newCard) => {
    try {
      const res = await axios.post(apiRoutes.addTeacher, newCard);
      console.log(res.data);
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  return { data, loader, error, getData, addTeacher };
};
export default useFetchWithBtn;
