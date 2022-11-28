import moment from "moment";

const initialAdForm = {
  initialValues: {
    duration: 7,
    price: 100,
    adCreated: new Date(),
    adWillEnd() {
      return moment().add(this.duration, "days")._d;
    },
    id: "",
  },
};
export default initialAdForm;
