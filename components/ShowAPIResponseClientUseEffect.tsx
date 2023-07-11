"use client";

import { fetchFromAPI } from "@/lib/fetchFromAPI";
import { useEffect, useState } from "react";

export default function ShowAPIResponseClientUseEffect() {
  const [data, setData] = useState<any>();
  useEffect(() => {
    fetchFromAPI().then((d) => setData(d));
  }, []);
  return (
    <div id="apiResponse">
      <div className="text-center">API Response: </div>
      <div className="text-xl mt-2 uppercase font-bold bg-gradient-to-r from-green-300 to-blue-500 text-transparent bg-clip-text text-center">
        {data}
      </div>
    </div>
  );
}
