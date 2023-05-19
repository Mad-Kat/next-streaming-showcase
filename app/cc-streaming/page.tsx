import CCStreaming from "@/components/cc-streaming";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Link href="/">Home</Link>
      <h1>Client components streaming</h1>
      <CCStreaming />
    </main>
  );
}
