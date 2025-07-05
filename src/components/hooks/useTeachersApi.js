import { useCallback, useState } from "react";
import apiRoutes from "../../api/apiRoutes";
import axios from "axios";

function useTeacherApi() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getTeachers = useCallback(async () => {
    try {
      setError(false);
      setLoading(true);
      const resp = await axios(apiRoutes.getAllTeachers);
      setData(resp);
    } catch (err) {
      setError(true);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, getTeachers };
}
export default useTeacherApi;
