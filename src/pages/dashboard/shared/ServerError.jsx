import NotFound from "./NotFound";

export default function ServerError() {
  return <NotFound title="Server side error" children="Please try again later" />;
}
