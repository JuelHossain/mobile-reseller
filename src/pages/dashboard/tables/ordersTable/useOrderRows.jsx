import { Button } from "@mantine/core";
import { IconDeviceMobileCharging } from "@tabler/icons";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../../context/userContext";

export default function useOrderRows(orders) {
  const { admin } = useUserContext();
  const navigate = useNavigate();
  const rows = orders?.map((item) => {
    const { _id: id, brand, model, price, paid } = item || {};
    const payment = (
      <Button onClick={() => !paid && !admin && navigate(`/payment/${id}`)} compact variant="light" key={id}>
        {paid ? "paid" : admin ? "Unpaid" : "Pay now"}
      </Button>
    );
    const bookingDetails = (
      <Button variant="outline" compact>
        Check Booking
      </Button>
    );
    return {
      id,
      title: `${brand} ${model}`,
      image: <IconDeviceMobileCharging size={16} />,
      cols: [bookingDetails, payment, price],
    };
  });
  return rows;
}
