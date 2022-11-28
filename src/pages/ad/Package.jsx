import { Center, Group, Paper, RingProgress, SimpleGrid, Text } from "@mantine/core";
import { IconArrowDownRight, IconArrowUpRight } from "@tabler/icons";
import { useAdFormContext } from "../../context/adFormContext/adFormContext";

const icons = {
  up: IconArrowUpRight,
  down: IconArrowDownRight,
};

export default function Package() {
  const { adPackage, setValues, values: { duration } = {} } = useAdFormContext();
  const stats = adPackage.map((stat) => {
    const Icon = icons[stat?.icon];
    const selected = duration === stat.days;
    return (
      <Paper
        className="cursor-pointer"
        sx={(theme) => ({
          backgroundColor: selected ? (theme.colorScheme === "dark" ? theme.colors.main[9] : theme.colors.main[1]) : "",
        })}
        onClick={() => setValues({ duration: stat.days, price: stat.price })}
        withBorder
        radius="md"
        p="xs"
        key={stat.days}
      >
        <Group>
          <RingProgress
            size={80}
            roundCaps
            thickness={8}
            sections={[{ value: stat.progress, color: stat.color }]}
            label={
              <Center>
                <Icon size={22} stroke={1.5} />
              </Center>
            }
          />

          <div>
            <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
              {stat.days} days
            </Text>
            <Text weight={700} size="xl">
              {stat.price}taka
            </Text>
          </div>
        </Group>
      </Paper>
    );
  });
  return (
    <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
      {stats}
    </SimpleGrid>
  );
}
