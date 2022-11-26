const required = (name) => (value) => value === "" ? `${name} is required` : null;

const initialProfile = {
  initialValues: {
    displayName: "",
    email: "",
    phoneNumber: "",
    verified: false,
    seller: false,
    admin: false,
    address: { holding: "", road: "", district: "", postal: "", area: "" },
    photoURL: "",
  },
  validate: {
    displayName: required("displayName"),
    address: {
      holding: required("holding"),
      road: required("road"),
      area: required("area"),
      district: required("district"),
      postal: required("postal"),
    },
    photoURL: required("photoURL"),
    email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
    phoneNumber: (value) => (/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value) ? null : "Invalid Phone Number"),
  },
};

export default initialProfile;
