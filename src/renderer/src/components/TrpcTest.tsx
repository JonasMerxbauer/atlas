import { trpc } from "~/lib/trpc";

export function HelloElectron() {
  const { data } = trpc.post.greeting.useQuery({ name: "Electron" });
  trpc.post.subscription.useSubscription(undefined, {
    onData: (data) => {
      console.log(data);
    },
  });

  if (!data) {
    return null;
  }

  return <div>{data.text}</div>;
}
