import React, { useEffect, useState } from "react";
import { localStorage } from "@/common/utils";

interface parameterType {
  key: string;
}
interface IItems {
  value: string;
}
const useStorageCheck = ({ key }: parameterType) => {
  const [items, setItems] = useState<IItems>();

  useEffect(() => {
    const value: any = localStorage.getLocalStorage(key) || undefined;
    console.log(value, "--");
    if (value) {
      setItems(value);
    }
  }, [key]);
  return { items };
};

export default useStorageCheck;
