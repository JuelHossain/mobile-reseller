import { Checkbox } from "@mantine/core";

export default function TableHead({ selection, setSelection, headers, rows }) {
  const toggleAll = () =>
    setSelection((current) => (current.length === rows.length ? [] : rows.map((item) => item.id)));

  const headersElement = headers.map((item) => (
    <th className="capitalize" key={item}>
      {item}
    </th>
  ));

  return (
    <thead>
      <tr>
        <th style={{ width: 40 }}>
          <Checkbox
            onChange={toggleAll}
            checked={selection?.length === rows?.length}
            indeterminate={selection.length > 0 && selection.length !== rows.length}
            transitionDuration={0}
          />
        </th>
        {headersElement}
      </tr>
    </thead>
  );
}
