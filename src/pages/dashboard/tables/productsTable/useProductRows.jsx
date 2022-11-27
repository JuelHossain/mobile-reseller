import { IconDeviceMobileOff } from "@tabler/icons";

import ChangeStatus from "../../shared/ChangeStatus";

export default function useProductRows(products) {
  const rows = products?.map((item) => {
    const { _id: id, brand, model, price, imageLinks, status } = item || {};

    const title = `${brand} ${model}`;
    const image = imageLinks?.length > 0 ? imageLinks[0] : <IconDeviceMobileOff size={16} />;
    const cols = [<ChangeStatus size="xs" w={100} key={id} status={status} id={id} />, price];

    return { id, title, image, cols };
  });
  return rows;
}
