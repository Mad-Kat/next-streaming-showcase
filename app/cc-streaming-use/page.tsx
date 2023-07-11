import CCStreamingUse from "@/components/cc-streaming-use";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <main className="p-24">
      <Link href="/" prefetch={false}>
        {"<- Home"}
      </Link>

      <h1 className="text-3xl my-4 uppercase font-bold bg-gradient-to-r from-green-300 to-blue-500 text-transparent bg-clip-text">
        Client components streaming with use
      </h1>

      <CCStreamingUse />
    </main>
  );
}
