import { useState, useCallback, ChangeEvent } from "react";

interface IuseInputMultiple {
  [key: string]: string | number;
}

export const useInputMultiple = (initialForm: IuseInputMultiple): any => {
  //리턴 타입을 어떻게 해야하는지 모르겠다.. 일단 any  굉장히 키키킹받는다
  //
  const [form, setForm] = useState(initialForm);

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    setForm({ ...form, [name]: value });
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, onChange, reset];
};

export default useInputMultiple;
