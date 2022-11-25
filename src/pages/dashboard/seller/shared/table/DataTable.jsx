import { ScrollArea, Table } from "@mantine/core";
import { useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

export default function DataTable({ data }) {
  const [selection, setSelection] = useState([]);
  const props = { ...data, selection, setSelection };

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <TableHead {...props} />
        <TableBody {...props} />
      </Table>
    </ScrollArea>
  );
}
