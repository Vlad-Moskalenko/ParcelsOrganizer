import { RootState } from "../store";

export const selectParcels = (state: RootState) => {
  switch(state.parcels.sortOrder) {
    case 'asc':
      return [...state.parcels.parcels].sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
    case 'desc':
      return [...state.parcels.parcels].sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    default:
      return [...state.parcels.parcels].sort((a, b) => b.createdAt - a.createdAt)
  }
}
export const selectParcelsByDate = (state: RootState) => state.parcels.parcels.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))

