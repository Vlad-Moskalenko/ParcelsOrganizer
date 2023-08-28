import { RootState } from "../store";

export const selectParcels = (state: RootState) => state.parcels.parcels;
