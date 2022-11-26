/* eslint-disable no-await-in-loop */

export default function useBookingHandler({ onSubmit }) {
  const submitHandler = (e) => {
    const handler = (data) => {
      console.log(data);
    };
    onSubmit(handler)(e);
  };

  return { submitHandler };
}
