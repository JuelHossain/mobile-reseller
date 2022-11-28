import { useParams } from "react-router-dom";
import { AdFormProvider } from "../../context/adFormContext/adFormContext";
import useGetAProduct from "../../hooks/phones/useGetAProduct";
import AdPreview from "./AdPreview";
import GiveAnAd from "./GiveAnAd";

export default function AdPage() {
  const { id } = useParams();
  const { product } = useGetAProduct(id);
  const { adWillEnd, adCreated } = product || {};
  const ad = new Date(adWillEnd) > new Date(adCreated);

  return <AdFormProvider id={id}>{ad ? <AdPreview product={product} /> : <GiveAnAd />}</AdFormProvider>;
}
