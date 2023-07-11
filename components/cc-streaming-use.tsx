"use client";

import ShowAPIResponseClientUse from "@/components/ShowAPIResponseClientUse";
import { Spinner } from "@/components/spinner";
import { Suspense } from "react";

export default function CCStreamingUse() {
  return (
    <Suspense fallback={<Spinner />}>
      <ShowAPIResponseClientUse />
    </Suspense>
  );
}
