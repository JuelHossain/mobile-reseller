/* eslint-disable no-nested-ternary */
export const validation = (type) => {
  const login = {
    email: (val) => (val === "" ? "Email is Required" : /^\S+@\S+$/.test(val) ? null : "Invalid email"),
    password: (val) =>
      val === "" ? "Password is Required" : val.length < 6 ? "Password should include at least 6 characters" : null,
  };

  const register = {
    ...login,
    name: (val) =>
      val === "" ? "Name is Required" : val.length <= 3 ? "Name should include at least 3 characters" : null,
    terms: (val) => (val ? null : "You Must Accept The terms and conditions"),
  };

  return type === "login" ? login : register;
};
const initialValues = {
  name: "",
  email: "",
  password: "",
  seller: false,
  photo: null,
};
const initialForm = (type) => ({ initialValues, validate: validation(type) });
export default initialForm;
