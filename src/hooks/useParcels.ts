import { useQuery } from "@tanstack/react-query"
import { getParcelsList } from "src/services/parcelsApi"

export const useParcels = () => useQuery({
  queryKey: ['parcels'],
  queryFn: getParcelsList,
  staleTime: 24*60*60*1000
})