"use client";

import { fetchFromAPI } from "@/lib/fetchFromAPI";
import { useEffect, useState } from "react";

export default function ShowAPIResponseClientUseEffect() {
  const [data, setData] = useState<any>();
  useEffect(() => {
    fetchFromAPI().then((d) => setData(d));
  }, []);
  return <p>Text from API Response: {data}</p>;
}
