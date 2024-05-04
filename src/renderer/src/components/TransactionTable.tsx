import { trpc } from "~/lib/trpc";
import { DataTable } from "./DataTable";
import { columns } from "./transaction/columns";

const TransactionTable = () => {
  const { data } = trpc.transaction.getAll.useQuery();

  if (!data) {
    return null;
  }

  return <DataTable columns={columns} data={data} />;
};

export default TransactionTable;
