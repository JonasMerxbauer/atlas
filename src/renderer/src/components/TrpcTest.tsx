import { trpc } from "~/lib/trpc";

export function HelloElectron() {
  const { data } = trpc.greeting.useQuery({ name: "Electron" });
  trpc.subscription.useSubscription(undefined, {
    onData: (data) => {
      console.log(data);
    },
  });

  if (!data) {
    return null;
  }

  return <div>{data.text}</div>;
}
