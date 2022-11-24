import { Rating, Text } from "@mantine/core";

export default function RatingAndSayings({ rating, sayings }) {
  return (
    <div className="px-4">
      <Rating readOnly value={rating} />
      <Text className="line-clamp-2">{sayings}</Text>
    </div>
  );
}
