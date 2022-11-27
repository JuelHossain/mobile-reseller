import UsersTable from "../tables/usersTable/UsersTable";

export default function AllBuyer() {
  return <UsersTable options={{ buyer: true }} />;
}
