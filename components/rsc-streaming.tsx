import ShowAPIResponseServer from "@/components/ShowAPIResponseServer";
import { Suspense } from "react";

export default function RSCStreaming() {
  return (
    <Suspense fallback="loading...">
      {/* @ts-ignore */}
      <ShowAPIResponseServer />;
    </Suspense>
  );
}
