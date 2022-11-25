import { useForm } from "@mantine/form";

export default function usePhoneForm() {
  const form = useForm({
    initialValues: {
      name: "",
      price: "",
      condition: "",
      images: [],
      phoneNumber: "",
      location: "",
      description: "",
    },
    validate: {},
  });

  return { ...form };
}
