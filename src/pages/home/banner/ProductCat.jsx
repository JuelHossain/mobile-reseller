import { Card, Container, createStyles, SimpleGrid, Stack, Text, Title, UnstyledButton } from "@mantine/core";
import { Link } from "react-router-dom";
import categories from "../../products/components/categories";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: theme.radius.md,
    height: 120,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease, transform 100ms ease",

    "&:hover": {
      boxShadow: `${theme.shadows.md} !important`,
      transform: "scale(1.05)",
    },
  },
}));

export default function ProductCategories() {
  const { classes, theme } = useStyles();

  const items = categories.map((item) => (
    <UnstyledButton component={Link} to={item.link} key={item.label} className={classes.item}>
      <item.icon color={theme.fn.primaryColor()} size={32} />
      <Text className="text-xs xs:text-xl" mt={7}>
        {item.label}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card withBorder shadow="md" radius="md" className="bg-banner h-full flex bg-no-repeat bg-cover bg-bottom ">
      <Container className="flex-1 flex flex-col items-center justify-center sm:-mt-20 ">
        <div className="bg-main-2/50 dark:bg-neu-8/50 rounded-md p-5 sm:p-10">
          <Stack>
            <Title className="text-center text-2xl xs:text-3xl" color="primary">
              Choice The Best Phone For You
            </Title>
            <Container size="sm" align="center">
              <Text className="text-md xs:text-xl line-clamp-4">
                mobile seller here for you , we are making the seller and buyer life easier by our service please choice
                the best phone for you from below categories
              </Text>
            </Container>
            <SimpleGrid cols={2}  mt="md">
              {items}
            </SimpleGrid>
          </Stack>
        </div>
      </Container>
    </Card>
  );
}
