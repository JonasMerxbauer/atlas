import { createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "~/components/ui/popover";
import { Calendar } from "~/components/ui/calendar";
import { CardContent, Card, CardTitle, CardHeader } from "~/components/ui/card";
export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <div className="flex items-center gap-4">
        <Button size="icon" variant="outline">
          <ArrowLeftIcon className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="font-semibold text-lg md:text-xl text-gray-50">
          Investments
        </h1>
        <div className="ml-auto flex items-center gap-2">
          <Button className="hidden sm:flex text-gray-50" variant="outline">
            Today
          </Button>
          <Button className="hidden md:flex text-gray-50" variant="outline">
            This Month
          </Button>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="w-[280px] justify-start text-left font-normal text-gray-50"
                id="date"
                variant="outline"
              >
                <CalendarClockIcon className="mr-2 h-4 w-4" />
                June 01, 2023 - June 30, 2023
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-auto p-0">
              <Calendar initialFocus mode="range" numberOfMonths={2} />
            </PopoverContent>
          </Popover>
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
                <TrendingUpIcon className="w-4 h-4 text-gray-400" />
                <div className="font-semibold text-gray-50">+5.23%</div>
                <div className="text-sm text-gray-400">1D</div>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUpIcon className="w-4 h-4 text-gray-400" />
                <div className="font-semibold text-gray-50">+2.34%</div>
                <div className="text-sm text-gray-400">1W</div>
              </div>
              <div className="flex items-center gap-1">
                <TrendingDownIcon className="w-4 h-4 text-gray-400" />
                <div className="font-semibold text-gray-50">-1.23%</div>
                <div className="text-sm text-gray-400">1M</div>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUpIcon className="w-4 h-4 text-gray-400" />
                <div className="font-semibold text-gray-50">+7.89%</div>
                <div className="text-sm text-gray-400">1Y</div>
              </div>
            </div>
            <div className="grid gap-1 text-sm md:grid-cols-2 md:gap-4 md:text-base">
              <div className="flex items-center gap-1">
                <CalendarIcon className="w-4 h-4 text-gray-400" />
                <div className="text-gray-50">Today</div>
                <div className="ml-auto font-semibold text-gray-50">$23.45</div>
              </div>
              <div className="flex items-center gap-1">
                <CalendarIcon className="w-4 h-4 text-gray-400" />
                <div className="text-gray-50">Total Return</div>
                <div className="ml-auto font-semibold text-gray-50">$45.67</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b">
            <CardTitle className="text-base text-gray-50">
              Asset Allocation
            </CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b">
            <CardTitle className="text-base text-gray-50">
              Performance
            </CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b">
            <CardTitle className="text-base text-gray-50">
              News & Updates
            </CardTitle>
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
                <h3 className="font-semibold text-gray-50">
                  Acme Inc. reports strong Q2 earnings
                </h3>
                <p className="text-sm text-gray-400">
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
                <h3 className="font-semibold text-gray-50">
                  Market volatility: What investors need to know
                </h3>
                <p className="text-sm text-gray-400">
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

function ArrowLeftIcon(props) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function CalendarClockIcon(props) {
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
      <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h5" />
      <path d="M17.5 17.5 16 16.25V14" />
      <path d="M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" />
    </svg>
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

function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LineChartIcon(props) {
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
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

function Package2Icon(props) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
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

function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
