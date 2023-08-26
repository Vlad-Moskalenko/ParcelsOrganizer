import { RootState } from "../store";

export const selectParcels = (state: RootState) => state.parcels.parcels
export const selectParcelsByDate = (state: RootState) => state.parcels.parcels.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))

