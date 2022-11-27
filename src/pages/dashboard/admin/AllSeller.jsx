import UsersTable from "../tables/usersTable/UsersTable";

export default function AllSeller() {
  return <UsersTable options={{ seller: true }} />;
}
