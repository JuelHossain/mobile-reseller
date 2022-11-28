import { Paper } from "@mantine/core";

export default function Wrapper({ image, children }) {
  return (
    <Paper withBorder className="flex justify-center flex-1">
      <div className="flex-1 max-w-full max-h-full hidden sm:flex ">
        <img src={image} alt="add" className=" h-full w-full object-cover " />
      </div>
      {children}
    </Paper>
  );
}
