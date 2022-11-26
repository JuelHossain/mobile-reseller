/* eslint-disable no-nested-ternary */
const required = (name) => (value) => value === "" ? `${name} is required` : null;

const initialBookingForm = {
  initialValues: {
    brand: "",
    model: "",
    price: "",
    pickupLocation: "",
    seller: { phoneNumber: "", email: "", name: "" },
    buyer: {
      phoneNumber: "",
      email: "",
      name: "",
      address: { holding: "", road: "", district: "", postal: "", area: "" },
    },
  },
  validate: {
    brand: required("brand"),
    model: required("model"),
    price: required("price"),
    pickupLocation: required("location"),
    seller: {
      phoneNumber: required("seller number"),
      email: required("seller email"),
      name: required("seller name"),
    },
    buyer: {
      phoneNumber: (value) =>
        /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value) ? null : "Invalid Phone Number",
      email: (val) => (val === "" ? "Email is Required" : /^\S+@\S+$/.test(val) ? null : "Invalid email"),
      name: required("seller name"),
      address: {
        holding: required("holding"),
        road: required("road"),
        area: required("area"),
        district: required("district"),
        postal: required("postal"),
      },
    },
  },
};
export default initialBookingForm;
