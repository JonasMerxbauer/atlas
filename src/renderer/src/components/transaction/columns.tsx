import { ColumnDef } from "@tanstack/react-table";

type Transaction = {
  id: number;
  type: string | null;
  createdAt: Date;
  updatedAt: Date | null;
  amount: number | null;
  currency: string | null;
  nativeAmount: number | null;
  nativeCurrency: string | null;
  transactionDate: Date | null;
  status: string | null;
  connectionId: number | null;
};

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "transactionDate",
    header: "Date",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];
