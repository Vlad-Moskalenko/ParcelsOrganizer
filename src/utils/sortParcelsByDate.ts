import { ParcelState } from "src/entities/ParcelState";

export const sortParcelsByDate = (parcels: ParcelState[], sortBy: string) => {
  switch (sortBy) {
    case 'asc':
      return [...parcels].sort((a, b) => (Date.parse(a.date) || 0) - (Date.parse(b.date) || 0));
    case 'desc':
      return [...parcels].sort((a, b) => (Date.parse(b.date) || 0) - (Date.parse(a.date)) || 0);
    case 'default':
      return [...parcels].sort((a, b) => b.createdAt - a.createdAt);
    default:
      return parcels
  }
};