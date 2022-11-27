import { ActionIcon, Avatar, Checkbox, createStyles, Group, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));

export default function TableBody({ rows, selection, setSelection, actions }) {
  const { classes, cx } = useStyles();

  const toggleRow = (id) =>
    setSelection((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));

  const rowsElement = rows?.map(({ id, image, title, cols } = {}) => {
    const selected = selection.includes(id);
    const normalCols = cols?.map((col) => <td key={Math.random()}>{col}</td>);

    const actionCol = actions?.map((item) => (
      <ActionIcon {...item.props} key={Math.random()} onClick={() => item.fn(id, title)}>
        <item.icon size={16} />
      </ActionIcon>
    ));

    return (
      <tr key={id} className={cx({ [classes.rowSelected]: selected })}>
        <td>
          <Checkbox checked={selection.includes(id)} onChange={() => toggleRow(id)} transitionDuration={0} />
        </td>
        <td>
          <Group spacing="sm" noWrap>
            <Avatar size={26} src={image} radius={26}>
              {typeof image !== "string" && image}
            </Avatar>
            <Text className="line-clamp-1" size="sm" weight={500}>
              {title}
            </Text>
          </Group>
        </td>
        {normalCols}
        <td className="flex gap-2">{actionCol}</td>
      </tr>
    );
  });

  return <tbody>{rowsElement}</tbody>;
}
