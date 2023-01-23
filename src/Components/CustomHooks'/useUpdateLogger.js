import { useEffect } from "react";

const useUpdateLogger = (uniqueKey, value) => {
  useEffect(() => {
    console.log(`From ${uniqueKey} : ${value}`);
  }, [uniqueKey, value]);
};

export default useUpdateLogger;
