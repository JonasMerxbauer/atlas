import { createFileRoute } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";
import { CardContent, Card, CardTitle, CardHeader } from "~/components/ui/card";
import { DatePickerWithRange } from "~/components/DatePickerWithRange";
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <div className="flex items-center gap-4">
        <h1 className="font-semibold text-lg md:text-xl">Investments</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button className="hidden sm:flex" variant="outline">
            Today
          </Button>
          <Button className="hidden md:flex" variant="outline">
            This Month
          </Button>
          <DatePickerWithRange />
        </div>
      </div>
      <div className="grid gap-6">
        <Card>
          <CardContent className="flex gap-4 p-4 md:p-6">
            <img
              alt="Chart"
              className="rounded-lg"
              height="80"
              src="/placeholder.svg"
              style={{
                aspectRatio: "80/80",
                objectFit: "cover",
              }}
              width="80"
            />
            <div className="grid gap-1 text-sm md:grid-cols-2 md:gap-4 md:text-base">
              <div className="flex items-center gap-1">
                <TrendingUpIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <div className="font-semibold">+5.23%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  1D
                </div>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUpIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <div className="font-semibold">+2.34%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  1W
                </div>
              </div>
              <div className="flex items-center gap-1">
                <TrendingDownIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <div className="font-semibold">-1.23%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  1M
                </div>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUpIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <div className="font-semibold">+7.89%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  1Y
                </div>
              </div>
            </div>
            <div className="grid gap-1 text-sm md:grid-cols-2 md:gap-4 md:text-base">
              <div className="flex items-center gap-1">
                <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <div className="">Today</div>
                <div className="ml-auto font-semibold">$23.45</div>
              </div>
              <div className="flex items-center gap-1">
                <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <div className="">Total Return</div>
                <div className="ml-auto font-semibold">$45.67</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b">
            <CardTitle className="text-base">Asset Allocation</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b">
            <CardTitle className="text-base">Performance</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b">
            <CardTitle className="text-base">News & Updates</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 text-sm md:text-base">
            <div className="flex items-start gap-4">
              <img
                alt="Chart"
                className="rounded-lg"
                height="80"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width="80"
              />
              <div>
                <h3 className="font-semibold">
                  Acme Inc. reports strong Q2 earnings
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Published on June 15, 2023
                </p>
                <p>
                  Acme Inc. (ACME) reported strong earnings in the second
                  quarter, with net income rising by 25% compared to the same
                  period last year.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img
                alt="Chart"
                className="rounded-lg"
                height="80"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width="80"
              />
              <div>
                <h3 className="font-semibold">
                  Market volatility: What investors need to know
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Published on June 10, 2023
                </p>
                <p>
                  The recent market volatility has left many investors feeling
                  uncertain about the future. In this article, we will discuss
                  the causes of the volatility, its potential impact on
                  different asset classes, and what investors can do to navigate
                  the turbulent market.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}
function TrendingDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
      <polyline points="16 17 22 17 22 11" />
    </svg>
  );
}

function TrendingUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
