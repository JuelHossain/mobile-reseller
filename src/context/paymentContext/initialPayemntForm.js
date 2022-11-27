/* eslint-disable no-nested-ternary */
const required = (name) => (value) => value === "" ? `${name} is required` : null;

const initialPaymentForm = {
  initialValues: {
    cardNumber: "",
    paymentMethod: "Bkash",
  },
  validate: {
    cardNumber: required("card number"),
  },
};
export default initialPaymentForm;
