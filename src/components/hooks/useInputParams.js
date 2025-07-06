import { useCallback, useState } from "react";

function useInputParams() {
  const [valueInput, setValueInput] = useState("");
  const handlerInput = useCallback((e) => {
    const value = e.target.value;
    setValueInput(value);
  }, []);
  return { valueInput, handlerInput };
}
export default useInputParams;
