import ShowAPIResponseServer from "@/components/ShowAPIResponseServer";
import { Spinner } from "@/components/spinner";
import { Suspense } from "react";

export default function RSCStreaming() {
  return (
    <Suspense fallback={<Spinner />}>
      <ShowAPIResponseServer />
    </Suspense>
  );
}
