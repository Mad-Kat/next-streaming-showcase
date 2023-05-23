"use client";

import ShowAPIResponseClientUse from "@/components/ShowAPIResponseClientUse";
import { Suspense } from "react";

export default function CCStreamingUse() {
  return (
    <Suspense fallback="loading...">
      <ShowAPIResponseClientUse />;
    </Suspense>
  );
}
