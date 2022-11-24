/* eslint-disable no-nested-ternary */
import Form from "./components/Form";
import Heading from "./components/Heading";
import Ratings from "./components/Ratings";
import Sayings from "./components/Sayings";
import SubmitButton from "./components/SubmitButton";

export default function ReviewForm() {
  return (
    <Form>
      <Heading />
      <Ratings />
      <Sayings />
      <SubmitButton />
    </Form>
  );
}
