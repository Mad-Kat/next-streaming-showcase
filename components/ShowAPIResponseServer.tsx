import { fetchFromAPI } from "@/lib/fetchFromAPI";

export default async function ShowAPIResponseServer() {
  const data = await fetchFromAPI();

  return (
    <div id="apiResponse">
      <div className="text-center">API Response: </div>
      <div className="text-xl mt-2 uppercase font-bold bg-gradient-to-r from-green-300 to-blue-500 text-transparent bg-clip-text text-center">
        {data}
      </div>
    </div>
  );
}
