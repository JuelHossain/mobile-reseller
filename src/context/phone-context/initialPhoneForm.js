const required = (name) => (value) => value === "" ? `${name} is required` : null;

const initialPhoneForm = {
  initialValues: {
    brand: "",
    model: "",
    price: "",
    condition: "",
    imageLinks: [],
    description: "",
    phoneNumber: "",
    location: "",
  },
  validate: {
    brand: required("brand"),
    model: required("model"),
    price: required("price"),
    condition: required("condition"),
    description: required("description"),
    location: required("location"),

    phoneNumber: (value) => (/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value) ? null : "Invalid Phone Number"),

    imageLinks: (value) => (value.length === 0 ? "Images are required" : null),
  },
};
export default initialPhoneForm;
