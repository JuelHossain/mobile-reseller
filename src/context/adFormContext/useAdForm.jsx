/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import initialAdForm from "./iniitalAdForm";
import useAdFormHandler from "./useAdFormHandler";

export default function useAdForm(id) {
  const form = useForm(initialAdForm);
  const { setValues } = form;
  const { submitHandler, submitting, submitError } = useAdFormHandler(form, id);

  useEffect(() => {
    if (id) {
      setValues({ id });
    }
  }, [id, setValues]);

  const adPackage = [
    { days: 7, price: 100, icon: "up", color: "green", progress: 100 },
    { days: 5, price: 75, icon: "up", color: "blue", progress: 100 },
    { days: 3, price: 50, icon: "down", color: "red", progress: 100 },
  ];

  return { ...form, submitHandler, submitting, submitError, adPackage, id };
}
