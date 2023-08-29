import { ParcelState } from "src/entities/ParcelState";

export const sortParcelsByDate = (parcels: ParcelState[], sortBy: string) => {
  switch (sortBy) {
    case 'asc':
      return [...parcels].sort((a, b) => Date.parse(a.date || '') - Date.parse(b.date || ''));
    case 'desc':
      return [...parcels].sort((a, b) => Date.parse(b.date || '') - Date.parse(a.date || ''));
    case 'default':
      return [...parcels].sort((a, b) => a.createdAt - b.createdAt);
    default:
      return parcels
  }
};