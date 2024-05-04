import { createFileRoute } from "@tanstack/react-router";
import AreaChartHero from "~/components/AreaChart";
import TransactionTable from "~/components/TransactionTable";

export const Route = createFileRoute("/portfolio")({
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="p-2">
      <AreaChartHero />
      <TransactionTable />
    </div>
  );
}
